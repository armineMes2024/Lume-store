import { useEffect } from "react";
import {
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  Truck,
  X,
} from "lucide-react";
import { formatPrice } from "../data/products.js";

const FREE_SHIPPING = 7000;

export default function CartDrawer({
  open,
  items,
  onClose,
  onQuantity,
  onRemove,
  onCheckout,
}) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const remaining = Math.max(FREE_SHIPPING - total, 0);
  const progress = Math.min((total / FREE_SHIPPING) * 100, 100);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.classList.toggle("no-scroll", open);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("no-scroll");
    };
  }, [open, onClose]);

  return (
    <div className={`cart ${open ? "cart--open" : ""}`} aria-hidden={!open}>
      <div className="cart__overlay" onClick={onClose} />

      <aside className="cart__panel" aria-label="Корзина">
        <div className="cart__head">
          <div>
            <span className="eyebrow">Твоя корзина</span>
            <h2>
              {items.length > 0 ? `${items.length} вещи` : "Пока пусто"}
            </h2>
          </div>
          <button className="icon-btn cart__close" onClick={onClose} aria-label="Закрыть корзину">
            <X size={22} strokeWidth={1.6} />
          </button>
        </div>

        {items.length > 0 ? (
          <>
            <div className="cart__shipping">
              <div className="cart__shipping-text">
                <Truck size={17} strokeWidth={1.6} />
                {remaining > 0 ? (
                  <span>
                    До бесплатной доставки <strong>{formatPrice(remaining)}</strong>
                  </span>
                ) : (
                  <span>Доставка бесплатно — отлично!</span>
                )}
              </div>
              <div className="cart__progress">
                <span style={{ width: `${progress}%` }} />
              </div>
            </div>

            <div className="cart__items">
              {items.map((item) => (
                <div className="cart-item" key={item.key}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item__info">
                    <h3>{item.name}</h3>
                    <span className="cart-item__size">Размер: {item.size}</span>
                    <div className="cart-item__bottom">
                      <div className="cart-item__qty">
                        <button
                          onClick={() => onQuantity(item.key, -1)}
                          aria-label="Уменьшить количество"
                        >
                          <Minus size={13} strokeWidth={2} />
                        </button>
                        <span>{item.qty}</span>
                        <button
                          onClick={() => onQuantity(item.key, 1)}
                          aria-label="Увеличить количество"
                        >
                          <Plus size={13} strokeWidth={2} />
                        </button>
                      </div>
                      <strong>{formatPrice(item.price * item.qty)}</strong>
                    </div>
                  </div>
                  <button
                    className="cart-item__remove"
                    onClick={() => onRemove(item.key)}
                    aria-label="Удалить товар"
                  >
                    <Trash2 size={16} strokeWidth={1.6} />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart__footer">
              <div className="cart__total">
                <span>Итого</span>
                <strong>{formatPrice(total)}</strong>
              </div>
              <span className="cart__note">
                Доставка и налоги рассчитываются при оформлении
              </span>
              <button className="btn btn--dark cart__checkout" onClick={onCheckout}>
                Оформить заказ
                <ArrowRight size={18} strokeWidth={1.8} />
              </button>
            </div>
          </>
        ) : (
          <div className="cart__empty">
            <span className="cart__empty-icon">
              <ShoppingBag size={30} strokeWidth={1.3} />
            </span>
            <h3>Корзина ждёт<br />свою первую вещь</h3>
            <p>Загляни в новую коллекцию — там точно есть что-то твоё.</p>
            <button className="btn btn--dark" onClick={onClose}>
              Смотреть коллекцию
              <ArrowRight size={18} strokeWidth={1.8} />
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
