import styles from "./RiskFreeDemoCta.module.css";

export default function RiskFreeDemoCta() {
  return (
    <section className={styles.section} aria-label="Try our platforms risk-free">
      <div className={styles.inner}>
        <div className={styles.banner}>
          <div className={styles.left}>
            <p className={styles.kicker}>Not ready to trade for real?</p>
            <h2 className={styles.title}>Try Our Platforms Risk-Free</h2>
            <p className={styles.text}>
              Open a demo account to explore <strong>StonefortTrader</strong> and <strong>MT5</strong>{" "}
              using virtual funds, without risking real money.
            </p>

            <div className={styles.actions}>
              <a className={styles.primaryBtn} href="/demo">
                Open demo account <span className={styles.arrow} aria-hidden="true">→</span>
              </a>
              <a className={styles.ghostBtn} href="/platforms">
                View platforms
              </a>
            </div>

            <p className={styles.note}>
              Demo accounts use virtual funds and are designed for practice and familiarisation.
            </p>
          </div>

          <div className={styles.right} aria-hidden="true">
            <div className={styles.orb} />
            <div className={styles.stack}>
              <div className={styles.pill}>
                <span className={styles.pillDot} />
                <div>
                  <div className={styles.pillTitle}>StonefortTrader</div>
                  <div className={styles.pillSub}>Proprietary platform</div>
                </div>
              </div>

              <div className={styles.pill}>
                <span className={styles.pillDot} />
                <div>
                  <div className={styles.pillTitle}>MetaTrader 5</div>
                  <div className={styles.pillSub}>Multi-asset trading</div>
                </div>
              </div>

              <div className={styles.miniStats}>
                <div className={styles.stat}>
                  <div className={styles.statTop}>Virtual funds</div>
                  <div className={styles.statVal}>Practice only</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statTop}>No risk</div>
                  <div className={styles.statVal}>No deposit</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statTop}>Learn</div>
                  <div className={styles.statVal}>Test strategies</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* optional divider to separate sections */}
        <div className={styles.divider} aria-hidden="true" />
      </div>
    </section>
  );
}