import Image from "next/image";
import styles from "./PlatformConfidenceShowcase.module.css";

const FEATURES = [
  {
    tag: "Charting tools",
    title: "Advanced Charting & Analysis",
    desc: "Analyse market movements with powerful, customisable charts, multiple timeframes, and a wide range of technical indicators and drawing tools all available directly within the platform.",
  },
  {
    tag: "Trade management",
    title: "Smart Trade Management",
    desc: "View key trade details such as pip value, margin requirements, and position exposure at a glance. Place and manage orders efficiently using price-based, pip-based, or P&L-based controls.",
  },
  {
    tag: "Market insights",
    title: "Market Insights & Trading Intelligence",
    desc: "Stay informed with integrated market insights, pattern recognition tools, and sentiment indicators designed to help identify potential trading opportunities and market trends.",
  },
];

export default function PlatformConfidenceShowcase() {
  return (
    <section className={styles.section} aria-label="Everything You Need to Trade with Confidence">
      <div className={styles.container}>
        {/* Top centered heading */}
        <header className={styles.head}>
          <div className={styles.kicker}>WEB TRADING PLATFORM</div>
          <h2 className={styles.title}>Everything You Need to Trade with Confidence</h2>
          <p className={styles.desc}>
            Trade directly from interactive charts and manage positions using advanced risk management
            tools on Stonefort’s fully equipped web trading platform. Designed for flexibility and
            performance, it is accessible from all modern browsers with no downloads or plugins required.
          </p>

          <div className={styles.ctaRow}>
            <a className={styles.primary} href="/accounts/demo">Try Demo</a>
            <a className={styles.secondary} href="/platform">Explore Platform</a>
          </div>
        </header>

        {/* Big mockup center */}
        <div className={styles.stage} aria-hidden="true">
          <div className={styles.stageInner}>
            <Image
              src="/images/platform/platformas.webp"
              alt=""
              width={1200}
              height={900}
              className={styles.mock}
              priority={false}
            />
          </div>
          <div className={styles.glowA} />
          <div className={styles.glowB} />
        </div>

        {/* Features row */}
        <div className={styles.features}>
          {FEATURES.map((f) => (
            <article className={styles.feature} key={f.title}>
              <div className={styles.topLine} aria-hidden="true" />
              <div className={styles.tag}>{f.tag}</div>
              <h3 className={styles.h3}>{f.title}</h3>
              <p className={styles.p}>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}