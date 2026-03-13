"use client";

import styles from "./WhyChoose.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const cards = [
  {
    title: "Transparent Cost",
    desc: "Clear and transparent disclosure of trading costs is provided prior to account activity, outlining spreads, commissions, and applicable charges in a structured manner aligned with recognized international regulatory and financial market standards.",
  },
  {
    title: "Competitive Market Conditions",
    desc: "Access to globally established trading platforms offering institutional-grade pricing, with spreads starting from 0 on EUR/USD, approximately 2.3 cents on crude oil, and competitive market spreads on gold, all dynamically reflecting liquidity and prevailing market conditions.",
  },
  {
    title: "Secure Digital Environment",
    desc: "Client information is protected through globally recognized information security frameworks, supported by strict operational protocols designed to safeguard confidentiality, preserve data integrity, and maintain the highest standards of digital security.",
  },

  {
    title: "Dedicated Support",
    desc: "Dedicated client support is available 24 hours a day, 365 days a year through phone, email, and WhatsApp, providing continuous assistance for trading platforms, account-related matters, and general service enquiries.",
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
          <h2 className={styles.title}>Why Choose <span>Stonefort?</span></h2>
          <p className={styles.sub}>
            Experience a regulated trading environment with transparent pricing, robust controls, and dedicated support.
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
          <Link href="https://stonefortsecurities.com/registration/" className={styles.ctaBtn}>
            Open an Account
          </Link>
        
        </div>
      </div>
    </section>
  );
}