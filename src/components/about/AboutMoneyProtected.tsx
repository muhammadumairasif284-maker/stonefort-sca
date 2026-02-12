import styles from "./AboutMoneyProtected.module.css";
import Image from "next/image";

const items = [
  {
    title: "Instant Withdrawals",
    desc: "Access your funds quickly and securely through our group’s regulated platforms",
  },
  {
    title: "No Transaction Fees",
    desc: "Deposit and withdraw with zero fees and no hidden charges through our regulated entities",
  },
  {
    title: "Multiple Payment Methods",
    desc: "Select from a secure and flexible range of payment options provided by our regulated affiliates",
  },
];

export default function AboutMoneyProtected() {
  return (
    <section className={styles.section} aria-label="Your money is protected">
      <div className={styles.container}>
        <div className={styles.top}>
          {/* Left feature panel */}
        <div className={styles.panel}>
        <div className={styles.badge}>
            <span className={styles.badgeIcon}>🛡️</span>
            Protection
        </div>

        <h2 className={styles.title}>Your Money is Protected</h2>

        <p className={styles.lead}>
            All client deposits, withdrawals and payment processing are managed by our regulated
            group entities. These services include
        </p>

        {/* NEW IMAGE */}
        <div className={styles.shieldWrap}>
            <Image
            src="/images/about/aboutguard.webp"
            alt="Stonefort protection shield"
            width={280}
            height={280}
            className={styles.shield}
            priority
            />
        </div>
        </div>

          {/* Right stacked list */}
          <div className={styles.stack} aria-label="Protection features">
            <div className={styles.rail} aria-hidden="true" />
            {items.map((it, i) => (
              <article key={it.title} className={styles.item}>
                <div className={styles.dot} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className={styles.itemBody}>
                  <h3 className={styles.h3}>{it.title}</h3>
                  <p className={styles.p}>{it.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Compliance / legal callout */}
        <div className={styles.legal} role="note" aria-label="Regulatory notice">
          <p className={styles.legalTitle}>Regulatory Notice</p>
          <p className={styles.legalText}>
            At Stonefort Securities LLC (SFS), we are licensed by the CMA, UAE, under Category 5. We
            introduce clients to regulated financial products but do not provide investment services,
            hold client funds, or process transactions. Our role is to ensure a secure, transparent,
            and compliant trading experience.
          </p>
        </div>
      </div>
    </section>
  );
}