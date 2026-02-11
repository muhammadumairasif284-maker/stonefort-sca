import styles from "./CFDMarketsPro.module.css";
import MarketBoard from "./MarketBoard";

export default function CFDMarketsPro() {
  return (
    <section className={styles.section} aria-label="Our CFD markets">
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.title}>Our CFD markets</h2>
          <p className={styles.desc}>
            Stay informed with live market quotes, indices, and commodities.
            Market data is indicative and for informational purposes only.
          </p>
        </div>

        <MarketBoard />

        <a className={styles.browse} href="/market">
          Browse all market →
        </a>
      </div>
    </section>
  );
}