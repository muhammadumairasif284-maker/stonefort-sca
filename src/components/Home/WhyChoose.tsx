"use client";

import styles from "./WhyChoose.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const cards = [
  {
    title: "Transparent trading costs",
    desc: "Stonefort provides clear information on trading costs. Fees, charges, and applicable costs are disclosed in advance in accordance with regulatory requirements.",
  },
  {
    title: "Competitive pricing",
    desc: "Clients can trade with spreads starting from 0 on EUR/USD, 2.3 cents on crude oil, and competitive spreads on gold. Spreads vary according to market conditions and liquidity.",
  },
  {
    title: "Regulated leverage framework",
    desc: "Leverage is available up to 1:500 on major FX pairs and indices, 1:200 on gold, 1:50 on silver, and 1:100 on US crude, in accordance with client classification and regulatory requirements.",
  },
  {
    title: "Secure trading environment",
    desc: "Client data is protected using internationally recognised information security standards and operational controls to ensure confidentiality and integrity.",
  },
  {
    title: "UAE-focused presence",
    desc: "Stonefort operates in the UAE and provides services in accordance with local regulatory requirements. The company is licensed and regulated by the UAE Securities and Commodities Authority (SCA).",
  },
  {
    title: "Client support",
    desc: "Support is available 24/7, 365 Days, via phone, email, or WhatsApp, to assist with account and platform-related enquiries.",
  },
];

export default function WhyChoose() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  // Scroll reveal (IntersectionObserver)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect(); // animate once
        }
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Why choose Stonefort">
      <div className={styles.container}>
        <div className={styles.head}>
          {/* <p className={styles.kicker}>Next Section</p> */}
          <h2 className={styles.title}>Why choose Stonefort?</h2>
          <p className={styles.sub}>
            A regulated, UAE-focused broker experience with transparent pricing, strong controls, and continuous support.
          </p>
        </div>

        <div className={`${styles.grid} ${inView ? styles.gridIn : ""}`}>
          {cards.map((c, idx) => (
            <article
              key={c.title}
              className={styles.card}
              style={{ ["--d" as any]: `${idx * 80}ms` }} // stagger delay
            >
              <div className={styles.cardTop}>
                <span className={styles.bullet} aria-hidden="true" />
                <h3 className={styles.cardTitle}>{c.title}</h3>
              </div>
              <p className={styles.cardDesc}>{c.desc}</p>
            </article>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <Link href="/live-account" className={styles.ctaBtn}>
            Open an account
          </Link>
          <p className={styles.ctaNote}>
            Trading involves risk. Ensure you understand the products and risks before trading.
          </p>
        </div>
      </div>
    </section>
  );
}