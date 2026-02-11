"use client";

import styles from "./WhyChoose.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const cards = [
  {
    title: "Transparent Trading Costs",
    desc: "Stonefort clearly discloses all fees and charges upfront, fully complying with regulatory standards.",
  },
  {
    title: "Competitive Pricing",
    desc: "Clients enjoy low spreads, from 0 on EUR/USD and 2.3 cents on crude oil, with competitive spreads on gold. Spreads may vary with market conditions and liquidity.",
  },
  {
    title: "Regulated Leverage Framework",
    desc: "Leverage is offered up to 1:500 on major FX and indices, 1:200 on gold, 1:50 on silver, and 1:100 on US crude, in line with client classification and regulatory rules.",
  },
  {
    title: "Secure Trading Environment",
    desc: "Client data is safeguarded with internationally recognized security standards and robust controls to ensure confidentiality and integrity.",
  },
  {
    title: "UAE-Focused Presence",
    desc: "Stonefort operates in the UAE, licensed and regulated by the Capital Market Authority (CMA), ensuring compliance with local regulations.",
  },
  {
    title: "Client Support",
    desc: "24/7, 365-day support is available via phone, email, or WhatsApp to assist with account and platform enquiries.",
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
          <h2 className={styles.title}>Why Choose Stonefort?</h2>
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
          <Link href="/live-account" className={styles.ctaBtn}>
            Open an Account
          </Link>
          <p className={styles.ctaNote}>
            Trading involves risk. Ensure you understand the products and risks before trading.
          </p>
        </div>
      </div>
    </section>
  );
}