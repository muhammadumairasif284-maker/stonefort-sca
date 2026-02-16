// components/home/ExecutionOutcomes/ExecutionOutcomes.tsx
import styles from "./ExecutionOutcomes.module.css";

const CARDS = [
  {
    kpi: "Up to 100%",
    text:
      "of supported trades are executed in under one second, delivering a smooth and responsive trading experience.",
    note: "(Exclude MetaTrader)",
    img: "/images/platform/100.webp",
  },
  {
    kpi: "Under 30 ms",
    text:
      "Our trading infrastructure delivers an average execution speed under 30 ms, supporting efficient trade placement across global markets.",
    img: "/images/platform/30ms.webp",
  },
  {
    kpi: "1.0 pip",
    text:
      "Trade major currency pairs such as EUR/USD with spreads starting from 1.0 pip, depending on account type and market conditions.",
    img: "/images/platform/pip.webp",
  },
];

export default function ExecutionOutcomes() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <h2 className={styles.title}>
            Execution Designed to <br />
            Support Better Trading Outcomes
          </h2>

          <p className={styles.desc}>
            When market prices move in your favour during order processing,
            our execution model is designed to reflect the most favourable
            available price, helping you trade with greater efficiency.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className={styles.cards}>
          {CARDS.map((card, i) => (
            <div
              key={i}
              className={styles.card}
              style={{ backgroundImage: `url(${card.img})` }}
            >
              <div className={styles.overlay} />

              <div className={styles.content}>
                <h3 className={styles.kpi}>{card.kpi}</h3>
                <p>{card.text}</p>
                {card.note && <span className={styles.note}>{card.note}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}