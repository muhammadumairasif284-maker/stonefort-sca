// components/home/AdvancedCharting.tsx
import Image from "next/image";
import styles from "./AdvancedCharting.module.css";

const features = [
  {
    title: "Trade Directly from Charts",
    desc: "Open, adjust, and manage trades straight from the chart using simple click and drag controls for precise execution.",
  },
  {
    title: "Powerful Analysis Tools",
    desc: "Apply a wide range of technical tools and save your preferred setups as templates for consistent analysis.",
  },
  {
    title: "Flexible Timeframes and Chart Types",
    desc: "Study market movements across multiple time intervals and choose chart styles that suit your trading approach.",
  },
  {
    title: "Enhanced Drawing Tools",
    desc: "Plan trades with over 50 drawing tools for trend lines, support and resistance levels, patterns, and price projections.",
  },
  {
    title: "Fully Customisable Workspace",
    desc: "Personalise your trading environment including layouts, charts, and tools, and save everything as reusable templates.",
  },
];

export default function AdvancedCharting() {
  return (
    <section className={styles.section}>
      
      {/* NORMAL CONTENT */}
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.title}>
            Advanced Charting and <span>Trade Execution</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {features.map((item, i) => (
            <div key={i} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FULL WIDTH BLOCK */}
      <div className={styles.ctaBlock}>
        <div className={styles.ctaInner}>

          <h3>Free Tools</h3>

          <div className={styles.visual}>
            <Image
              src="/images/platform/freetools.webp"
              alt="Trading tools interface"
              width={1400}
              height={700}
              className={styles.image}
              priority
            />
          </div>

          <div className={styles.buttons}>
            <a
              href="https://stonefortsecurities.com/registration/"
              className={styles.primaryBtn}
            >
              Get Started
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}