import { useState } from "react";
import { Heart } from "lucide-react";
import { formatPrice } from "../data/products.js";

export default function ProductCard({
  product,
  favorite,
  onFavorite,
  onAdd,
  index = 0,
}) {
  const [size, setSize] = useState(product.sizes[0]);

  return (
    <article className="product" style={{ "--product-index": index }}>
      <div className="product__media">
        <img src={product.image} alt={product.name} loading="lazy" />
        <button
          className={`product__favorite ${favorite ? "is-active" : ""}`}
          onClick={() => onFavorite(product.id)}
          aria-label={favorite ? "Убрать из избранного" : "В избранное"}
        >
          <Heart
            size={18}
            strokeWidth={1.3}
            fill={favorite ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="product__info">
        <div className="product__head">
          <h3 className="product__name">{product.name}</h3>
          <div className="product__prices">
            <span>{formatPrice(product.price)}</span>
            {product.oldPrice && <s>{formatPrice(product.oldPrice)}</s>}
          </div>
        </div>

        <div className="product__row">
          <div className="product__sizes">
            {product.sizes.slice(0, 4).map((item) => (
              <button
                key={item}
                className={`product__size ${size === item ? "is-active" : ""}`}
                onClick={() => setSize(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            className="product__add"
            onClick={() => onAdd(product, size)}
          >
            В корзину
          </button>
        </div>
      </div>
    </article>
  );
}
