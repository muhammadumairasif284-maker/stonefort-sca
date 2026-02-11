import styles from "./FlexibleTradingSolutions.module.css";

type Platform = {
  badge: string;
  title: string;
  desc: string;
  features: string[];
  cta: { label: string; href: string };
};

const platforms: Platform[] = [
  {
    badge: "MetaTrader 5",
    title: "MetaTrader 5",
    desc: "The upgraded version of MT4, MT5 offers enhanced tools for trading multiple asset classes with Stonefort liquidity and execution.",
    features: [
      "MQL5 support – Automated trading with Expert Advisors.",
      "Enhanced order types – Greater trade management options.",
      "More timeframes and charts – Flexible market analysis.",
    ],
    cta: { label: "Explore MT5", href: "/platforms/mt5" },
  },
  {
    badge: "Stonefortrader",
    title: "Stonefortrader",
    desc: "Stonefortrader is our proprietary platform, offering tools to trade multiple asset classes with Stonefort liquidity and execution.",
    features: [
      "Advanced trading tools – Widgets and calculators to support informed decisions.",
      "Technical indicators – Analyse trends and market movements.",
      "Real-time account insights – Monitor trading activity and performance.",
      "Multi-device access – Trade seamlessly on mobile, web, and desktop.",
    ],
    cta: { label: "Explore Stonefortrader", href: "/platforms/stoneforttrader" },
  },
];

export default function FlexibleTradingSolutions() {
  return (
    <section className={styles.section} aria-label="Flexible Trading Solutions">
      <div className={styles.inner}>
        <header className={styles.header}>

          <h2 className={styles.title}>Flexible Trading Solutions</h2>
          <p className={styles.subtext}>
            Stonefort offers clients access to multiple trading platforms, including MT5 and StonefortTrader, catering to diverse trading styles and preferences.
          </p>
        </header>

        <div className={styles.row}>
          {platforms.map((p) => (
            <article key={p.title} className={styles.card}>
              <div className={styles.top}>
                <span className={styles.badge}>{p.badge}</span>
              </div>

              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>

              <div className={styles.features}>
                <p className={styles.featuresTitle}>Key Features</p>
                <ul className={styles.list}>
                  {p.features.map((f) => (
                    <li key={f} className={styles.item}>
                      <span className={styles.dot} aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.ctaRow}>
                <a className={styles.linkBtn} href={p.cta.href}>
                  {p.cta.label} <span className={styles.arrow} aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}