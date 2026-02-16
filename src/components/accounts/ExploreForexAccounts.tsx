import styles from "./ExploreForexAccounts.module.css";
import Link from "next/link";

const STEPS = [
  {
    num: "01",
    title: "Complete the Application",
    desc: "It only takes a few minutes.",
  },
  {
    num: "02",
    title: "Fund your account",
    desc: "Transfer funds using a variety of funding methods.",
  },
  {
    num: "03",
    title: "Start Trading",
    desc: "Take your investments to the next level.",
  },
];

export default function ExploreForexAccounts() {
  return (
    <section className={styles.section} aria-label="Explore Forex Trading Accounts">
      <div className={styles.container}>
        <div className={styles.shell}>
          {/* LEFT */}
          <div className={styles.left}>
            <p className={styles.kicker}>Accounts</p>
            <h2 className={styles.title}>
              Explore Our <span>Forex Trading Account Options</span>
            </h2>

            <p className={styles.desc}>
              Explore the best forex trading account options available with Stonefort Securities. Choose from Starter,Advance, or Elite online trading accounts designed for traders worldwide seeking low spreads, fast execution, and secure MT5 trading. Whether you’re new to trading or an experienced investor, our Stonefort trading accounts offer flexibility and transparency at every level.
            </p>

            <div className={styles.actions}>
              <Link className={styles.primary} href="/accounts/live">
                Open Live Account
              </Link>
              <Link className={styles.secondary} href="/accounts">
                View Account Types
              </Link>
            </div>

            <div className={styles.trustRow} aria-label="Highlights">
              <div className={styles.pill}>Low Spreads</div>
              <div className={styles.pill}>Fast Execution</div>
              <div className={styles.pill}>Secure MT5</div>
              <div className={styles.pill}>Transparent Costs</div>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            <div className={styles.stepsCard}>
              <div className={styles.stepsHead}>
                <h3 className={styles.stepsTitle}>Get Started</h3>
                <p className={styles.stepsSub}>A simple path from signup to trading.</p>
              </div>

              <div className={styles.steps}>
                {STEPS.map((s, idx) => (
                  <div key={s.num} className={styles.step}>
                    <div className={styles.stepRail} aria-hidden="true">
                      <span className={styles.stepDot} />
                      {idx !== STEPS.length - 1 && <span className={styles.stepLine} />}
                    </div>

                    <div className={styles.stepBody}>
                      <div className={styles.stepTop}>
                        <span className={styles.stepNum}>{s.num}</span>
                        <h4 className={styles.stepTitle}>{s.title}</h4>
                      </div>
                      <p className={styles.stepDesc}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.stepsFooter}>
                <Link className={styles.cta} href="/accounts/open-account">
                  Start Now
                </Link>
                <span className={styles.note}>
                  Regulated environment • Risk warning applies
                </span>
              </div>
            </div>

            {/* subtle decorative panel */}
            <div className={styles.sideGlow} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}