"use client";

import styles from "./ExperiencedTraders.module.css";
import { useEffect, useRef, useState } from "react";

const cards = [
  {
    title: "Advanced charting tools and indicators",
    desc: "Use intuitive charts with drawing tools and over 100 technical indicators to support your market analysis and trading decisions.",
  },
  {
    title: "Flexible leverage",
    desc: "Leverage allows you to control larger positions with a smaller margin on selected markets. Leverage magnifies both potential profits and potential losses. Applicable limits depend on regulatory requirements and client classification.",
  },
  {
    title: "Proprietary analytics",
    desc: "Track your trading performance with in-platform insights designed to help you refine your strategies and review your trading activity.",
  },
  {
    title: "Customisable price alerts",
    desc: "Set price alerts for your chosen instruments to stay informed of market movements and manage your trading strategy effectively.",
  },
];

export default function ExperiencedTraders() {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.22 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.section} aria-label="For Experienced Traders">
      <div className={styles.container}>
        <div className={styles.head}>
          <p className={styles.kicker}>Next Section</p>
          <h2 className={styles.title}>For Experienced Traders</h2>
          <p className={styles.sub}>
            Tools and controls designed to support analysis, monitoring, and informed decision-making.
          </p>
        </div>

        <div className={`${styles.grid} ${inView ? styles.in : ""}`}>
          {cards.map((c, i) => (
            <article key={c.title} className={styles.card} style={{ ["--d" as any]: `${i * 90}ms` }}>
              <div className={styles.cardTop}>
                <span className={styles.icon} aria-hidden="true" />
                <h3 className={styles.cardTitle}>{c.title}</h3>
              </div>
              <p className={styles.cardDesc}>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}