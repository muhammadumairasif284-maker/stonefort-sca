"use client";

import { useEffect, useId } from "react";
import styles from "./CFDMarketsPro.module.css";

export default function TvSymbolInfo({ symbol }: { symbol: string }) {
  const id = useId().replace(/:/g, "");

  useEffect(() => {
    const container = document.getElementById(id);
    if (!container) return;

    container.innerHTML = "";
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      symbol,
      width: "100%",
      locale: "en",
      colorTheme: "dark",
      isTransparent: false, // can be true/false; overlay works either way
    });

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [id, symbol]);

  return (
    <div className={styles.symbolInfoGlass}>
      <div id={id} className={styles.symbolInfo} />
    </div>
  );
}