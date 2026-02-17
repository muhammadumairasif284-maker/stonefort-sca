import Image from "next/image";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.section} aria-label="Contact hero">
      {/* Background image */}
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left */}
          <div className={styles.left}>
            <div className={styles.kicker}>
              <span className={styles.kickerLine} aria-hidden="true" />
              CONTACT STONEFORT
            </div>

            <h1 className={styles.h1}>Send Us a Message</h1>

            <p className={styles.lead}>
              Whether you’re new to CPT Mena or an experienced trader, fill out
              the form below and we’ll respond promptly.
            </p>

            <div className={styles.glassCard}>
              <h2 className={styles.h2}>Support That Speaks Your Language</h2>
              <p className={styles.cardText}>
                Our professional, multilingual team is here to provide fast,
                reliable assistance so you can trade with confidence.
              </p>

              <div className={styles.chips} role="list" aria-label="Support highlights">
                <span className={styles.chip} role="listitem">
                  <span className={styles.dot} aria-hidden="true" />
                  24/7 Multilingual
                </span>

                <span className={styles.chip} role="listitem">
                  <span className={styles.shield} aria-hidden="true" />
                  SCA Regulated
                </span>

                <span className={styles.chip} role="listitem">
                  <span className={styles.bolt} aria-hidden="true" />
                  Fast Response
                </span>

                <span className={styles.chip} role="listitem">
                  <span className={styles.pin} aria-hidden="true" />
                  UAE Based
                </span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className={styles.right}>
            <div className={styles.mockWrap}>
              <Image
                src="/images/contact/heromockup.webp"
                alt="Stonefort mobile support app mockup"
                width={540}
                height={1080}
                priority
                className={styles.mock}
              />
              <div className={styles.mockShadow} aria-hidden="true" />
              <div className={styles.mockGlow} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomFade} aria-hidden="true" />
    </section>
  );
}