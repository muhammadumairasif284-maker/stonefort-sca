import Image from "next/image";
import styles from "./BeginnerTradersSection.module.css";

type Card = {
  title: string;
  desc: string;
  icon: { src: string; alt: string };
  cta?: { label: string; href: string };
};

const cards: Card[] = [
  {
    title: "User-Friendly Demo",
    desc: "Practice trading and get familiar with the platform in a risk-free environment.",
    icon: { src: "/images/spreadmeta.webp", alt: "Demo trading icon" },
    cta: { label: "Try Demo", href: "/demo" },
  },
  {
    title: "Educational Resources",
    desc: "Access courses, webinars, quizzes, and videos to master essential trading concepts.",
    icon: { src: "/images/leveragemeta.webp", alt: "Education and resources icon" },
    cta: { label: "Learn More", href: "/education" },
  },
  {
    title: "24/7 Support",
    desc: "Get assistance anytime via our approved support channels.",
    icon: { src: "/images/supportmeta.webp", alt: "Customer support icon" },
  },
  {
    title: "Flexible Position Sizing",
    desc: "Adjust trade sizes to manage exposure according to your risk comfort.",
    icon: { src: "/images/leveragemeta.webp", alt: "Position sizing icon" },
  },
  {
    title: "Risk-Management Tools",
    desc: "Use tools like stop-loss orders to help control potential losses",
    icon: { src: "/images/regulatedmeta.webp", alt: "Risk management icon" },
  },
];

export default function BeginnerTradersSection() {
  return (
    <section className={styles.section} aria-label="For Beginner Traders">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.kicker}>For Beginner Traders</p>
          <h2 className={styles.title}>
            Start your trading journey with <span className={styles.brand}>stonefort securities</span>
          </h2>
          <p className={styles.subtext}>
            Explore tools and learning materials designed to help you build confidence before trading live.
          </p>
        </header>

        <div className={styles.grid}>
          {cards.map((card) => (
            <article key={card.title} className={styles.card}>
              <div className={styles.iconWrap} aria-hidden="true">
                <Image
                  src={card.icon.src}
                  alt={card.icon.alt}
                  width={96}
                  height={96}
                  className={styles.icon}
                  priority={false}
                />
              </div>

              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>

              {card.cta ? (
                <div className={styles.cardCta}>
                  <a className={styles.linkBtn} href={card.cta.href}>
                    {card.cta.label}
                    <span className={styles.arrow} aria-hidden="true">→</span>
                  </a>
                </div>
              ) : (
                <div className={styles.cardCtaSpacer} aria-hidden="true" />
              )}
            </article>
          ))}
        </div>

        <div className={styles.bottomCta}>
          <a className={styles.primaryBtn} href="/open-account">
            Open an Account
          </a>
        </div>
      </div>
    </section>
  );
}