import Image from "next/image";
import styles from "./PaymentGatewaysSlider.module.css";

type Gateway = { name: string; src: string };

const GATEWAYS: Gateway[] = [
  { name: "Cryptos", src: "/payments/Cryptos.webp" },
  { name: "EasyPaisa", src: "/payments/EasyPaisa.webp" },
  { name: "FAB", src: "/payments/FAB.webp" },
  { name: "GCash", src: "/payments/G-Cash.webp" },
  { name: "GlobePay", src: "/payments/Globe-Pay.webp" },
  { name: "Google Pay", src: "/payments/G-Pay.webp" },
  { name: "Help2Pay", src: "/payments/Help2-pay.webp" },
  { name: "Korapay", src: "/payments/Korapay.webp" },
  { name: "Mastercard", src: "/payments/MAstercard.webp" },
  { name: "Mastercard SecureCode", src: "/payments/Mastercard-Secure-Code.webp" },
  { name: "Maya", src: "/payments/Maya.webp" },
  { name: "MyFatoorah", src: "/payments/My-Faatoorah.webp" },
  { name: "PaymentAsia", src: "/payments/Payment-Asia.webp" },
  { name: "UPI", src: "/payments/UPI.webp" },
  { name: "Verified by Visa", src: "/payments/Verified-by-VISA.webp" },
  { name: "Visa", src: "/payments/Visa.webp" },
  { name: "Apple Pay", src: "/payments/Apple-Pay.webp" },
  { name: "Bitcoin", src: "/payments/Bitcoin-1.webp" },
  { name: "Bank Transfer", src: "/payments/Bank-Transfer.webp" },
  { name: "Binance Pay", src: "/payments/Binance-Pay.webp" },
];

export default function PaymentGatewaysSlider({
  speed = 38, // seconds (smaller = faster)
  title = "Multiple Payment Options",
}: {
  speed?: number;
  title?: string;
}) {
  // Duplicate for seamless infinite loop
  const loop = [...GATEWAYS, ...GATEWAYS];

  return (
    <section className={styles.section} aria-label="Payment gateways">
      <div className={styles.container}>
        <div className={styles.head}>
          <div>
            <p className={styles.kicker}>Deposits & Withdrawals</p>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtext}>
              Availability may vary by country and payment provider.
            </p>
          </div>

          {/* <div className={styles.hint}>
            Hover to pause <span className={styles.dot} /> Drag to explore
          </div> */}
        </div>

        <div className={styles.marquee} style={{ ["--duration" as any]: `${speed}s` }}>
          <div className={styles.fadeLeft} aria-hidden="true" />
          <div className={styles.fadeRight} aria-hidden="true" />

          <div className={styles.track} aria-hidden="true">
            {loop.map((g, i) => (
              <div className={styles.item} key={`${g.name}-${i}`} title={g.name}>
                <div className={styles.card}>
                  <div className={styles.logoWrap}>
                    <Image
                      src={g.src}
                      alt={g.name}
                      fill
                      sizes="180px"
                      className={styles.logo}
                      priority={i < 8}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className={styles.note}>
          Bank transfers require matching beneficiary details with your verified account.
        </p>
      </div>
    </section>
  );
}