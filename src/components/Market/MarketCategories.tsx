import styles from "../Home/CFDMarketsPro.module.css";
import MarketBoard from "../Home/MarketBoard";

export default function CFDMarketsPro() {
  return (
    <section className={styles.section} aria-label="Our CFD markets">
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.title}><span>Our Markets</span> at a Glance</h2>
          <p className={styles.desc}>
            Step into global opportunities with access to hundreds of instruments across Forex, Indices, Commodities, Cryptocurrencies, and Shares. Trade with transparent pricing, competitive spreads, and a platform engineered for active, performance-driven traders.
          </p>
        </div>

        <MarketBoard />

        <a className={styles.browse} href="/Market">
          Browse all markets →
        </a>
                <p className={styles.disclaimer}>
  Disclaimer: All market data is provided for informational purposes only and does not constitute an offer or solicitation of trading services.
</p>
      </div>
    </section>
  );
}