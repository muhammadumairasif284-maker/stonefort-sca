"use client";

import { useEffect, useId } from "react";
import styles from "./CFDMarketsPro.module.css";

export default function TvAdvancedChart({ symbol }: { symbol: string }) {
  const id = useId().replace(/:/g, "");

  useEffect(() => {
    const container = document.getElementById(id);
    if (!container) return;

    container.innerHTML = "";
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol,
      interval: "60",
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      enable_publishing: false,
      allow_symbol_change: false,
      hide_side_toolbar: false,
      withdateranges: true,
      details: false,
      hotlist: false,
      calendar: false,
      support_host: "https://www.tradingview.com",
    });

    container.appendChild(script);
  }, [id, symbol]);

  return <div id={id} className={styles.chart}></div>;
}