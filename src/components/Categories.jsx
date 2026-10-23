import { ArrowRight } from "lucide-react";
import { categories } from "../data/products.js";
import Reveal from "./Reveal.jsx";

export default function Categories({ onSelectCategory }) {
  return (
    <section className="section categories" id="categories">
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div>
            <span className="eyebrow">Категории</span>
            <h2 className="section-title">Для кого</h2>
          </div>
          <a className="text-link" href="#catalog">
            Смотреть всё
            <ArrowRight size={16} strokeWidth={1.6} />
          </a>
        </Reveal>

        <div className="categories__list">
          {categories.map((category, index) => (
            <Reveal key={category.id} delay={index * 70} className="category-row">
              <button
                className="category-row__button"
                onClick={() => onSelectCategory(category.id)}
              >
                <span className="category-row__index">0{index + 1}</span>
                <span className="category-row__title">{category.title}</span>
                <span className="category-row__meta">{category.count}</span>
                <span className="category-row__arrow">
                  <ArrowRight size={18} strokeWidth={1.6} />
                </span>
                <div className="category-row__media">
                  <img src={category.image} alt="" loading="lazy" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
