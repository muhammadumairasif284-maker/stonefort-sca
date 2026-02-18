"use client";

import Image from "next/image";
import styles from "./LiveAccountFeatures.module.css";

type Feature = {
  title: string;
  desc: string;
  icon: string;
};

const FEATURES: Feature[] = [
  {
    title: "Trade with Precision",
    desc: "Start with a minimum trade size of just 0.01 lot, giving you full control over your trading exposure.",
    icon: "/images/accounts/TradewithPrecision.webp",
  },
  {
    title: "Access Global Markets",
    desc: "Trade 1500+ instruments including Forex, commodities, indices, and more – all from a single account.",
    icon: "/images/accounts/AccessGlobalMarkets.webp",
  },
  {
    title: "Instant Execution",
    desc: "Experience seamless order execution with minimal slippage, aligned with real market conditions.",
    icon: "/images/accounts/InstantExecution.webp",
  },
  {
    title: "Full Transparency",
    desc: "Enjoy clear pricing, competitive spreads, and no hidden commissions across all accounts.",
    icon: "/images/accounts/FullTransparency.webp",
  },
  {
    title: "Trade Anywhere",
    desc: "Stay ahead with desktop, web, and mobile platforms, letting you act on market opportunities instantly.",
    icon: "/images/accounts/TradeAnywhere.webp",
  },
  {
    title: "Dedicated Support",
    desc: "Our Stonefort support team is available 24/7, ensuring assistance whenever you need it.",
    icon: "/images/accounts/DedicatedSupport.webp",
  },
];

export default function LiveAccountFeatures() {
  return (
    <section className={styles.section} aria-label="Live Account Features">
      <div className={styles.container}>
        <header className={styles.head}>
          <p className={styles.kicker}>Live Account</p>
          <h2 className={styles.title}>Live Account Features</h2>
          <p className={styles.sub}>
            Everything you need to trade confidently in a regulated environment.
          </p>
        </header>

        <div className={styles.grid}>
          {FEATURES.map((f, i) => (
            <article key={f.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <Image
                  src={f.icon}
                  alt={f.title}
                  width={90}
                  height={90}
                  className={styles.iconImage}
                />
                <span className={styles.iconGlow} />
              </div>

              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}