import Link from "next/link";
import styles from "./GetStartedCTA.module.css";

export default function GetStartedCTA() {
  return (
    <section className={styles.section} aria-label="Get started call to action">
      <div className={styles.container}>
        {/* ✅ OUTER FLOATING BAND */}
        <div className={styles.band}>
          <div className={styles.inner}>
            <div className={styles.left}>
              <div className={styles.kicker}>
                <span className={styles.kickerLine} aria-hidden="true" />
                GET STARTED
              </div>

              <h2 className={styles.title}>Get Started</h2>

              <p className={styles.sub}>
                Create your account and access the global markets in under 3 minutes.
              </p>
            </div>

            <div className={styles.right}>
              <Link href="/accounts" className={styles.cta}>
                Trade Now <span className={styles.arrow} aria-hidden="true">→</span>
              </Link>

              <span className={styles.dot} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}