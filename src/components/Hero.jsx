import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow">Коллекция 2026</span>
          <h1 className="hero__title">Основной гардероб</h1>
          <p className="hero__lead">
            Классика, переосмысленная в минимализме. Точность кроя, натуральные
            ткани, вещи, которые остаются.
          </p>
          <div className="hero__actions">
            <a className="btn btn--dark" href="#catalog">
              Смотреть каталог
              <ArrowRight size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
      <div className="hero__banner">
        <img
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=2000&q=80"
          alt="Коллекция LUMÉ"
        />
      </div>
    </section>
  );
}
