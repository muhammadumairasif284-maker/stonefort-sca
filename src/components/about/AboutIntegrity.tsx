import Link from "next/link";
import Image from "next/image";
import styles from "./AboutIntegrity.module.css";

export default function AboutIntegritySection() {
  return (
    <section className={styles.section} aria-label="Integrity Responsibility Innovation">
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.title}>
            Driven by Integrity Guided by Responsibility Powered by Innovation
          </h2>

          <p className={styles.lead}>
            At Stonefort, everything we build is centered around delivering clarity, performance and
            reliability. Our focus is not just access to markets, but creating a trading environment
            that supports informed decisions and consistent progress.
          </p>

          <p className={styles.text}>
            We are committed to providing the structure, technology and support that help turn
            opportunity into achievement.
          </p>

          <div className={styles.ctaRow}>
            <Link className={styles.ctaPrimary} href="/accounts">
              Open an account
            </Link>
            <Link className={styles.ctaGhost} href="/login">
              Login
            </Link>
          </div>
        </div>

        <div className={styles.right} aria-hidden="true">
       

          <div className={styles.mockupWrap}>
            <Image
              src="/images/about/Integrityimg.webp"
              alt=""
              width={760}
              height={520}
              className={styles.mockupImg}
              priority={false}
            />
          </div>
          

          {/* OPTION B: Placeholder mockup block */}
          {/* <div className={styles.mockupWrap}>
            <div className={styles.mockupCard} />
            <div className={styles.mockupGlow} />
          </div> */}
        </div>
      </div>
    </section>
  );
}