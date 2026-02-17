import styles from "./ContactChannels.module.css";

const channels = [
  {
    title: "Media Collaboration",
    email: "marketing@stonefortsecurities.com",
    icon: "media",
  },
  {
    title: "Complaints",
    email: "complaints@stonefortsecurities.com",
    icon: "complaints",
  },
  {
    title: "Career",
    email: "careers@stonefortsecurities.com",
    icon: "career",
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
          {channels.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={`${styles.icon} ${styles[item.icon]}`} />

              <h3 className={styles.cardTitle}>{item.title}</h3>

              <a
                href={`mailto:${item.email}`}
                className={styles.email}
              >
                {item.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}