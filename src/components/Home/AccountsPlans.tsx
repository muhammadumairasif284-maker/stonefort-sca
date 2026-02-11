import styles from "./AccountsPlans.module.css";

type Plan = {
  tier: "Starter" | "Advanced" | "Elite";
  badge: string;
  startsAt: string;
  leverage: string;
  spreads: string;
  commission: string;
  stopOut: string;
  marginCall: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    tier: "Starter",
    badge: "Starter",
    startsAt: "$50",
    leverage: "1:500",
    spreads: "1.3",
    commission: "0",
    stopOut: "20%",
    marginCall: "50%",
  },
  {
    tier: "Advanced",
    badge: "Advanced",
    startsAt: "$3000",
    leverage: "1:500",
    spreads: "1.0",
    commission: "0",
    stopOut: "20%",
    marginCall: "50%",
    featured: true, // highlight middle card
  },
  {
    tier: "Elite",
    badge: "Elite",
    startsAt: "$10,000",
    leverage: "1:200",
    spreads: "0.01",
    commission: "$8",
    stopOut: "50%",
    marginCall: "70%",
  },
];

export default function AccountsPlans() {
  return (
    <section className={styles.section} aria-label="Trading account types">
      <div className={styles.container}>
        <div className={styles.head}>
          <p className={styles.kicker}>Accounts</p>
          <h2 className={styles.title}>Find Your Perfect Trading Account</h2>
          <p className={styles.subtext}>
            Find the Stonefort account that fits your trading style, offering flexibility, transparency, and performance.
          </p>
        </div>

        <div className={styles.grid}>
          {PLANS.map((p) => (
            <article
              key={p.tier}
              className={`${styles.card} ${p.featured ? styles.featured : ""}`}
            >
              <div className={styles.cardTop}>
                <div className={`${styles.badge} ${styles["badge" + p.tier]}`}>
                  {p.badge} <span className={styles.badgeLight} />
                </div>

                <div className={styles.tierWrap}>
                  <h3 className={styles.tier}>{p.tier}</h3>
                  <p className={styles.tierSub}>Accounts</p>
                </div>
              </div>

              <div className={styles.priceRow}>
                <div className={styles.priceLabel}>Starts at</div>
                <div className={styles.price}>{p.startsAt}</div>
              </div>

              <div className={styles.specs}>
                <Spec label="Leverage" value={p.leverage} />
                <Spec label="Spreads (Pips)" value={p.spreads} />
                <Spec label="Commission" value={p.commission} />
                <Spec label="Stop-out" value={p.stopOut} />
                <Spec label="Margin Call" value={p.marginCall} />
              </div>

              <div className={styles.actions}>
                <a className={styles.btnPrimary} href="/accounts">
                  View Details
                </a>
                <a className={styles.btnGhost} href="/signup">
                  Open Account
                </a>
              </div>

              {p.featured && <div className={styles.glow} aria-hidden="true" />}
            </article>
          ))}
        </div>

        <p className={styles.note}>
          Trading involves risk. Leverage magnifies both profits and losses. Terms may vary by
          jurisdiction and client classification.
        </p>
      </div>
    </section>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.spec}>
      <span className={styles.specLabel}>{label}</span>
      <span className={styles.specValue}>{value}</span>
    </div>
  );
}