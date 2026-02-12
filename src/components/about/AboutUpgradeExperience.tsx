import styles from "./AboutUpgradeExperience.module.css";

const items = [
  {
    title: "MetaTrader Platforms",
    desc:
      "Access the latest versions of the industry-leading MetaTrader 4 and MetaTrader 5 built for speed, precision and global trust",
    icon: "📈",
  },
  {
    title: "Dedicated Client Portal",
    desc:
      "Track, manage and control your trading account with ease from one secure and intuitive dashboard",
    icon: "🧾",
  },
  {
    title: "Stonefort Payment Solution",
    desc:
      "Trade, withdraw and spend seamlessly with a globally accepted payment solution available online and offline in over 200 countries",
    icon: "💳",
  },
];

export default function AboutUpgradeExperience() {
  return (
    <section className={styles.section} aria-label="Upgrade your trading experience">
      <div className={styles.container}>
        <h2 className={styles.title}>Upgrade Your Trading and Account Management Experience</h2>

        <div className={styles.grid}>
          {items.map((it) => (
            <article key={it.title} className={styles.card}>
              <div className={styles.icon} aria-hidden="true">
                {it.icon}
              </div>
              <h3 className={styles.h3}>{it.title}</h3>
              <p className={styles.p}>{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}