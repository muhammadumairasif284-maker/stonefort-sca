"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./TraderReviews.module.css";

type ReviewItem = {
  platform: string;
  logo: string;
  logoAlt: string;
  badge: string;
  review: string;
  name: string;
  role: string;
  initials: string;
  buttonText: string;
  buttonHref: string;
};

const reviews: ReviewItem[] = [
  {
    platform: "Google Reviews",
    logo: "https://stonefortsecurities.com/wp-content/uploads/2026/02/google-reviews-logo.webp",
    logoAlt: "Google Reviews Logo",
    badge: "Verified Reviews",
    review:
      "I've just signed up with Stonefort Securities, and their service has already surpassed my expectations. The platform is intuitive, and their customer support is incredibly responsive.",
    name: "John Matthews",
    role: "Professional Trader",
    initials: "JM",
    buttonText: "Read More Google Reviews",
    buttonHref: "https://www.google.com/maps/place/Stonefort+Securities+L.L.C/@25.1853977,55.2640765,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f692f5bbd2b2d:0xd3a6184083590416!8m2!3d25.1853977!4d55.2640765!16s%2Fg%2F11mddl08w8?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    platform: "WikiFX",
    logo: "https://stonefortsecurities.com/wp-content/uploads/2026/02/wikifx-logo.webp",
    logoAlt: "WikiFX Logo",
    badge: "Regulated Broker",
    review:
      "Stonefort Trader simplifies the entire trading experience. The analytical tools are comprehensive yet user-friendly, and their educational resources have been invaluable for strategy development.",
    name: "Alex Kim",
    role: "Forex Trader",
    initials: "AK",
    buttonText: "Check WikiFX Report",
    buttonHref: "https://www.wikifx.com/en/dealer/1401450413.html",
  },
];

function StarRating({ active }: { active: boolean }) {
  return (
    <div className={styles.starRating}>
      <div className={styles.stars}>★★★★★</div>
      <div
        className={`${styles.starsFilled} ${active ? styles.starsFilledActive : ""}`}
      >
        ★★★★★
      </div>
    </div>
  );
}

export default function TraderReviews() {
  const [animateStars, setAnimateStars] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateStars(true);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.section} aria-label="Trader reviews">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            What Our <span>Traders Say</span>
          </h2>
          <p className={styles.desc}>
            Join traders who trust Stonefort Securities for a more transparent,
            supportive, and professional trading experience.
          </p>
        </div>

        <div className={styles.wrapper}>
          {reviews.map((item, index) => (
            <article className={styles.card} key={item.platform}>
              <div className={styles.platformHeader}>
                <div className={styles.logoContainer}>
                  <Image
                    src={item.logo}
                    alt={item.logoAlt}
                    width={48}
                    height={48}
                    unoptimized
                  />
                </div>

                <div className={styles.platformInfo}>
                  <h3>{item.platform}</h3>
                  <StarRating active={animateStars} />
                  <span className={styles.badge}>{item.badge}</span>
                </div>
              </div>

              <div className={styles.reviewContent}>{item.review}</div>

              <div className={styles.clientInfo}>
                <div className={styles.clientAvatar}>{item.initials}</div>
                <div className={styles.clientDetails}>
                  <h4>{item.name}</h4>
                  <p>{item.role}</p>
                </div>
              </div>

              <a
                href={item.buttonHref}
                className={styles.actionButton}
                target="_blank"
                rel="noreferrer"
              >
                {item.buttonText}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}