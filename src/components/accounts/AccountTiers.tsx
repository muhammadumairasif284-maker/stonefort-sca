import Image from "next/image";
import styles from "./AccountTiers.module.css";

export default function AccountTiers() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <p className={styles.kicker}>Account Tiers</p>

          <h2 className={styles.title}>
            Climb the Tiers. <br />
            <span>Unlock Greater Benefits.</span>
          </h2>

          <p className={styles.desc}>
            Every trader is unique. Stonefort Securities offers flexible account
            types, letting you trade your way and upgrade as you grow.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/accounts/accounttier.webp"   // place inside /public
              alt="Stonefort Account Tiers"
              fill
              priority
              className={styles.image}
            />
          </div>
        </div>

      </div>
    </section>
  );
}