"use client";

import { useId, useMemo, useState } from "react";
import Image from "next/image";
import styles from "./PlatformTabs.module.css";

type TabKey = "mt5" | "mtweb" | "mobile" | "web";

type TabItem = {
  key: TabKey;
  label: string;
  kicker: string;
  title: string;
  desc: string;
  img: string;
};

export default function PlatformTabs() {
  const tabs: TabItem[] = useMemo(
    () => [
      {
        key: "mt5",
        label: "MetaTrader 5",
        kicker: "TRADING PLATFORM",
        title: "MetaTrader 5",
        desc: "Access global markets with a professional-grade platform built for advanced analysis and execution.",
        img: "/images/platform/GetStartedImg.webp",
      },
      {
        key: "mtweb",
        label: "MetaTrader Web",
        kicker: "TRADING PLATFORM",
        title: "MetaTrader Web",
        desc: "Trade directly from your browser with a clean interface and no installation required.",
        img: "/images/platform/mt5ChooseMockup.webp",
      },
      {
        key: "mobile",
        label: "Stonefort Trader Mobile",
        kicker: "TRADING PLATFORM",
        title: "Stonefort Trader Mobile",
        desc: "Trade on the go with a responsive experience designed for speed, clarity, and control.",
        img: "/images/platform/mt5whysfs.webp",
      },
      {
        key: "web",
        label: "Stonefort Trader Web",
        kicker: "TRADING PLATFORM",
        title: "Stonefort Trader Web",
        desc: "A smooth web terminal experience for everyday trading with modern tools and clean UI.",
        img: "/images/platform/notuse.webp",
      },
    ],
    []
  );

  const [active, setActive] = useState<TabKey>("mt5");
  const activeTab = tabs.find((t) => t.key === active)!;

  const uid = useId().replace(/:/g, "");
  const tabId = (k: TabKey) => `${uid}-tab-${k}`;
  const panelId = `${uid}-panel`;

  return (
    <section className={styles.section} aria-label="Your Platform. Your Trading Style.">
      <div className={styles.container}>
        {/* LEFT: tabs + content */}
        <div className={styles.left}>
          <h2 className={styles.h2}>Your Platform. Your Trading Style.</h2>
          <p className={styles.p}>
            Trade seamlessly on Stonefort’s advanced trading solutions from web and mobile to the globally trusted MetaTrader suite.
          </p>

          {/* <a className={styles.learnMore} href="/platform">
            Learn More <span aria-hidden="true" className={styles.arrow}>→</span>
          </a> */}

          <div
            className={styles.tabRow}
            role="tablist"
            aria-label="Choose trading platform"
          >
            {tabs.map((t) => {
              const isActive = t.key === active;
              return (
                <button
                  key={t.key}
                  type="button"
                  id={tabId(t.key)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={panelId}
                  tabIndex={isActive ? 0 : -1}
                  className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
                  onClick={() => setActive(t.key)}
                >
                  <span className={styles.tabText}>{t.label}</span>
                  <span className={styles.tabChevron} aria-hidden="true">→</span>
                </button>
              );
            })}
          </div>

          <div
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId(active)}
            className={styles.panel}
          >
            <div className={styles.kicker}>{activeTab.kicker}</div>
            <h3 className={styles.h3}>{activeTab.title}</h3>
            <p className={styles.panelDesc}>{activeTab.desc}</p>
          </div>
        </div>

        {/* RIGHT: image that changes */}
        <div className={styles.right}>
          <div className={styles.media}>
            {/* key forces a nice crossfade without extra libs */}
            <div key={activeTab.key} className={styles.mediaInner}>
              <Image
                src={activeTab.img}
                alt={`${activeTab.title} preview`}
                width={980}
                height={760}
                className={styles.img}
                priority={activeTab.key === "mt5"}
              />
            </div>

            <div className={styles.glowA} />
            <div className={styles.glowB} />
          </div>
        </div>
      </div>
    </section>
  );
}