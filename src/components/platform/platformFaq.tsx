"use client";

import { useState } from "react";
import styles from "./PlatformFaq.module.css";

const faqs = [
  {
    question: "How do I log in to my Stonefort trading account",
    answer:
      "You can log in to your Stonefort trading account directly through the Stonefort Client Portal or by accessing your chosen trading platform, including MetaTrader 5, the Web Trading Platform, or the Stonefort Trader mobile app. Step-by-step login guidance is available within the client portal.",
  },
  {
    question: "What are Expert Advisors?",
    answer:
      "Expert Advisors, commonly referred to as EAs, are automated trading programs designed to execute strategies based on predefined rules. On MetaTrader 5, EAs can be used to automate trade execution, risk management, and strategy testing. EAs operate locally on your device and require an active connection to the trading server to function. Traders may run multiple Expert Advisors simultaneously, provided each EA is applied to a separate chart. For advanced users, hosted environments may be used to keep strategies running continuously.",
  },
  {
    question: "What features does the Stonefort web trading platform offer",
    answer:
      "Advanced and interactive charting tools Drag and drop order placement and modification 50+ technical indicators and drawing tools Market comparison tools Automatically saved and fully customisable layouts Integrated market analysis and economic calendar Exclusive performance analytics to track trading activity",
  },
 
];

export default function PlatformFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Forex FAQs – Understand the Markets Better</h2>
          <p>
            Everything you need to know about Forex trading, margin, and how to
            access global currency markets securely.
          </p>
        </div>

        <div className={styles.faqWrapper}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.card} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              <button
                className={styles.question}
                onClick={() => toggle(index)}
              >
                {faq.question}
                <span className={styles.icon}>
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`${styles.answer} ${
                  activeIndex === index ? styles.show : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}