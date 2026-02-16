import styles from "./StonefortLensBanner..module.css";

export default function StonefortLensBanner() {
  return (
    <section className={styles.section} aria-label="See the Markets Through the Stonefort Lens">
      <div className={styles.container}>
        <div className={styles.banner}>
          {/* overlay */}
          <div className={styles.overlay} aria-hidden="true" />

          <div className={styles.content}>
            <h2 className={styles.title}>
              See the Markets Through the <span>Stonefort Lens</span> 
            </h2>

            <p className={styles.p}>
              Experience a more complete and intuitive way to trade with Stonefort’s advanced trading
              platforms. Access powerful charting, smart trade management, and integrated market
              insights designed to help you analyse opportunities and manage trades with greater clarity.
            </p>

            <p className={styles.p}>
              Leverage dynamic charts, advanced tools, and community-inspired market intelligence to
              refine your strategy and trade with confidence across global markets.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}