import React from "react";
import { Section } from "../components/common/UI";
import { Link } from "react-router-dom";
import {
  Flag,
  TrendingUp,
  Target,
  Factory,
  Printer,
  Download,
  CheckCircle,
  Sprout,
  Droplets,
  MapPin,
} from "lucide-react";

const FarmPlan = () => {
  const roadmapPhases = [
    {
      id: 1,
      title: "Operational Foundation",
      year: "Phase 1",
      status: "Completed",
      icon: <Flag size={18} />,
      color: "var(--color-primary)",
      description:
        "Establishing the core infrastructure required for long-term agricultural success.",
      points: [
        "Start with high-yield Tomatoes",
        "Establish initial irrigation infrastructure",
      ],
    },
    {
      id: 2,
      title: "Scaling & Expansion",
      year: "Phase 2",
      status: "In Progress",
      icon: <TrendingUp size={18} />,
      color: "var(--color-accent)",
      description:
        "Moving beyond pilot crops to maximize greenhouse output and crop variety.",
      points: [
        "Expand Greenhouse Capacity (2x)",
        "Introduce Peppers & Cucumbers",
      ],
    },
    {
      id: 3,
      title: "Multi-Branch Rollout",
      year: "Phase 3",
      status: "Upcoming",
      icon: <Target size={18} />,
      color: "#9CA3AF",
      description:
        "Taking our standardized model to open fields and new geographic locations.",
      points: [
        "Expand Open-Field Cultivation",
        "Standardize Ops Across Branches",
      ],
    },
    {
      id: 4,
      title: "Industrialization & Export",
      year: "Phase 4",
      status: "Future",
      icon: <Factory size={18} />,
      color: "#D1D5DB",
      description:
        "Vertical integration and preparing our produce for the international market.",
      points: ["Add Tree Plantations", "Processing & Export Readiness"],
    },
  ];

  const activePhaseId = 2;

  return (
    <>
      <div className="page-head bg-light">
        <div className="container">
          <div className="breadcrumb">
            <span className="crumb">Home</span>
            <span className="sep">/</span>
            <span className="crumb active">Strategy</span>
            <span className="sep">/</span>
            <span className="crumb">Roadmap</span>
          </div>

          <div className="head-row">
            <div style={{ maxWidth: 780 }}>
              <h1 style={{ marginBottom: "1rem" }}>
                Strategic Farm Plan & <br />
                Roadmap
              </h1>
              <p style={{ fontSize: "1.05rem", marginBottom: 0 }}>
                From Local Roots to Global Exports: Our 4-Phase Growth Strategy
                outlining our journey from initial crop establishment to
                industrial-scale processing and export readiness.
              </p>
            </div>

            <div className="head-actions">
              <button
                className="btn btn-outline"
                style={{ padding: "0.65rem 1.1rem", fontSize: "0.9rem" }}
              >
                <Printer size={16} /> Print View
              </button>
              <button
                className="btn btn-outline"
                style={{ padding: "0.65rem 1.1rem", fontSize: "0.9rem" }}
              >
                <Download size={16} /> Download PDF Plan
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{ marginTop: "2.25rem", marginBottom: "3rem" }}
      >
        <div className="status-strip">
          <div className="status-strip-icon">
            <CheckCircle size={22} />
          </div>
          <div>
            <div
              style={{
                fontWeight: 900,
                letterSpacing: "0.08em",
                fontSize: "0.78rem",
              }}
              className="uppercase"
            >
              Current Status
            </div>
            <div
              style={{
                color: "var(--color-primary)",
                fontWeight: 800,
                marginTop: "0.2rem",
              }}
            >
              We are currently executing{" "}
              <span className="text-accent">
                Phase 2: Scaling &amp; Expansion
              </span>
              .
            </div>
            <div style={{ color: "#374151", fontSize: "0.92rem" }}>
              Greenhouse capacity is at 65% utilization.
            </div>
          </div>
        </div>
      </div>

      <Section>
        <div className="container">
          <h2 style={{ marginBottom: "0.5rem" }}>Growth Phases Timeline</h2>
          <p style={{ marginBottom: "0.5rem" }}>
            A structured approach to sustainable scaling and standardized
            quality assurance.
          </p>

          <div className="phase-track">
            {roadmapPhases.map((p) => (
              <div key={p.id} className="phase-node">
                <div
                  className={`phase-node-bubble ${
                    p.id === activePhaseId ? "active" : ""
                  }`}
                  style={{ color: p.color }}
                >
                  {p.icon}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-4" style={{ gap: "1.25rem" }}>
            {roadmapPhases.map((phase) => {
              const isActive = phase.id === activePhaseId;
              return (
                <div
                  key={phase.id}
                  className={`card phase-card ${isActive ? "active" : ""}`}
                  style={{ padding: "1.75rem" }}
                >
                  <div
                    className="flex justify-between items-center"
                    style={{ marginBottom: "0.9rem" }}
                  >
                    <span
                      className="badge"
                      style={{ background: "#f3f4f6", color: "#111827" }}
                    >
                      {phase.year}
                    </span>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 800,
                        color:
                          phase.status === "In Progress"
                            ? "var(--color-accent)"
                            : phase.status === "Completed"
                            ? "#16A34A"
                            : "#9CA3AF",
                      }}
                    >
                      {phase.status}
                    </span>
                  </div>

                  <h3 style={{ marginBottom: "0.6rem" }}>{phase.title}</h3>
                  <p style={{ color: "#667085", fontSize: "0.92rem" }}>
                    {phase.description}
                  </p>

                  <div
                    style={{
                      borderTop: "1px solid rgba(0,0,0,0.06)",
                      paddingTop: "0.9rem",
                      marginTop: "1rem",
                    }}
                  >
                    {phase.points.map((pt, i) => (
                      <div
                        key={i}
                        className="flex gap-sm"
                        style={{
                          color: "#374151",
                          fontSize: "0.9rem",
                          marginBottom: "0.55rem",
                        }}
                      >
                        <span style={{ color: phase.color, fontWeight: 900 }}>
                          •
                        </span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="head-row"
            style={{ marginTop: "4rem", marginBottom: "1.5rem" }}
          >
            <h2 style={{ margin: 0 }}>Key Operational Milestones</h2>
            <a
              href="#"
              style={{
                color: "var(--color-accent)",
                fontWeight: 800,
                fontSize: "0.95rem",
              }}
            >
              View Full Gantt Chart
            </a>
          </div>

          <div
            className="grid grid-2"
            style={{ gap: "1.75rem", alignItems: "start" }}
          >
            {/* Milestones */}
            <div>
              <div
                className="card"
                style={{ padding: "1.25rem", marginBottom: "1rem" }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-md">
                    <div className="card-icon" style={{ marginBottom: 0 }}>
                      <Sprout size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 900 }}>
                        Crop Diversification Program
                      </div>
                      <div style={{ color: "#667085", fontSize: "0.9rem" }}>
                        Research and trial of new resistant hybrid seeds.
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      style={{ fontWeight: 900, color: "var(--color-primary)" }}
                    >
                      Q4 2024
                    </div>
                    <span className="badge badge-neutral">Planning</span>
                  </div>
                </div>
              </div>

              <div className="card" style={{ padding: "1.25rem" }}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-md">
                    <div className="card-icon" style={{ marginBottom: 0 }}>
                      <Droplets size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 900 }}>
                        Irrigation Automation Upgrade
                      </div>
                      <div style={{ color: "#667085", fontSize: "0.9rem" }}>
                        Deploying IoT sensors for smart water management.
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      style={{ fontWeight: 900, color: "var(--color-primary)" }}
                    >
                      Q4 2025
                    </div>
                    <span className="badge badge-accent">Sourcing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Map */}
            <div
              className="card"
              style={{ padding: "2rem", background: "#F7F9F5" }}
            >
              <h2 style={{ marginBottom: "0.5rem" }}>Vision Map</h2>
              <p style={{ marginBottom: "1.25rem", color: "#667085" }}>
                Geographic reach expansion plan.
              </p>

              <div
                style={{
                  borderRadius: 14,
                  overflow: "hidden",
                  height: 220,
                  position: "relative",
                }}
              >
                <img
                  src="
                  https://images.unsplash.com/photo-1704230093402-c903d87735b4?q=80&w=2666&auto=format&fit=crop"
                  alt="Map"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.7)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 16,
                    bottom: 16,
                    color: "#fff",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.12em",
                      fontWeight: 900,
                    }}
                    className="uppercase"
                  >
                    Active Zone
                  </div>
                  <div style={{ fontWeight: 900, fontSize: "1rem" }}>
                    South-West Region
                  </div>
                </div>
              </div>

              <div
                className="flex justify-between"
                style={{ marginTop: "1.5rem" }}
              >
                <div style={{ textAlign: "left" }}>
                  <div
                    style={{ fontWeight: 900, fontSize: "2rem", lineHeight: 1 }}
                  >
                    4
                  </div>
                  <div
                    style={{ color: "#667085", fontSize: "0.8rem" }}
                    className="uppercase"
                  >
                    Active Branches
                  </div>
                </div>
                <div style={{ width: 1, background: "rgba(0,0,0,0.12)" }} />
                <div style={{ textAlign: "left" }}>
                  <div
                    style={{ fontWeight: 900, fontSize: "2rem", lineHeight: 1 }}
                  >
                    12
                  </div>
                  <div
                    style={{ color: "#667085", fontSize: "0.8rem" }}
                    className="uppercase"
                  >
                    Planned Sites
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: "1.5rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="kicker"
                  style={{ color: "#6B7280", marginBottom: "0.75rem" }}
                >
                  Next Location Launch
                </div>
                <div className="flex items-center gap-md">
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 999,
                      background: "#fff",
                      border: "1px solid rgba(0,0,0,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 900 }}>Ibadan Outpost</div>
                    <div style={{ color: "#667085", fontSize: "0.9rem" }}>
                      Scheduled: Oct 2026
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-primary btn-block"
                  style={{ marginTop: "1rem" }}
                >
                  View Interactive Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default FarmPlan;
