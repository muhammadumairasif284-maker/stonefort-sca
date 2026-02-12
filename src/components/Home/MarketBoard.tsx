"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./CFDMarketsPro.module.css";
import TvMiniPills from "./TvMiniPills";
import TvSymbolInfo from "./TvSymbolInfo";
import TvAdvancedChart from "./TvAdvancedChart";

type GroupKey = "All" | "Commodities" | "Indices" | "Forex";
type SortKey = "most" | "top" | "popular";

const GROUPS: Record<GroupKey, { label: string; symbols: string[] }> = {
  All: {
    label: "All",
    symbols: [
      // Commodities
      "TVC:USOIL",
      "TVC:GOLD",
      "TVC:NATGAS",

      // Indices (CFD style - embed-friendly)
      "OANDA:NAS100USD",
      "OANDA:SPX500USD",
      "OANDA:US30USD",

      // Forex
      "FX:EURUSD",
      "FX:GBPUSD",
      "FX:USDJPY",
    ],
  },

  Commodities: {
    label: "Commodities",
    symbols: ["TVC:USOIL", "TVC:GOLD", "TVC:NATGAS"],
  },

  Indices: {
    label: "Indices",
    symbols: ["OANDA:NAS100USD", "OANDA:SPX500USD", "OANDA:US30USD"],
  },

  Forex: {
    label: "Forex",
    symbols: ["FX:EURUSD", "FX:GBPUSD", "FX:USDJPY"],
  },
};

const SORTS: { key: SortKey; label: string }[] = [
  { key: "most", label: "Most traded" },
  { key: "top", label: "Top movers" },
  { key: "popular", label: "Popular" },
];

export default function MarketBoard() {
  const [group, setGroup] = useState<GroupKey>("All");
  const [sort, setSort] = useState<SortKey>("most");

  // Default selected symbol
  const [activeSymbol, setActiveSymbol] = useState<string>(GROUPS.All.symbols[0]);

  const symbols = useMemo(() => {
    const base = GROUPS[group].symbols;

    // Optional: reorder based on sort (you can change this logic later)
    if (sort === "most") return base;
    if (sort === "top") return base; // placeholder
    if (sort === "popular") return base; // placeholder

    return base;
  }, [group, sort]);

  // Keep activeSymbol valid when group/sort changes
  useEffect(() => {
    if (!symbols.length) return;
    if (!symbols.includes(activeSymbol)) {
      setActiveSymbol(symbols[0]);
    }
  }, [symbols, activeSymbol]);

  return (
    <div className={styles.board}>
      {/* Top filters */}
      <div className={styles.filters}>
        <div className={styles.selectWrap}>
          <label className={styles.label} aria-label="Market group">
            {" "}
          </label>
          <select
            className={styles.select}
            value={group}
            onChange={(e) => setGroup(e.target.value as GroupKey)}
          >
            {(Object.keys(GROUPS) as GroupKey[]).map((k) => (
              <option key={k} value={k}>
                {GROUPS[k].label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.selectWrap}>
          <label className={styles.label}>Sort</label>
          <select
            className={styles.select}
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
          >
            {SORTS.map((s) => (
              <option key={s.key} value={s.key}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Pills row */}
      <div className={styles.pillsRow}>
        <TvMiniPills
          symbols={symbols}
          activeSymbol={activeSymbol}
          onSelect={(sym) => setActiveSymbol(sym)}
        />
      </div>

      {/* Main grid */}
      <div className={styles.grid}>
        {/* Left card (NO buy/sell) */}
        <div className={styles.leftCard}>
          <div className={styles.leftTop}>
            <h3 className={styles.symbolTitle}>Instrument</h3>
            <span className={styles.badge}>Indicative</span>
          </div>

          <TvSymbolInfo symbol={activeSymbol} />

          <p className={styles.smallNote}>
            Market data is indicative and for informational purposes only. Prices may be delayed.
          </p>
        </div>

        {/* Right chart */}
        <div className={styles.chartCard}>
          <TvAdvancedChart symbol={activeSymbol} />
        </div>
      </div>
    </div>
  );
}