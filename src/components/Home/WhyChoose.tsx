"use client";

import styles from "./WhyChoose.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const cards = [
  {
    title: "Transparent Cost",
    desc: "Clear and structured information regarding trading costs is provided in advance. Applicable fees, spreads, and related charges are disclosed in line with regulatory standards. ",
  },
  {
    title: "Competitive Market Conditions",
    desc: "Access to globally recognised trading platforms featuring spreads starting from 0 on EUR/USD, 2.3 cents on crude oil, and competitive spreads on gold. Spreads remain variable and are subject to market conditions and liquidity.",
  },
  {
    title: "Secure Digital Environment",
    desc: "Client information is safeguarded through internationally recognised information security standards and operational controls designed to maintain confidentiality and data integrity.",
  },
  {
    title: "UAE Regulatory Presence",
    desc: "Operating within the United Arab Emirates under a locally issued financial services licence, activities are conducted in accordance with applicable regulatory requirements. ",
  },
  {
    title: "Dedicated Support",
    desc: "Assistance is available 24/7, 365 days a year via phone, email, and WhatsApp for platform-related and general enquiries.",
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