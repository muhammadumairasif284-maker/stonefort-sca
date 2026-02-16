import styles from "./LiveAccountFeatures.module.css";

const FEATURES = [
  {
    title: "Trade with Precision",
    desc: "Start with a minimum trade size of just 0.01 lot, giving you full control over your trading exposure.",
  },
  {
    title: "Access Global Markets",
    desc: "Trade 1500+ instruments including Forex, commodities, indices, and more – all from a single account.",
  },
  {
    title: "Instant Execution",
    desc: "Experience seamless order execution with minimal slippage, aligned with real market conditions.",
  },
  {
    title: "Full Transparency",
    desc: "Enjoy clear pricing, competitive spreads, and no hidden commissions across all accounts.",
  },
  {
    title: "Trade Anywhere",
    desc: "Stay ahead with desktop, web, and mobile platforms, letting you act on market opportunities instantly.",
  },
  {
    title: "Dedicated Support",
    desc: "Our Stonefort support team is available 24/7, ensuring assistance whenever you need it.",
  },
];

export default function LiveAccountFeatures() {
  return (
    <section className={styles.section} aria-label="Live Account Features">
      <div className={styles.container}>
        <header className={styles.head}>
          <p className={styles.kicker}>Live Account</p>
          <h2 className={styles.title}>Live Account Features</h2>
          <p className={styles.sub}>
            Everything you need to trade confidently in a regulated environment.
          </p>
        </header>

        <div className={styles.grid}>
          {FEATURES.map((f) => (
            <article key={f.title} className={styles.card}>
              <div className={styles.icon} aria-hidden="true">
                <span className={styles.dot} />
              </div>

              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}