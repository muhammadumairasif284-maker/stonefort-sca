// src/components/layout/Footer/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const menu = [
  { href: "/", label: "Home" },
  { href: "/Market", label: "Market" },
  { href: "/accounts", label: "Accounts" },
  { href: "/platform", label: "Platform" },
  { href: "/product", label: "Product" },
  { href: "/contact", label: "Contact Us" },
];

const socials = [
  {
    href: "https://www.facebook.com/people/Stonefort-Securities/61576805064272/?mibextid=wwXIfr&rdid=OLRs6M27PoIBo4as&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16QwwioCGv%2F%3Fmibextid%3DwwXIfr",
    label: "Facebook",
    icon: "fb",
  },
  {
    href: "https://www.instagram.com/stonefortsecurities/",
    label: "Instagram",
    icon: "ig",
  },
  {
    href: "https://www.linkedin.com/company/stonefort-securities/",
    label: "LinkedIn",
    icon: "in",
  },
  {
    href: "https://x.com/Sfsecurities",
    label: "X",
    icon: "x",
  },
  {
    href: "https://www.youtube.com/@SFsecurities",
    label: "YouTube",
    icon: "yt",
  },
];

const legalLinks = [
  { href: "/legal-documents", label: "Legal Documents" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookies-policy", label: "Cookies Policy" },

];

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.container}>

{/* TOP SOCIAL + LEGAL ROW */}
<div className={styles.topRow}>
  <div className={styles.socialLinks}>
    {socials.map((s) => (
      <a
        key={s.label}
        href={s.href}
        target="_blank"
        rel="noreferrer"
        className={styles.socialBtn}
        aria-label={s.label}
        title={s.label}
      >
        <SocialIcon type={s.icon} />
      </a>
    ))}
  </div>

  <nav aria-label="Legal links">
    <ul className={styles.topLegalLinks}>
      {legalLinks.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className={styles.topLegalLink}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
</div>
        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.leftCol}>
         

            <div className={styles.menuBlock}>
              <h3 className={styles.sectionTitle}>Site Menu</h3>
              <nav aria-label="Footer navigation">
                <ul className={styles.menu}>
                  {menu.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className={styles.menuLink}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className={styles.disclaimerBlock}>
              <h3 className={styles.sectionTitle}>Disclaimer</h3>

              <p className={styles.legalText}>
                Stonefort Securities LLC is licensed by the Capital Market Authority, UAE, under Category 5 (License No. 20200000226). Stonefort Securities LLC is authorized solely to conduct financial advisory, promotional, and client introduction activities in relation to financial products and services offered by Stonefort Securities Ltd. 
              </p>

              <p className={styles.legalText}>
                Stonefort Securities LLC does not hold client funds or execute trades; its role is strictly limited to financial awareness and client introductions within the approved regulatory framework.  
              </p>

              <p className={styles.riskText}>
                <strong>Risk Warning:</strong> Trading Contracts for Difference
                (CFDs) on margin involves a high level of risk and may not be
                suitable for all investors. You should ensure that you fully
                understand the risks involved before trading.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.rightCol}>
            <div className={styles.appBlock}>
              <h3 className={styles.appTitle}>StonefortTrader</h3>
              <div className={styles.phoneWrap}>
                <Image
                  src="/images/platform/stonefortraderf.webp"
                  alt="Stonefort Trader mobile app"
                  width={700}
                  height={900}
                  className={styles.phoneMockup}
                  priority
                />

                <div className={styles.badgesOverlay}>
                  <a
                    href="https://stonefortpartners.ae/downloadapp.html"
                    className={styles.storeLink}
                    aria-label="Download on the App Store"
                  >
                    <Image
                      src="/images/app-store.png"
                      alt="Available on the App Store"
                      width={420}
                      height={120}
                      className={styles.storeBadge}
                    />
                  </a>

                  <a
                    href="https://stonefortpartners.ae/downloadapp.html"
                    className={styles.storeLink}
                    aria-label="Get it on Google Play"
                  >
                    <Image
                      src="/images/google-play.png"
                      alt="Available on Google Play"
                      width={420}
                      height={120}
                      className={styles.storeBadge}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

<div className={styles.bottomBar}>
  <p className={styles.copy}>
    Copyright © {new Date().getFullYear()} Stonefort. All rights reserved.
  </p>
</div>
      </div>
    </footer>
  );
}

function SocialIcon({ type }: { type: string }) {
  switch (type) {
    case "fb":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
          <path d="M13.5 22v-8h2.7l.4-3H13.5V9.2c0-.9.2-1.5 1.5-1.5h1.6V5.1c-.3 0-1.4-.1-2.7-.1-2.6 0-4.4 1.6-4.4 4.6V11H7v3h2.5v8h4z" />
        </svg>
      );
    case "ig":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6zm0 2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zM17.7 6.9a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" />
        </svg>
      );
    case "in":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
          <path d="M6.5 6.5a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zM5 21V9h3v12H5zm5-12h2.9v1.6h.1c.4-.8 1.5-1.8 3.1-1.8 3.3 0 3.9 2.2 3.9 5V21h-3v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-3V9z" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
          <path d="M18.7 3H21l-5.9 6.7L22 21h-5.6l-4.4-5.7L6.9 21H3l6.4-7.3L2 3h5.7l4 5.2L18.7 3zm-1 16h1.3L8.9 5H7.5l10.2 14z" />
        </svg>
      );
    case "yt":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
          <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.9 4.6 12 4.6 12 4.6s-5.9 0-7.5.5A3 3 0 0 0 2.4 7.2 31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.6.5 7.5.5 7.5.5s5.9 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8zM10 15.5V8.5L16 12l-6 3.5z" />
        </svg>
      );
    default:
      return null;
  }
}