// components/platform/MT5Spotlight/MT5Spotlight.tsx
import Image from "next/image";
import styles from "./MT5Spotlight.module.css";

const items = [
  {
    n: "01",
    title: "Expert Advisors",
    desc:
      "Automate your trading strategies on MT5 using advanced algorithms, with built-in tools to test and refine your approach before going live.",
  },
  {
    n: "02",
    title: "Trade Anytime, Anywhere",
    desc:
      "Use MT5 across desktop, web, and mobile on iOS and Android for a seamless trading experience.",
  },
  {
    n: "03",
    title: "Trade Beyond Forex with MT5",
    desc:
      "Access an expanded range of CFD shares and global instruments designed to support diversified trading strategies.",
  },
];

export default function MT5Spotlight() {
  return (
    <section className={styles.section} aria-label="MetaTrader 5 spotlight">
      <div className={styles.inner}>
        {/* LEFT VISUAL */}
        <div className={styles.visual}>
          <div className={styles.visualFrame}>
            <Image
              src="/images/platform/Terminalmt5.webp"
              alt="MetaTrader 5 terminal"
              width={900}
              height={600}
              className={styles.visualImg}
              priority
            />
          </div>
          <div className={styles.visualGlow} />
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.content}>
          <div className={styles.kicker}>MetaTrader 5</div>
          <h2 className={styles.title}>Advanced Trading with MetaTrader 5</h2>
          <p className={styles.desc}>
            Advanced tools, integrated insights, and exclusive EAs and indicators
            designed to elevate your trading experience.
          </p>

          <div className={styles.list}>
            <div className={styles.rail} />
            {items.map((it) => (
              <div className={styles.row} key={it.n}>
                <div className={styles.num}>{it.n}</div>
                <div className={styles.text}>
                  <h3>{it.title}</h3>
                  <p>{it.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.ctaRow}>
            <a className={styles.cta} href="/platform/metatrader-5">
              Explore MetaTrader 5
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}