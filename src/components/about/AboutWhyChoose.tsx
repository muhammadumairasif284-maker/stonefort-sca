import styles from "./AboutWhyChoose.module.css";

export default function AboutWhyChoose() {
  return (
    <section className={styles.section} aria-label="Why Choose Stonefort">
      <div className={styles.container}>
        <h2 className={styles.title}>Why Choose Stonefort?</h2>

        <p className={styles.lead}>
            Traders choose Stonefort for our commitment to regulatory integrity, transparency and consistent service excellence. We provide access to global financial markets through advanced platforms, strong liquidity and reliable execution.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Strong Regulatory Framework</h3>
            <p>
              Operating within a robust regulatory environment focused on security and client protection.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Global Market Access</h3>
            <p>
              Trade multiple asset classes including Forex, indices, commodities and shares.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Secure and Efficient Transactions</h3>
            <p>
              Reliable funding options designed for fast and transparent deposits and withdrawals.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Dedicated 24/5 Support</h3>
            <p>
              Professional assistance focused on clear guidance and long term client relationships.
            </p>
          </div>
        </div>

        <p className={styles.footerText}>
          At Stonefort, we deliver a compliant, stable and performance driven trading environment built for today’s traders. 
        </p>
      </div>
    </section>
  );
}