"use client";

import { useMemo, useState } from "react";
import styles from "./CFDMarketsPro.module.css";
import TvMiniPills from "./TvMiniPills";
import TvSymbolInfo from "./TvSymbolInfo";
import TvAdvancedChart from "./TvAdvancedChart";

type GroupKey = "All" | "Commodities" | "Indices" | "Forex";

const GROUPS: Record<GroupKey, { label: string; symbols: string[] }> = {
  All: {
    label: "All",
    symbols: ["TVC:USOIL", "TVC:GOLD", "TVC:NATGAS", "NASDAQ:NDX", "SP:SPX", "FX:XAUUSD"],
  },
  Commodities: {
    label: "Commodities",
    symbols: ["TVC:USOIL", "TVC:GOLD", "TVC:NATGAS"],
  },
  Indices: {
    label: "Indices",
    symbols: ["NASDAQ:NDX", "SP:SPX"],
  },
  Forex: {
    label: "Forex",
    symbols: ["FX:XAUUSD", "FX:EURUSD", "FX:GBPUSD"],
  },
};

const SORTS = [
  { key: "most", label: "Most traded" },
  { key: "top", label: "Top movers" },
  { key: "popular", label: "Popular" },
] as const;

export default function MarketBoard() {
  const [group, setGroup] = useState<GroupKey>("All");
  const [sort, setSort] = useState<(typeof SORTS)[number]["key"]>("most");

  // Default selected symbol
  const [activeSymbol, setActiveSymbol] = useState("TVC:USOIL");

  const symbols = useMemo(() => {
    // You can later change ordering based on `sort` (client-side)
    return GROUPS[group].symbols;
  }, [group]);

  // Keep activeSymbol valid when group changes
  useMemo(() => {
    if (!symbols.includes(activeSymbol)) setActiveSymbol(symbols[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [symbols.join("|")]);

  return (
    <div className={styles.board}>
      {/* Top filters */}
      <div className={styles.filters}>
        <div className={styles.selectWrap}>
          <label className={styles.label}> </label>
          <select
            className={styles.select}
            value={group}
            onChange={(e) => setGroup(e.target.value as GroupKey)}
          >
            {Object.keys(GROUPS).map((k) => (
              <option key={k} value={k}>
                {GROUPS[k as GroupKey].label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.selectWrap}>
          <label className={styles.label}>Sort</label>
          <select
            className={styles.select}
            value={sort}
            onChange={(e) => setSort(e.target.value as any)}
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