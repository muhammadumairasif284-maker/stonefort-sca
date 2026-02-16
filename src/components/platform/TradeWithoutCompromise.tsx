import styles from "./TradeWithoutCompromise.module.css";

const FEATURES = [
  {
    tag: "Multi-platform trading",
    title: "Mobile & Multi-Platform Trading",
    desc: "Buy and sell seamlessly across Stonefort Trader Mobile, Web Terminal, and MetaTrader 5. Enjoy quick trade execution and flexible order management.",
  },
  {
    tag: "Charting tools",
    title: "Advanced Charting & Trading Tools",
    desc: "Access 50+ professional trading tools including indicators, Expert Advisors, and advanced analytics.",
  },
  {
    tag: "Market insights",
    title: "Autochartist-Powered Market Insights",
    desc: "Identify trading opportunities with pattern recognition, key price levels, and market setups.",
  },
  {
    tag: "Market news",
    title: "Market News & Sentiment Analysis",
    desc: "Stay informed with real-time market updates, economic events, and sentiment indicators.",
  },
];

export default function TradeWithoutCompromise() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Top Heading */}
        <div className={styles.top}>
          <h2 className={styles.title}>Trade Without Compromise</h2>
          <p className={styles.sub}>
            Our app and platforms give you every possible edge.
          </p>

          <div className={styles.pillRow}>
            <span className={styles.pill}>Execution</span>
            <span className={styles.pill}>Tools</span>
            <span className={styles.pill}>Insights</span>
            <span className={styles.pill}>Custom</span>
          </div>
        </div>

        {/* 4 Grid Cards */}
        <div className={styles.grid}>
          {FEATURES.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.tag}>{f.tag}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Long Full Width Card */}
        <div className={styles.longCard}>
          <div className={styles.tag}>Customisation</div>
          <h3 className={styles.cardTitle}>Personalised Trading Experience</h3>
          <p className={styles.cardDesc}>
            Customise layouts, build watchlists, set alerts, and switch between light and dark themes.
          </p>
        </div>

      </div>
    </section>
  );
}