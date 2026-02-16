import Image from "next/image";
import styles from "./OneAccountSection.module.css";

export default function OneAccountSection() {
  return (
    <section className={styles.section}>
      
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.title}>
            One Account. <br />
            <span>Total Market Access.</span>
          </h2>

          <div className={styles.features}>
            <div className={styles.card}>
              <h3>Fast & Effortless Sign-Up</h3>
              <p>
                Create your trading account in under 10 minutes with our fully secure online registration – simple, smooth, and fully compliant.
              </p>
            </div>

            <div className={styles.card}>
              <h3>All Markets, One Platform</h3>
              <p>
                Gain instant access to Forex, Commodities, Indices, and CFDs without the need for multiple accounts. Trade everything from one place with full transparency.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Intuitive Client Portal</h3>
              <p>
               Monitor your trades, manage funds, and track performance with a feature-rich dashboard designed for both beginners and professionals. 
              </p>
            </div>

            <div className={styles.card}>
              <h3>Secure, Transparent, Reliable</h3>
              <p>
                Your capital is protected with SCA-regulated security protocols, ensuring zero hidden fees or deposit charges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* OUTSIDE container */}
      <div className={styles.rightImage}>
        <Image
          src="/images/accounts/handimg.webp"
          alt="Trading App"
          width={600}
          height={800}
          className={styles.image}
          priority
        />
      </div>

      <div className={styles.ctaWrap}>
        <button className={styles.cta}>Trade Now</button>
      </div>

    </section>
  );
}