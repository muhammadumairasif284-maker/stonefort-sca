import styles from "./TrustedPlatforms.module.css";
import Image from "next/image";
import Link from "next/link";

const platforms = [
  {
    name: "WikiFX",
    logo: "/images/wikifx-logo.webp",
    url: "https://www.wikifx.com",
  },
  {
    name: "Trustpilot",
    logo: "/images/trustpilot.webp",
    url: "https://www.trustpilot.com",
  },
  {
    name: "Google Reviews",
    logo: "/images/google.webp",
    url: "https://www.google.com/search?q=stonefort+securities+reviews",
  },
];

export default function TrustedPlatforms() {
  return (
    <section className={styles.section} aria-label="Trusted Review Platforms">
      <div className={styles.container}>
        <p className={styles.label}>Trusted &amp; reviewed on</p>

        <div className={styles.logos}>
          {platforms.map((p) => (
            <Link
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoWrap}
              aria-label={`View Stonefort Securities on ${p.name}`}
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={180}
                height={60}
                className={styles.logo}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}