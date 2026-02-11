import styles from "./Steps3.module.css";

type Step = {
  n: string;
  title: string;
  text: string;
  ctaLabel: string;
  href: string;
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "Create Account",
    text: "Sign up and verify your account in a few minutes.",
    ctaLabel: "Open Account",
    href: "/signup",
  },
  {
    n: "02",
    title: "Fund Your Account",
    text: "Add funds to your account using approved deposit methods.",
    ctaLabel: "Deposit",
    href: "/deposit",
  },
  {
    n: "03",
    title: "Start Trading",
    text: "Access over 1,500 trading instruments with real-time market pricing.",
    ctaLabel: "Trade Now",
    href: "/platform",
  },
];

export default function Steps3() {
  return (
    <section className={styles.section} aria-label="Get started steps">
      <div className={styles.container}>
        <div className={styles.head}>
          <p className={styles.kicker}>Onboarding</p>
          <h2 className={styles.title}>Get Started in 3 Simple Steps</h2>
          <p className={styles.subtext}>
            Open an account, fund it, and start trading — all in a few minutes.
          </p>
        </div>

        <div className={styles.grid}>
          {STEPS.map((s) => (
            <article className={styles.card} key={s.n}>
              <div className={styles.topRow}>
                <div className={styles.stepNo}>{s.n}.</div>
                <div className={styles.stepPill}>Step</div>
              </div>

              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.text}</p>

              <a className={styles.cta} href={s.href}>
                {s.ctaLabel}
                <span className={styles.arrow} aria-hidden="true">→</span>
              </a>

              <span className={styles.glow} aria-hidden="true" />
            </article>
          ))}
        </div>

        <p className={styles.note}>
          Trading involves risk. Ensure you understand the risks before trading CFDs on margin.
        </p>
      </div>
    </section>
  );
}