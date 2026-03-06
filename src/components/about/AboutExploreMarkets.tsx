import Image from "next/image";
import Link from "next/link";
import styles from "./AboutExploreMarkets.module.css";

const markets = [
  {
    title: "Forex",
    desc: "Trade major, minor and exotic currency pairs in the global FX market.",
    icon: "/images/market/forex-2.webp",
  },
  {
    title: "Indices",
    desc: "Access leading global indices reflecting major economies and sectors.",
    icon: "/images/market/market-indices.webp",
  },
  {
    title: "Commodities",
    desc: "Trade energy, metals and agricultural products with competitive execution.",
    icon: "/images/market/marketcommodities.webp",
  },
  {
    title: "Shares",
    desc: "Gain exposure to internationally listed companies across key markets.",
    icon: "/images/market/Shares-CFDs.webp",
  },
  {
    title: "Precious Metals",
    desc: "Trade gold and silver in a secure and regulated trading environment.",
    icon: "/images/market/Metalsilver.webp",
  },
  {
    title: "Energy",
    desc: "Participate in global energy markets including crude oil benchmarks.",
    icon: "/images/about/Fast-excecution.webp",
  },
];

export default function AboutExploreMarkets() {
  return (
    <section
      className={styles.section}
      aria-label="Explore Opportunities in Global Markets"
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Explore Opportunities in <span>Global Markets</span></h2>

        <p className={styles.lead}>
          As a regulated introducing broker under the Stonefort group, we provide
          access to a broad range of global financial instruments through a secure
          and reliable trading environment. Discover diverse markets and seize
          opportunities with confidence, backed by technology, transparency and
          professional support.
        </p>

        <div className={styles.grid}>
          {markets.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.icon}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={96}
                  height={96}
                  className={styles.marketIcon}
                  priority={false}
                />
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <Link href="https://stonefortsecurities.com/registration/" className={styles.cta}>
            Trade Now
          </Link>
        </div>
      </div>
    </section>
  );
}