import styles from "./HomeHero.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className={styles.hero} aria-label="Stonefort UAE Hero">
      <div className={styles.container}>
        {/* Left content */}
        <div className={styles.left}>


          <h1 className={styles.h1}>
            Online trading with a <span className={styles.hl}>CMA regulated</span> UAE broker
          </h1>

          <p className={styles.lead}>
            Access global financial markets through secure online trading platforms and manage your
            investment portfolio in a regulated environment. 
          </p>

          <div className={styles.ctaRow}>
            <Link href="/live-account" className={styles.primaryBtn}>
              Open Account
            </Link>
            <Link href="/demo" className={styles.secondaryBtn}>
              Try Free Demo
            </Link>
          </div>

          <p className={styles.note}>
            Authorised and regulated by the Capital Market Authority (CMA).
          </p>
        </div>

        {/* Right image */}
        <div className={styles.right}>
          <div className={styles.imageCard}>
            <Image
              src="/images/HomeHero.webp"
              alt="Trading app mockup showing live candlestick chart"
              width={820}
              height={980}
              priority
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}