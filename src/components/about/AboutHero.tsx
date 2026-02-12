import Link from "next/link";
import Image from "next/image";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero} aria-label="About Stonefort">
      {/* FULL WIDTH IMAGE pinned to top-right */}
<div className={styles.heroImage} aria-hidden="true">
  <Image
    src="/images/about/aboutherobanner.webp"
    alt=""
    width={600}  
    height={500}  
    priority
    className={styles.image}
  />
</div>

      {/* LEFT CONTENT stays inside max width */}
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.kicker}>About</p>
          <h1 className={styles.title}>Stonefort</h1>

          <p className={styles.lead}>
            Stonefort Securities connects traders in the UAE and globally to the world’s leading
            financial markets through secure, transparent and technology driven trading solutions.
          </p>

          <div className={styles.body}>
            <p>
              Operating under a strong regulatory framework and committed to the highest standards
              of compliance and governance, Stonefort provides access to advanced trading platforms,
              ultra fast execution and deep institutional liquidity across a diverse range of
              financial instruments.
            </p>

            <p>
              Built on the principles of strength, precision and reliability, Stonefort empowers
              traders with the freedom to execute, the confidence to grow and the dedicated support
              to succeed in dynamic global markets.
            </p>

            <p>
              At Stonefort, trading is not just access, it is performance, trust and long term
              partnership.
            </p>
          </div>

          <div className={styles.ctaRow}>
            <Link className={styles.cta} href="/accounts">
              Open an account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}