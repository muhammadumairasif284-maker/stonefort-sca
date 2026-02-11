"use client";

import { useEffect } from "react";

export default function TradingViewMarketQuotes() {
  useEffect(() => {
    const container = document.getElementById("tv-market-quotes");
    if (!container) return;

    // Prevent duplicate script on re-renders / route transitions
    if (container.querySelector("script[data-tv='market-quotes']")) return;

    const script = document.createElement("script");
    script.setAttribute("data-tv", "market-quotes");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.async = true;

    // Configure symbols similar to your screenshot (Oil, Gold, US indices, etc.)
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: 520,
      symbolsGroups: [
        {
          name: "Most traded",
          symbols: [
            { name: "TVC:USOIL", displayName: "Crude Oil" },
            { name: "TVC:GOLD", displayName: "Gold" },
            { name: "FX:XAUUSD", displayName: "XAU/USD" },
            { name: "TVC:NATGAS", displayName: "Natural Gas" },
            { name: "NASDAQ:NDX", displayName: "US 100" },
            { name: "SP:SPX", displayName: "S&P 500" },
          ],
        },
      ],
      showSymbolLogo: true,
      colorTheme: "light",
      locale: "en",
    });

    container.appendChild(script);
  }, []);

  return null;
}