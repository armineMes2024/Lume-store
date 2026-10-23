const items = [
  "Новая коллекция SS26",
  "Бесплатная доставка от 7 000 ₽",
  "Натуральные материалы",
  "Обмен и возврат 30 дней",
  "Локальные бренды",
  "Забота в каждой детали",
];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[...items, ...items].map((item, index) => (
          <span className="marquee__item" key={`${item}-${index}`}>
            {item}
            <span className="marquee__star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
