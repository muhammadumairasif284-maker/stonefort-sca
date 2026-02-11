import styles from "./GetStartedCTA.module.css";

export default function GetStartedCTA() {
  return (
    <section className={styles.section} aria-label="Get started call to action">
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>Get Started</h2>
            <p className={styles.text}>
              Create your account and access global markets in under 3 minutes.
            </p>
          </div>

          <div className={styles.actions}>
            <a className={styles.btn} href="/signup">
              Trade Now <span className={styles.arrow} aria-hidden="true">→</span>
            </a>
          </div>

          <span className={styles.glow} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}