import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Categories from "./components/Categories.jsx";
import Catalog from "./components/Catalog.jsx";
import Benefits from "./components/Benefits.jsx";
import About from "./components/About.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Footer from "./components/Footer.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import Toast from "./components/Toast.jsx";

const readStorage = (key, fallback) => {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

export default function App() {
  const [cart, setCart] = useState(() => readStorage("lume-cart", []));
  const [favorites, setFavorites] = useState(
    () => new Set(readStorage("lume-favorites", []))
  );
  const [cartOpen, setCartOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return window.localStorage.getItem("lume-theme") === "dark"
        ? "dark"
        : "light";
    } catch {
      return "light";
    }
  });
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState("");
  const toastTimer = useRef(null);

  const showToast = useCallback((message) => {
    setToast(message);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(""), 2600);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("lume-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    window.localStorage.setItem(
      "lume-favorites",
      JSON.stringify([...favorites])
    );
  }, [favorites]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("lume-theme", theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#151310" : "#f7f3ec");
  }, [theme]);

  useEffect(
    () => () => window.clearTimeout(toastTimer.current),
    []
  );

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty, 0),
    [cart]
  );

  const addToCart = useCallback(
    (product, size) => {
      const key = `${product.id}-${size}`;
      setCart((items) => {
        const existing = items.find((item) => item.key === key);
        if (existing) {
          return items.map((item) =>
            item.key === key ? { ...item, qty: item.qty + 1 } : item
          );
        }
        return [
          ...items,
          {
            key,
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size,
            qty: 1,
          },
        ];
      });
      showToast(`${product.name} — в корзине`);
    },
    [showToast]
  );

  const toggleFavorite = useCallback(
    (id) => {
      setFavorites((current) => {
        const next = new Set(current);
        if (next.has(id)) {
          next.delete(id);
          showToast("Убрали из избранного");
        } else {
          next.add(id);
          showToast("Добавили в избранное");
        }
        return next;
      });
    },
    [showToast]
  );

  const changeQuantity = useCallback((key, delta) => {
    setCart((items) =>
      items
        .map((item) =>
          item.key === key
            ? { ...item, qty: Math.max(item.qty + delta, 0) }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  }, []);

  const removeFromCart = useCallback((key) => {
    setCart((items) => items.filter((item) => item.key !== key));
  }, []);

  const selectCategory = useCallback((category) => {
    setActiveCategory(category);
    setQuery("");
    window.setTimeout(() => {
      document
        .getElementById("catalog")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  }, []);

  const checkout = useCallback(() => {
    setCart([]);
    setCartOpen(false);
    showToast("Спасибо! Заказ оформлен — мы напишем на почту");
  }, [showToast]);

  return (
    <>
      <Header
        cartCount={cartCount}
        favoriteCount={favorites.size}
        query={query}
        onQueryChange={setQuery}
        onOpenCart={() => setCartOpen(true)}
        theme={theme}
        onToggleTheme={() =>
          setTheme((current) => (current === "dark" ? "light" : "dark"))
        }
      />

      <main>
        <Hero />
        <Categories onSelectCategory={selectCategory} />
        <Catalog
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          query={query}
          onQueryChange={setQuery}
          favorites={favorites}
          onFavorite={toggleFavorite}
          onAdd={addToCart}
        />
        <Benefits />
        <About />
        <Newsletter />
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onQuantity={changeQuantity}
        onRemove={removeFromCart}
        onCheckout={checkout}
      />

      <Toast message={toast} />
    </>
  );
}
