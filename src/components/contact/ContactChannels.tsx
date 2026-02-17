"use client";

import Image from "next/image";
import styles from "./ContactChannels.module.css";

type Channel =
  | {
      title: string;
      icon: string;
      type: "email";
      value: string;
    }
  | {
      title: string;
      icon: string;
      type: "phone";
      value: string;
    };

const channels: Channel[] = [
  {
    title: "Media Collaboration",
    value: "marketing@stonefortsecurities.com",
    icon: "/images/contact/collaboration.webp",
    type: "email",
  },
  {
    title: "Support",
    value: "support@stonefortsecurities.com",
    icon: "/images/contact/support.webp",
    type: "email",
  },
  {
    title: "Contact",
    value: "+971 4 123 4567",
    icon: "/images/contact/contact.webp", // (use your headset icon image here)
    type: "phone",
  },
];

export default function ContactChannels() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headingWrap}>
          <h2 className={styles.title}>Chat with us</h2>
          <p className={styles.subtitle}>
            Connect with the Stonefort customer support team, available 24/7,
            for instant assistance.
          </p>
        </div>

        <div className={styles.grid}>
          {channels.map((item) => {
            const href =
              item.type === "email"
                ? `mailto:${item.value}`
                : `tel:${item.value.replace(/\s+/g, "")}`;

            const label =
              item.type === "email"
                ? `Email ${item.title}`
                : `Call ${item.title}`;

            return (
              <article key={item.title} className={styles.card}>
                <div className={styles.iconWrap} aria-hidden="true">
                  <Image
                    src={item.icon}
                    alt=""
                    width={96}
                    height={96}
                    className={styles.iconImg}
                    priority={false}
                  />
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>

                <a className={styles.value} href={href} aria-label={label}>
                  {item.value}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}