import Link from "next/link";
import Image from "next/image";
import styles from "./AboutExploreLinks.module.css";

type Item = {
  kicker: string;
  title: string;
  desc: string;
  href: string;
  img: string;
};

const items: Item[] = [
  {
    kicker: "Social Media",
    title: "Stay connected in real time",
    desc: "Stay connected with the latest financial news, official updates and market insights in real time.",
    href: "/",
    img: "/images/about/socialmeidaimg.webp",
  },
  {
    kicker: "Account Types",
    title: "Pick the account that fits you",
    desc: "Choose the account that fits your strategy with flexible options and advanced trading platforms.",
    href: "/accounts",
    img: "/images/about/accounttypeimg.webp",
  },
  {
    kicker: "Promotions",
    title: "Campaigns that give you an edge",
    desc: "Explore exclusive offers and trading campaigns crafted to give you a competitive edge in the market.",
    href: "/promotions",
    img: "/images/about/campaignimg.webp",
  },
];

export default function AboutExploreLinks() {
  return (
    <section className={styles.section} aria-label="Explore more">
      <div className={styles.container}>
        <header className={styles.head}>
          <h2 className={styles.h2}>Explore More</h2>
          <p className={styles.sub}>
            Quick access to updates, account options and campaigns — designed to keep you informed and ready.
          </p>
        </header>

<div className={styles.list}>
  {/* ONE shared rail for all items */}
  <div className={styles.rail} aria-hidden="true">
    <div className={styles.railLine} />
  </div>

  {/* Rows */}
  {items.map((it, idx) => {
    const pos =
      idx === 0 ? styles.dotTop : idx === 1 ? styles.dotMid : styles.dotBottom;

    return (
      <article key={it.kicker} className={styles.row}>
        {/* dot positioned relative to this row */}
        <div className={`${styles.dotWrap} ${pos}`} aria-hidden="true">
          <div className={styles.dotGlow} />
          <div className={styles.dot}>{String(idx + 1).padStart(2, "0")}</div>
        </div>

        {/* Card */}
        <div className={styles.card}>
          <div className={styles.content}>
            <p className={styles.kicker}>{it.kicker}</p>
            <h3 className={styles.title}>{it.title}</h3>
            <p className={styles.desc}>{it.desc}</p>

            <Link className={styles.link} href={it.href}>
              Explore <span className={styles.arrow} aria-hidden="true">→</span>
            </Link>
          </div>

          <div className={styles.media}>
            <div className={styles.imgWrap}>
              <Image
                src={it.img}
                alt=""
                fill
                className={styles.img}
                sizes="(max-width: 980px) 100vw, 560px"
                priority={idx === 0}
              />
            </div>
          </div>

          <div className={styles.cardGlow} aria-hidden="true" />
        </div>
      </article>
    );
  })}
</div>
      </div>
    </section>
  );
}