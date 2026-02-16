// components/home/AdvancedCharting.tsx
import styles from "./AdvancedCharting.module.css";

const features = [
  {
    title: "Trade Directly from Charts",
    desc: "Open, modify, and manage trades directly from the chart. Create new orders or adjust existing positions using simple click and drag controls for greater precision.",
  },
  {
    title: "80+ Technical Indicators",
    desc: "Apply a wide range of customizable technical indicators to support different trading strategies. Save your preferred setups as templates for consistent analysis.",
  },
  {
    title: "Multiple Timeframes",
    desc: "Analyse price movements across flexible time intervals ranging from short-term market action to long-term trends.",
  },
  {
    title: "Multiple Chart Types",
    desc: "Choose from various chart styles and control how market data is displayed to suit your analysis preferences.",
  },
  {
    title: "50+ Drawing Tools",
    desc: "Plan your trades using advanced drawing tools for trend lines, support and resistance levels, patterns, and price projections.",
  },
  {
    title: "Fully Customisable Workspace",
    desc: "Personalise your trading environment including indicators, layouts, and drawing tools, and save everything as reusable templates.",
  },
];

export default function AdvancedCharting() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.title}>
            Advanced Charting and Trade Execution
          </h2>
          <p className={styles.desc}>
            Trade smarter with chart-first execution, powerful analysis tools,
            and a workspace you can fully tailor to your strategy.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((item, i) => (
            <div key={i} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaBlock}>
          <h3>Discover more trading tools</h3>
          <p>
            Explore platform features designed to help you analyse markets and
            execute with confidence.
          </p>

          <div className={styles.buttons}>
            <a href="/platform" className={styles.outlineBtn}>
              Discover More
            </a>
            <a href="/accounts" className={styles.primaryBtn}>
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}