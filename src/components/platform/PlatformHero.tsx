import Image from "next/image";
import styles from "./PlatformHero.module.css";

export default function PlatformHero() {
  return (
    <section className={styles.hero} aria-label="Trading Platforms with Stonefort">
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.kicker}>Platform</div>

          <h1 className={styles.title}>Trading Platforms with Stonefort</h1>

          <p className={styles.desc}>
            Trade from our intuitive web terminal and responsive Stonefort Trader app to the globally
            trusted MetaTrader 5 platform, choose from a suite of trading solutions designed to
            elevate your trading experience across global markets.
          </p>

          <div className={styles.ctaRow}>
            <a className={styles.primary} href="/accounts">
              Open Account
            </a>
            <a className={styles.secondary} href="/accounts/demo">
              Try Free Demo
            </a>
          </div>

          <div className={styles.meta}>
            <span className={styles.dot} />
            SCA-regulated UAE broker experience
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right} aria-hidden="true">
          <div className={styles.mediaFrame}>
            <Image
              src="/images/platform/notuse.webp"
              alt=""
              width={920}
              height={720}
              priority
              className={styles.image}
            />
            <div className={styles.glowA} />
            <div className={styles.glowB} />
          </div>
        </div>
      </div>
    </section>
  );
}