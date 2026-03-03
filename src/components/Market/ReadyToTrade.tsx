"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./ReadyToTrade.module.css";

/**
 * 3-step version (content preserved from your 4 steps)
 * - Step 1 = Register + Answer (same text, merged)
 * - Step 2 = Verify (same text)
 * - Step 3 = Fund (same text)
 */
const STEPS = [
  {
    num: "1",
    title: "Register",
    text:
      "Sign up with your email and instantly access a free demo account." ,
      
    total: 3,
  },
  {
    num: "2",
    title: "Verify",
    text: "Secure your account with a simple verification process. Your safety always comes first.",
    total: 3,
  },
  {
    num: "3",
    title: "Fund",
    text: "All set. Add funds and start trading global markets with confidence.",
    total: 3,
  },
];

export default function ReadyToTrade() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className={styles.section} aria-label="Ready to trade smarter">
      <div className={styles.container}>
        {/* TOP ROW */}
        <div className={styles.top}>
          <div className={styles.media} data-aos="fade-up">
            <div className={styles.mediaGlow} aria-hidden="true" />
            <div className={styles.mediaFrame}>
              <Image
                src="/images/market/registerimg.webp"
                alt="Stonefort account opening"
                width={980}
                height={720}
                priority
                className={styles.image}
              />
            </div>
          </div>

          <div className={styles.copy}>
            <div className={styles.badge} data-aos="fade-up">
              Get started
            </div>

            <h2 className={styles.title} data-aos="fade-up" data-aos-delay="70">
              Ready to trade smarter?
            </h2>

            <p className={styles.desc} data-aos="fade-up" data-aos-delay="140">
              Move to Stonefort and become part of a global community of active traders. Apply in
              minutes with a fast, streamlined onboarding experience.
            </p>

            <div className={styles.actions} data-aos="fade-up" data-aos-delay="210">
              <Link href="/accounts" className={styles.btn}>
                Open Your Account
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM STEPPER */}
        <div className={styles.stepper} aria-label="Onboarding steps">
          <div className={styles.rail} aria-hidden="true">
            <span className={styles.railGlow} />
            <span className={styles.railLine} />
          </div>

          <div className={styles.stepsGrid}>
            {STEPS.map((s, i) => {
              // With 3 cards: 1 & 3 top, 2 bottom (keeps your zig-zag feel)
              const isTop = i !== 1;
              const isActive = active === i;

              return (
                <div
                  key={s.title}
                  className={`${styles.stepSlot} ${isTop ? styles.slotTop : styles.slotBottom}`}
                  data-aos="fade-up"
                  data-aos-delay={i * 90}
                >
                  {/* node on the rail */}
                  <div className={`${styles.node} ${isActive ? styles.nodeHot : ""}`} aria-hidden="true">
                    <span className={styles.nodeGlow} />
                  </div>

                  {/* card */}
                  <article
                    className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
                    data-step={s.num}
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <div className={styles.cardInner}>
                      <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>{s.title}</h3>

                        {/* preserve your merged text newlines */}
                        <p className={styles.cardDesc} style={{ whiteSpace: "pre-line" }}>
                          {s.text}
                        </p>

                        <div className={styles.cardFoot}>
                          <span className={styles.hint}>Step {s.num} of {s.total}</span>
                          <span className={styles.arrow} aria-hidden="true">
                            →
                          </span>
                        </div>
                      </div>
                    </div>

                    <span className={styles.cardRing} />
                    <span className={styles.cardSheen} aria-hidden="true" />
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}