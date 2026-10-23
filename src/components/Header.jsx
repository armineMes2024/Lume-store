import { useEffect, useRef, useState } from "react";
import {
  Heart,
  Menu,
  Moon,
  Search,
  ShoppingBag,
  Sun,
  User,
  X,
} from "lucide-react";

  const navItems = [
  { label: "Женщинам", href: "#categories" },
  { label: "Мужчинам", href: "#categories" },
  { label: "Детям", href: "#categories" },
  { label: "Каталог", href: "#catalog" },
  { label: "О нас", href: "#about" },
];

export default function Header({
  cartCount,
  favoriteCount,
  query,
  onQueryChange,
  onOpenCart,
  theme,
  onToggleTheme,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const goToCatalog = () => {
    setMenuOpen(false);
    setSearchOpen(false);
    window.setTimeout(() => {
      document
        .getElementById("catalog")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  return (
    <>
      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <div className="header__inner container">
          <button
            className="icon-btn header__burger"
            onClick={() => setMenuOpen(true)}
            aria-label="Открыть меню"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>

          <a className="logo" href="#top" aria-label="LUMÉ — на главную">
            LUMÉ
          </a>

          <nav className="header__nav">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <button
              className="header__action"
              onClick={() => {
                setSearchOpen(true);
                window.setTimeout(() => inputRef.current?.focus(), 80);
                window.setTimeout(() => {
                  document
                    .getElementById("catalog")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 120);
              }}
            >
              <Search size={18} strokeWidth={1.4} />
              <span>Поиск</span>
            </button>

            <button className="header__action header__action--icon" onClick={onToggleTheme} aria-label="Сменить тему">
              {theme === "dark" ? (
                <Sun className="theme-icon" size={18} strokeWidth={1.4} />
              ) : (
                <Moon className="theme-icon" size={18} strokeWidth={1.4} />
              )}
            </button>

            <a className="header__action header__action--icon" href="#catalog" aria-label="Избранное">
              <Heart size={18} strokeWidth={1.4} />
              {favoriteCount > 0 && <span className="header__dot" />}
            </a>

            <button className="header__action header__action--icon header__action--cart" onClick={onOpenCart}>
              <ShoppingBag size={18} strokeWidth={1.4} />
              <span>Корзина</span>
              <span className="header__count">{cartCount}</span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu__head container">
          <span className="logo">LUMÉ</span>
          <button
            className="icon-btn"
            onClick={closeMenu}
            aria-label="Закрыть меню"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>
        <form
          className="mobile-menu__search container"
          onSubmit={(event) => {
            event.preventDefault();
            goToCatalog();
          }}
        >
          <Search size={18} strokeWidth={1.5} />
          <input
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Поиск..."
            aria-label="Поиск по каталогу"
          />
        </form>

        <nav className="mobile-menu__nav container">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
