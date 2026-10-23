import { Box, Leaf, RefreshCcw, Truck } from "lucide-react";
import Reveal from "./Reveal.jsx";

const benefits = [
  {
    icon: Truck,
    title: "Экспресс-доставка",
    text: "Курьером или пунктом выдачи от 990 ₽",
  },
  {
    icon: RefreshCcw,
    title: "Простая примерка",
    text: "Возврат и обмен в течение 30 дней",
  },
  {
    icon: Leaf,
    title: "Ответственный подбор",
    text: "Натуральные и сертифицированные ткани",
  },
  {
    icon: Box,
    title: "Моно-упаковка",
    text: "Минимум упаковки без излишков пластика",
  },
];

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="container benefits__grid">
        {benefits.map(({ icon: Icon, title, text }, index) => (
          <Reveal
            key={title}
            className="benefit"
            delay={index * 90}
          >
            <span className="benefit__icon">
              <Icon size={22} strokeWidth={1.5} />
            </span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
