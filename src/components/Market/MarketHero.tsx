import Image from "next/image";
import styles from "./MarketHero.module.css";
import Link from "next/link";

export default function MarketHero() {
  return (
    <section className={styles.hero} aria-label="Market hero">
      {/* Background image */}
      <div className={styles.bg} aria-hidden="true">
        <Image
          src="/images/market/MarketHerobanner.webp"
          alt=""
          fill
          priority
          className={styles.bgImg}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* LEFT: content */}
          <div className={styles.left}>
            <div className={styles.kicker}>Markets</div>

            <h1 className={styles.title}>
              Trade where the world moves.
            </h1>

            <p className={styles.desc}>
              Enter the core of global markets with Stonefort where every major asset class meets precision and opportunity. With 1,400+ CFDs across forex, indices, commodities, and equities, your next trade is always within reach.
            </p>

            <div className={styles.ctaRow}>
              <Link className={styles.primaryBtn} href="/accounts">
                Open Account
              </Link>
       
            </div>

       
          </div>

          {/* RIGHT: intentionally empty */}
          <div className={styles.right} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}