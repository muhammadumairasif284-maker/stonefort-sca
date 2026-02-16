import styles from "./AccountTypesTier.module.css";

type Tier = {
  name: string;
  items: { label: string; value: string }[];
};

const TIERS: Tier[] = [
  {
    name: "Starter",
    items: [
      { label: "Minimum Deposit", value: "$50" },
      { label: "Spreads (Pips)", value: "From 1.3" },
      { label: "Leverage", value: "1:500" },
      { label: "Commission", value: "0" },
      { label: "Stop-Out", value: "20%" },
      { label: "Margin Call", value: "50%" },
    ],
  },
  {
    name: "Advanced",
    items: [
      { label: "Minimum Deposit", value: "$3,000" },
      { label: "Spreads (Pips)", value: "From 1.0" },
      { label: "Leverage", value: "1:500" },
      { label: "Commission", value: "0" },
      { label: "Stop-Out", value: "20%" },
      { label: "Margin Call", value: "50%" },
    ],
  },
  {
    name: "Elite",
    items: [
      { label: "Minimum Deposit", value: "$10,000" },
      { label: "Spreads (Pips)", value: "From 0.1" },
      { label: "Leverage", value: "1:200" },
      { label: "Commission", value: "$8" },
      { label: "Stop-Out", value: "50%" },
      { label: "Margin Call", value: "70%" },
    ],
  },
];

export default function AccountTypesTier() {
  return (
    <section className={styles.section} aria-label="Account Types">
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.head}>
          <p className={styles.kicker}>Account Types</p>
          <h2 className={styles.title}>Choose the account that fits your strategy</h2>
          <p className={styles.sub}>
            Our range of Stonefort account types allows every trader to find the right fit for their
            strategy. Compare minimum deposits, spreads, leverage, and commissions below to select
            the best forex trading account for your goals.
          </p>
        </header>

        <div className={styles.grid}>
          {TIERS.map((tier) => (
            <article key={tier.name} className={styles.card}>
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>{tier.name}</h3>
                <span className={styles.badge}>Tier</span>
              </div>

              <dl className={styles.list}>
                {tier.items.map((it) => (
                  <div key={it.label} className={styles.row}>
                    <dt className={styles.label}>{it.label}</dt>
                    <dd className={styles.value}>{it.value}</dd>
                  </div>
                ))}
              </dl>

              <div className={styles.cardGlow} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}