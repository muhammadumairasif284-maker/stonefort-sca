import styles from "./AboutMissionVision.module.css";
import Image from "next/image";

export default function AboutMissionVision() {
  return (
    <section className={styles.section} aria-label="Mission and Vision">
      <div className={styles.container}>
        <h2 className={styles.heading}>Our <span>Purpose</span></h2>

        <div className={styles.cards}>
          {/* Mission Card */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
              src="/images/about/Trade-with-presition.webp"
              alt="Stonefort Mission"
              width={120}
              height={120}
              priority
              />
           
            </div>
            <h3>Our Mission</h3>
            <p>
              To connect clients to global financial markets through secure and
              regulated trading environments offered by our regulated group
              entities, promoting transparency, integrity and responsible
              participation in full alignment with UAE regulatory standards.
            </p>
          </div>

          {/* Vision Card */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
              src="/images/about/aboutOurVision.webp"
              alt="Stonefort Vission"
              width={120}
              height={120}
              />
             
            </div>
            <h3>Our Vision</h3>
            <p>
              To be a trusted and respected participant within the UAE’s
              financial ecosystem, connecting clients to global market
              opportunities while upholding the highest standards of regulatory
              compliance, transparency and operational excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}