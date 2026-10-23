import { ArrowRight, Quote } from "lucide-react";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <Reveal className="about__media">
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1100&q=80"
            alt="Светлый шоурум LUMÉ с коллекцией одежды"
            loading="lazy"
          />
          <div className="about__media-card">
            <span>с 2018 года</span>
            <strong>Делаем моду<br />человечнее</strong>
          </div>
          <span className="about__media-tag">Шоурум · Москва</span>
        </Reveal>

        <Reveal className="about__content" delay={120}>
          <span className="eyebrow">АТМОСФЕРА</span>
          <h2 className="section-title">
            Силуэт
            <br />
            <em>в деталях</em>
          </h2>
          <p>
            LUMÉ строится вокруг архитектуры формы. Жёсткие линии смягчаются
            драпировкой, пропорции продуманы до миллиметра, а фактура становится
            главным акцентом образа.
          </p>
          <p>
            Мы работаем с небольшими производствами, отбираем ткани руками и
            выпускаем капсулы, которые прослужат не один сезон.
          </p>

          <div className="about__quote">
            <Quote size={24} strokeWidth={1.4} />
            <p>
              Красота — в точности. Одежда должна подчеркивать, а не маскировать.
            </p>
            <span>Ателье LUMÉ</span>
          </div>

          <a className="text-link" href="#catalog">
            Смотреть капсулы
            <ArrowRight size={17} strokeWidth={1.7} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
