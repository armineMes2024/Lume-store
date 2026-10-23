import { useMemo } from "react";
import { SearchX } from "lucide-react";
import { products } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";
import Reveal from "./Reveal.jsx";

const filters = [
  { id: "all", label: "Все" },
  { id: "women", label: "Женщинам" },
  { id: "men", label: "Мужчинам" },
  { id: "kids", label: "Детям" },
];

export default function Catalog({
  activeCategory,
  onCategoryChange,
  query,
  onQueryChange,
  favorites,
  onFavorite,
  onAdd,
}) {
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchCategory =
        activeCategory === "all" || product.category === activeCategory;
      const matchQuery =
        !normalized ||
        product.name.toLowerCase().includes(normalized);

      return matchCategory && matchQuery;
    });
  }, [activeCategory, query]);

  return (
    <section className="section catalog" id="catalog">
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div>
            <span className="eyebrow">Каталог</span>
            <h2 className="section-title">Коллекция</h2>
          </div>
          <span className="section-count">{filtered.length} позиций</span>
        </Reveal>

        <Reveal className="catalog__bar">
          <div className="catalog__filters">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`catalog__filter ${activeCategory === filter.id ? "is-active" : ""}`}
                onClick={() => onCategoryChange(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="catalog__search-inline">
            <input
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Поиск"
              aria-label="Поиск по каталогу"
            />
            {query && <button onClick={() => onQueryChange("")}>Сбросить</button>}
          </div>
        </Reveal>

        {filtered.length > 0 ? (
          <div className="catalog__grid">
            {filtered.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                favorite={favorites.has(product.id)}
                onFavorite={onFavorite}
                onAdd={onAdd}
              />
            ))}
          </div>
        ) : (
          <div className="catalog__empty">
            <SearchX size={32} strokeWidth={1.2} />
            <h3>Ничего не найдено</h3>
            <p>Измени фильтр или сбрось поиск</p>
            <button
              className="btn btn--ghost"
              onClick={() => {
                onQueryChange("");
                onCategoryChange("all");
              }}
            >
              Сбросить
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
