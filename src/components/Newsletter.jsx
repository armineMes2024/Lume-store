import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "./Reveal.jsx";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail("");
    window.setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="newsletter" id="newsletter">
      <div className="newsletter__orb newsletter__orb--one" />
      <div className="newsletter__orb newsletter__orb--two" />

      <Reveal className="container newsletter__inner">
        <div className="newsletter__content">
          <span className="eyebrow">DROP-LIST</span>
          <h2>
            Закрытые
            <br />
            <em>дропы первыми</em>
          </h2>
          <p>
            Редакционные подборки, лимитированные капсулы и анонсы
            новинок. Раз в неделю, без спама.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={submit}>
          <div className="newsletter__field">
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Твой e-mail"
              aria-label="E-mail для подписки"
            />
            <button type="submit" aria-label="Подписаться">
              {sent ? (
                <Check size={20} strokeWidth={2} />
              ) : (
                <ArrowRight size={20} strokeWidth={1.8} />
              )}
            </button>
          </div>
          <span className={`newsletter__hint ${sent ? "is-success" : ""}`}>
            {sent
              ? "Готово! Проверь почту — там подарок на первый заказ."
              : "Нажимая кнопку, ты соглашаешься с политикой конфиденциальности."}
          </span>
        </form>
      </Reveal>
    </section>
  );
}
