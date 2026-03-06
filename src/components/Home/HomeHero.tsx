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
            Online trading built on Trust. Backed by <span className={styles.hl}>Regulation.</span>
          </h1>

          <p className={styles.lead}>
            Access global financial markets through secure online trading platforms within a regulated UAE framework. Providing access to established trading solutions that support disciplined market strategies. 
          </p>

          <div className={styles.ctaRow}>
            <Link href="https://stonefortsecurities.com/registration/" className={styles.primaryBtn}>
              Open Account
            </Link>
            <Link href="https://stonefortsecurities.com/registration/" className={styles.secondaryBtn}>
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
              src="/images/mockupphone shiledgold andflag.webp"
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