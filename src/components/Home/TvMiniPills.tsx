"use client";

import { useEffect, useId } from "react";
import styles from "./CFDMarketsPro.module.css";

export default function TvMiniPills({
  symbols,
  activeSymbol,
  onSelect,
}: {
  symbols: string[];
  activeSymbol: string;
  onSelect: (s: string) => void;
}) {
  const id = useId().replace(/:/g, "");

  useEffect(() => {
    const container = document.getElementById(id);
    if (!container) return;

    container.innerHTML = "";
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      symbols: symbols.map((s) => ({ proName: s, title: s.split(":")[1] })),
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: "adaptive",
      colorTheme: "light",
      locale: "en",
    });

    container.appendChild(script);
  }, [id, symbols.join("|")]);

  // Click overlay: we render our own invisible clickable “pills”
  return (
    <div className={styles.pillsWrap}>
      <div id={id} className={styles.tvTape}></div>

      <div className={styles.pillOverlay}>
        {symbols.map((s) => (
          <button
            key={s}
            type="button"
            className={`${styles.pillBtn} ${
              activeSymbol === s ? styles.pillActive : ""
            }`}
            onClick={() => onSelect(s)}
            aria-label={`Select ${s}`}
          />
        ))}
      </div>
    </div>
  );
}