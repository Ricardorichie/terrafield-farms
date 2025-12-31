import React from "react";
import { Section } from "../components/common/UI";
import GrowthChart from "../components/features/GrowthChart";
import { Download, Map, Sprout, Store, Info, Sliders } from "lucide-react";

const Projections = () => {
  const data = [
    { year: "2025", hectares: 1, greenhouses: 0, branches: 1 },
    { year: "2026", hectares: 3, greenhouses: 2, branches: 2 },
    { year: "2027", hectares: 5, greenhouses: 4, branches: 3 },
    { year: "2028", hectares: 8, greenhouses: 6, branches: 4 },
    { year: "2029", hectares: 11, greenhouses: 8, branches: 6 },
    { year: "2030", hectares: 13, greenhouses: 10, branches: 8 },
  ];

  return (
    <>
      <div className="page-head">
        <div className="container">
          <div className="head-row">
            <div style={{ maxWidth: 760 }}>
              <span
                className="kicker"
                style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 999,
                    background: "var(--color-accent)",
                  }}
                />
                Strategic Outlook
              </span>

              <h1 style={{ marginTop: "0.5rem" }}>
                Growth &amp; Expansion <br />
                Projections
              </h1>

              <p style={{ color: "#667085", marginBottom: 0 }}>
                Detailed capacity targets 2025-2030 for Nigerian operations and
                West African expansion phases.
              </p>
            </div>

            <button
              className="btn btn-outline"
              style={{ padding: "0.75rem 1.1rem" }}
            >
              <Download size={16} /> Download Growth Plan (PDF)
            </button>
          </div>
        </div>
      </div>

      <Section className="bg-light">
        <div className="container">
          {/* Top Stats */}
          <div
            className="grid grid-3"
            style={{ gap: "1.25rem", marginBottom: "1.25rem" }}
          >
            <div className="card">
              <div className="stat-top">
                <div className="stat-label">2030 Cultivated Area</div>
                <div className="icon-pill">
                  <Map size={16} />
                </div>
              </div>
              <h2 style={{ marginBottom: "0.35rem" }}>13+ Hectares</h2>
              <div
                style={{
                  color: "var(--color-accent)",
                  fontWeight: 900,
                  fontSize: "0.9rem",
                }}
              >
                ↗ +1200% Growth Target
              </div>
            </div>

            <div className="card">
              <div className="stat-top">
                <div className="stat-label">2030 Greenhouse Capacity</div>
                <div
                  className="icon-pill"
                  style={{ background: "rgba(102,204,51,0.18)" }}
                >
                  <Sprout size={16} />
                </div>
              </div>
              <h2 style={{ marginBottom: "0.35rem" }}>10 Units</h2>
              <div
                style={{
                  color: "var(--color-accent)",
                  fontWeight: 900,
                  fontSize: "0.9rem",
                }}
              >
                ↗ +900% Capacity Increase
              </div>
            </div>

            <div className="card">
              <div className="stat-top">
                <div className="stat-label">2030 Branch Network</div>
                <div className="icon-pill">
                  <Store size={16} />
                </div>
              </div>
              <h2 style={{ marginBottom: "0.35rem" }}>8 Locations</h2>
              <div
                style={{
                  color: "var(--color-accent)",
                  fontWeight: 900,
                  fontSize: "0.9rem",
                }}
              >
                ↗ +700% Physical Footprint
              </div>
            </div>
          </div>

          {/* Chart (Full Width) */}
          <div
            className="card"
            style={{ padding: "2rem", marginBottom: "1.5rem" }}
          >
            <div className="chart-head">
              <div>
                <h3 style={{ marginBottom: "0.25rem" }}>
                  Infrastructure Scale Projection
                </h3>
                <p style={{ margin: 0, color: "#667085" }}>
                  Physical asset accumulation forecast (5-Year Horizon)
                </p>
              </div>

              <div className="legend">
                <span>
                  <span
                    className="legend-dot"
                    style={{ background: "var(--color-accent)" }}
                  />
                  Cultivated Area (Ha)
                </span>
                <span>
                  <span
                    className="legend-dot"
                    style={{ background: "var(--color-primary)" }}
                  />
                  Greenhouse Units
                </span>
                <span>
                  <span
                    className="legend-dot"
                    style={{ background: "#9CA3AF" }}
                  />
                  Branches
                </span>
              </div>
            </div>

            <div
              style={{
                height: 440,
                borderRadius: 12,
                background: "#F9FAFB",
                padding: "1rem",
              }}
            >
              <GrowthChart data={data} height={420} showTitle={true} />
            </div>
          </div>

          {/* Bottom Row */}
          <div
            className="grid grid-2"
            style={{ gap: "1.25rem", alignItems: "start" }}
          >
            <div
              className="card disclaimer-card"
              style={{ padding: "2.25rem" }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  opacity: 0.9,
                  marginBottom: "1rem",
                }}
              >
                <Info size={16} />
                <span
                  className="kicker"
                  style={{ color: "rgba(255,255,255,0.7)", margin: 0 }}
                >
                  Legal Disclaimer
                </span>
              </div>

              <h3 className="text-white" style={{ marginBottom: "0.75rem" }}>
                Illustrative Estimates Only
              </h3>
              <p style={{ marginBottom: "1.25rem" }}>
                The projections displayed above are based on current capacity
                expansion targets and operational modeling. These figures are
                not financial revenue guarantees and depend on variable factors.
              </p>

              <a
                href="#"
                style={{ color: "var(--color-accent)", fontWeight: 900 }}
              >
                View Full Legal Disclosure →
              </a>
            </div>

            <div className="card" style={{ padding: "2.25rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: "1rem",
                }}
              >
                <Sliders size={18} />
                <h3 style={{ margin: 0 }}>Model Assumptions</h3>
              </div>

              <div className="assumption-row">
                <div className="assumption-k">Growth Scenario</div>
                <div className="assumption-v">Conservative Baseline</div>
              </div>
              <div className="assumption-row">
                <div className="assumption-k">Capital Injection</div>
                <div className="assumption-v">Series A (Q2 2025)</div>
              </div>
              <div className="assumption-row">
                <div className="assumption-k">Market Focus</div>
                <div className="assumption-v">Nigeria (South-West)</div>
              </div>
              <div className="assumption-row">
                <div className="assumption-k">Efficiency Rate</div>
                <div className="assumption-v">85% Capacity Utilization</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Projections;
