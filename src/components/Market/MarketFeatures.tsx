import styles from "./MarketFeatures.module.css";

type Feature = {
  icon: "fx" | "metals" | "indices" | "commodities" | "crypto" | "shares";
  title: string;
  desc: string;
  chips: string[];
};

const FEATURES: Feature[] = [
  { icon: "fx", title: "Forex", desc: "Major, minor and exotics with deep liquidity and fast execution.", chips: ["EUR/USD", "GBP/USD", "USD/JPY"] },
  { icon: "metals", title: "Metals", desc: "Trade key metals with flexible sizing and transparent pricing.", chips: ["XAU/USD", "XAG/USD", "Platinum"] },
  { icon: "indices", title: "Indices", desc: "Access global indices to express macro views efficiently.", chips: ["US100", "SPX500", "GER40"] },
  { icon: "commodities", title: "Commodities", desc: "Energy and soft commodities with dynamic market opportunities.", chips: ["WTI", "Brent", "Natural Gas"] },
  { icon: "crypto", title: "Crypto CFDs", desc: "Trade popular crypto markets with risk controls and alerts.", chips: ["BTC/USD", "ETH/USD", "SOL/USD"] },
  { icon: "shares", title: "Shares (CFDs)", desc: "Go long or short on selected global shares with margin trading.", chips: ["Top US", "Top EU", "Top Asia"] },
];

export default function MarketFeatures() {
  return (
    <section className={styles.section} aria-label="Market features">
      <div className={styles.container}>
        <header className={styles.head}>
          <div className={styles.eyebrow} data-aos="fade-up">
            Markets
          </div>
          <h2 className={styles.title} data-aos="fade-up" data-aos-delay="80">
            What you can trade
          </h2>
          <p className={styles.desc} data-aos="fade-up" data-aos-delay="140">
            Choose from multiple CFD markets designed for different strategies — from short-term
            trading to diversified exposure.
          </p>
        </header>

        <div className={styles.grid}>
          {FEATURES.map((item, i) => (
            <article
              key={item.title}
              className={styles.card}
              data-icon={item.icon}
              data-aos="fade-up"
              data-aos-delay={i * 90}
            >
              <div className={styles.cardTop}>
                <div className={styles.iconWrap} aria-hidden="true">
                  <span className={styles.icon} />
                  <span className={styles.iconGlow} />
                </div>

                <div className={styles.meta}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>

                <span className={styles.corner} aria-hidden="true" />
              </div>

              <div className={styles.microRow}>
                <div className={styles.spark} aria-hidden="true">
                  <span />
                </div>

                <div className={styles.pills}>
                  {item.chips.map((t) => (
                    <span key={t} className={styles.pill}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.cardFoot}>
                <span className={styles.hint}>View instruments</span>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}