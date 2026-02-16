import styles from "./InspireConfidence.module.css";

const TOP = [
  {
    title: "Fast & Reliable Execution",
    desc: "Trade on a robust, automated infrastructure designed for speed, stability, and consistent performance across global markets.",
    icon: "speed",
  },
  {
    title: "Transparent Pricing",
    desc: "View bid and ask prices clearly before placing a trade, helping you understand market conditions and trading costs with confidence.",
    icon: "pricing",
  },
  {
    title: "Advanced Charting & Analysis",
    desc: "Analyse price movements using a wide range of technical indicators, drawing tools, and timeframes available across our trading platforms.",
    icon: "chart",
  },
  {
    title: "Market Insights & Trading Signals",
    desc: "Identify market trends using integrated analytical tools, pattern recognition, and sentiment indicators to support informed decision-making.",
    icon: "insights",
  },
];

const BOTTOM = [
  {
    title: "Trusted Market News & Updates",
    desc: "Stay informed with real-time market updates and professional insights directly within the trading environment.",
    icon: "news",
  },
  {
    title: "Trade Anytime, Anywhere",
    desc: "Access global markets on the go with the Stonefort Trader mobile app – open, manage, and monitor trades wherever you are.",
    icon: "anywhere",
  },
  {
    title: "Built for Trader Confidence",
    desc: "Every platform feature is designed with transparency, control, and performance in mind to help traders operate with confidence.",
    icon: "trust",
  },
];

function Icon({ type }: { type: string }) {
  // lightweight inline icons (no library dependency)
  switch (type) {
    case "speed":
      return (
        <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
          <path
            d="M12 4a10 10 0 1 0 10 10h-2A8 8 0 1 1 12 6V4Zm7.6 6.4-5.2 5.2-1.4-1.4 5.2-5.2 1.4 1.4Z"
            fill="currentColor"
          />
        </svg>
      );
    case "pricing":
      return (
        <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
          <path
            d="M12 2 4 6v6c0 5 3.4 9.7 8 10 4.6-.3 8-5 8-10V6l-8-4Zm-1 6h2v2h-2V8Zm0 4h2v6h-2v-6Z"
            fill="currentColor"
          />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
          <path
            d="M4 19h16v2H4v-2Zm2-3 4-6 4 4 6-9 2 1-7 11-5-5-3 5H6Z"
            fill="currentColor"
          />
        </svg>
      );
    case "insights":
      return (
        <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
          <path
            d="M12 3a9 9 0 1 0 9 9h-2a7 7 0 1 1-7-7V3Zm1 4v6l4 2-.9 1.8L11 14V7h2Z"
            fill="currentColor"
          />
        </svg>
      );
    case "news":
      return (
        <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
          <path
            d="M4 4h13v14H4V4Zm15 6h1v8a2 2 0 0 1-2 2H6v-2h12a1 1 0 0 0 1-1v-7ZM6 7h9v2H6V7Zm0 4h9v2H6v-2Zm0 4h6v2H6v-2Z"
            fill="currentColor"
          />
        </svg>
      );
    case "anywhere":
      return (
        <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
          <path
            d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm0 4v12h10V6H7Zm4 14h2v2h-2v-2Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
          <path
            d="M12 2 4 5v7c0 5 3.4 9.7 8 10 4.6-.3 8-5 8-10V5l-8-3Zm-1 6h2v8h-2V8Zm0 10h2v2h-2v-2Z"
            fill="currentColor"
          />
        </svg>
      );
  }
}

function Card({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <article className={styles.card}>
      <div className={styles.badge}>
        <Icon type={icon} />
      </div>

      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{desc}</p>

      <div className={styles.cardGlow} aria-hidden="true" />
    </article>
  );
}

export default function InspireConfidence() {
  return (
    <section className={styles.section} aria-label="Trading Platforms That Inspire Confidence">
      <div className={styles.container}>
        <header className={styles.head}>
          <h2 className={styles.title}>
            Trading Platforms That <span>Inspire Confidence</span>
          </h2>
        </header>

        <div className={styles.topGrid}>
          {TOP.map((c) => (
            <Card key={c.title} title={c.title} desc={c.desc} icon={c.icon} />
          ))}
        </div>

        <div className={styles.bottomGrid}>
          {BOTTOM.map((c) => (
            <Card key={c.title} title={c.title} desc={c.desc} icon={c.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}