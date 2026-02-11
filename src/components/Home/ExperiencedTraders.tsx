"use client";

import styles from "./ExperiencedTraders.module.css";
import { useEffect, useRef, useState } from "react";

const cards = [
  {
    title: "Advanced Charting Tools & Indicators",
    desc: "Access intuitive charts, drawing tools, and 100+ technical indicators to support market analysis and informed trading decisions.",
  },
  {
    title: "Flexible Leverage",
    desc: "Control larger positions with smaller margin on selected markets. Leverage increases both potential profits and losses, with limits based on regulatory requirements and client classification.",
  },
  {
    title: "Proprietary Analytics",
    desc: "Monitor your trading performance with built-in insights that help you refine strategies and review your activity.",
  },
  {
    title: "Customisable Price Alerts",
    desc: "Set alerts on your chosen instruments to stay updated on market movements and support timely trading decisions.",
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
          
          <h2 className={styles.title}>For Experienced Traders</h2>
          <p className={styles.sub}>
            A range of tools and controls designed to support analysis, monitoring, and informed decision-making.
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