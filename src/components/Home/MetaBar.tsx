import styles from "./MetaBar.module.css";
import Image from "next/image";

const items = [
  {
    icon: "/images/spreadmeta.webp",
    value: "0.4 Pip",
    label: "Spread",
  },
  {
    icon: "/images/leveragemeta.webp",
    value: "1:500",
    label: "Leverage",
  },
  {
    icon: "/images/regulatedmeta.webp",
    value: "100%",
    label: "Regulated",
  },
  {
    icon: "/images/supportmeta.webp",
    value: "24/7 Multilingual",
    label: "Customer Support",
  },
];

export default function MetaBar() {
  return (
    <section className={styles.wrap} aria-label="Key Trading Highlights">
      <div className={styles.container}>
        {items.map((item) => (
          <div key={item.label} className={styles.item}>
            <span className={styles.iconWrap} aria-hidden="true">
              <Image
                src={item.icon}
                alt=""
                width={56}
                height={56}
                className={styles.icon}
                priority
              />
            </span>

            <div className={styles.text}>
              <span className={styles.value}>{item.value}</span>
              <span className={styles.label}>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}