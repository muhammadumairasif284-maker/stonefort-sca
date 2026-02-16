import Image from "next/image";
import styles from "./HeroAccounts.module.css";

export default function HeroAccounts() {
  return (
    <section className={styles.hero}>
      {/* Background */}
      <Image
        src="/images/accounts/herobannerbg.webp"
        alt="Background"
        fill
        priority
        className={styles.bg}
      />

      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <span className={styles.tag}>ACCOUNT TYPES</span>

          <h1 className={styles.title}>
            Pick the account <br /> that fits you.
          </h1>

          <p className={styles.desc}>
            Compare spreads, leverage and trading conditions across our Standard, Advanced and Elite accounts designed to support different trading styles, experience levels and capital requirements within a regulated environment.
          </p>

          

          <div className={styles.ctaRow}>
            <button className={styles.primaryBtn}>Open Account</button>
            <button className={styles.secondaryBtn}>Try Free Demo</button>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
          <Image
            src="/images/accounts/marketheromockup.webp"
            alt="Trading Platform"
            width={900}
            height={600}
            priority
            className={styles.mockup}
          />
        </div>
      </div>

{/* Bottom Meta Bar */}
<div className={styles.metaBar}>
  <div className={styles.metaItem}>
    <Image
      src="/images/accounts/metapip.webp"
      alt="Spread"
      width={60}
      height={60}
      className={styles.metaIcon}
    />
    <strong>0.4 Pip</strong>
    <span>Spread</span>
  </div>

  <div className={styles.metaItem}>
    <Image
      src="/images/accounts/metaleverage.webp"
      alt="Leverage"
      width={60}
      height={60}
      className={styles.metaIcon}
    />
    <strong>1:500</strong>
    <span>Leverage</span>
  </div>

  <div className={styles.metaItem}>
    <Image
      src="/images/accounts/metalogo.webp"
      alt="SCA Regulated"
      width={60}
      height={60}
      className={styles.metaIcon}
    />
    <strong>SCA</strong>
    <span>Regulated</span>
  </div>

  <div className={styles.metaItem}>
    <Image
      src="/images/accounts/metasupport.webp"
      alt="Support"
      width={60}
      height={60}
      className={styles.metaIcon}
    />
    <strong>24/7</strong>
    <span>Multilingual Support</span>
  </div>
</div>
    </section>
  );
}