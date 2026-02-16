"use client";

import { useState } from "react";
import styles from "./ForexFaq.module.css";

const faqs = [
  {
    question: "What is Forex?",
    answer:
      "Forex, or foreign exchange, is the global marketplace where currencies are traded. Operating 24 hours a day, it is the largest and most liquid financial market in the world. Traders buy and sell currency pairs with the aim of profiting from changes in exchange rates.",
  },
  {
    question: "How do I trade Forex?",
    answer:
      "Forex trading involves speculating on whether one currency will strengthen or weaken against another. You trade currency pairs, such as EUR/USD, by deciding if the base currency will rise or fall in value. If you expect the Euro to gain against the US Dollar, you would buy EUR/USD; if you expect it to fall, you would sell it.",
  },
  {
    question: "What are some Forex trading examples?",
    answer:
      "To understand how forex trading works in practice, you can explore real-world examples that show both buying and selling positions on popular currency pairs. These examples help illustrate how price movements create trading opportunities.",
  },
  {
    question: "What is margin in Forex?",
    answer:
      "Margin is the initial deposit required to open a leveraged forex position. It allows you to control a larger trade size with a smaller amount of capital, increasing both your potential profits and potential losses.",
  },
  {
    question: "Why should I trade Forex with Stonefort?",
    answer:
      "Stonefort delivers a powerful combination of competitive spreads, institutional-grade pricing, and access to a full range of major, minor, and exotic currency pairs. With leverage of up to 1:500, fast execution, and deep liquidity, you can trade global markets with precision and flexibility. Built on a secure, multi-jurisdictional regulatory framework, Stonefort offers a trusted, technology-driven environment backed by advanced tools, real-time analytics, and dedicated support.",
  },
];

export default function ForexFaq() {
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