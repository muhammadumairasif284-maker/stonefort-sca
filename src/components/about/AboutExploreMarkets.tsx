import Link from "next/link";
import styles from "./AboutExploreMarkets.module.css";

const markets = [
  {
    title: "Forex",
    desc: "Trade major, minor and exotic currency pairs in the global FX market.",
    icon: "💱",
  },
  {
    title: "Indices",
    desc: "Access leading global indices reflecting major economies and sectors.",
    icon: "📊",
  },
  {
    title: "Commodities",
    desc: "Trade energy, metals and agricultural products with competitive execution.",
    icon: "🛢️",
  },
  {
    title: "Shares",
    desc: "Gain exposure to internationally listed companies across key markets.",
    icon: "🏢",
  },
  {
    title: "Precious Metals",
    desc: "Trade gold and silver in a secure and regulated trading environment.",
    icon: "🥇",
  },
  {
    title: "Energy",
    desc: "Participate in global energy markets including crude oil benchmarks.",
    icon: "⚡",
  },
];

export default function AboutExploreMarkets() {
  return (
    <section className={styles.section} aria-label="Explore Opportunities in Global Markets">
      <div className={styles.container}>
        <h2 className={styles.title}>Explore Opportunities in Global Markets</h2>

        <p className={styles.lead}>
          As a regulated introducing broker under the Stonefort group, we provide access to a
          broad range of global financial instruments through a secure and reliable trading
          environment. Discover diverse markets and seize opportunities with confidence,
          backed by technology, transparency and professional support.
        </p>

        <div className={styles.grid}>
          {markets.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <Link href="/accounts" className={styles.cta}>
            Trade Now
          </Link>
        </div>
      </div>
    </section>
  );
}