import Image from "next/image";
import styles from "./PlatformHero.module.css";

export default function PlatformHero() {
  return (
    <section className={styles.hero} aria-label="Trading Platforms with Stonefort">
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.kicker}>Platform</div>

          <h1 className={styles.title}>Explore Our <span>Trading Platforms</span> </h1>

          <p className={styles.desc}>
            Choose from our intuitive WebTrader, mobile app, MetaTrader 5, and AutoChartist. Powerful tools, real-time pricing, and seamless execution designed to support your trading journey.
          </p>

          <div className={styles.ctaRow}>
            <a className={styles.primary} href="https://stonefortsecurities.com/registration/">
              Open Account
            </a>
            <a className={styles.secondary} href="https://sfs-muportal.com/#/login">
              Try Free Demo
            </a>
          </div>

    
        </div>

        {/* RIGHT */}
        <div className={styles.right} aria-hidden="true">
          <Image
            src="/images/platform/platformHeroBanner.webp"
            alt=""
            width={1200}
            height={900}
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}