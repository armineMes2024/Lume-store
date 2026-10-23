export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <a className="logo logo--footer" href="#top">
            LUMÉ
          </a>
          <nav className="footer__nav">
            <a href="#catalog">Каталог</a>
            <a href="#categories">Категории</a>
            <a href="#about">О нас</a>
            <a href="#newsletter">Рассылка</a>
          </nav>
        </div>
        <div className="footer__bottom">
          <span>© 2026 LUMÉ</span>
          <div>
            <a href="#top">Политика</a>
            <a href="#top">Оферта</a>
          </div>
          <span>Москва</span>
        </div>
      </div>
    </footer>
  );
}
