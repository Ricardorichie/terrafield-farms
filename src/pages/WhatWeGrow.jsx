import React, { useState } from "react";
import { Calendar, TrendingUp, Check } from "lucide-react";

const WhatWeGrow = () => {
  const allCrops = [
    {
      id: 1,
      name: "Roma Tomatoes",
      description:
        "High-yield variety suited for processing and fresh markets.",
      horizon: "Short Term",
      status: "Active",
      cycle: "3-4 Months",
      marketUse: "Fresh / Processing",
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Habanero Peppers",
      description:
        "Spicy variety grown specifically for export quality standards.",
      horizon: "Short Term",
      status: "Active",
      cycle: "4-5 Months",
      marketUse: "Export / Spice",
      image:
        "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Cassava",
      description: "Staple crop cultivated for starch production and garri.",
      horizon: "Mid Term",
      status: "Active",
      cycle: "9-12 Months",
      marketUse: "Starch / Flour",
      image:
        "https://images.unsplash.com/photo-1726497573569-5e7040b8128b?auto=format&fit=crop&q=80&w=1600",
    },
    {
      id: 4,
      name: "Hybrid Plantain",
      description: "Disease-resistant varieties for year-round harvesting.",
      horizon: "Mid Term",
      status: "Planned",
      cycle: "10-12 Months",
      marketUse: "Local Market",
      image:
        "https://images.unsplash.com/photo-1590876609020-1bd83dadfe63?auto=format&fit=crop&q=80&w=1600",
    },
    {
      id: 5,
      name: "Oil Palm",
      description: "Large scale estate development for crude palm oil.",
      horizon: "Long Term",
      status: "Planned",
      cycle: "3-4 Years",
      marketUse: "Industrial Oil",
      image:
        "https://images.unsplash.com/photo-1755365134255-df5efd13a4cb?auto=format&fit=crop&q=80&w=1600",
    },
    {
      id: 6,
      name: "Cashew",
      description: "Premium variety for export and local processing units.",
      horizon: "Long Term",
      status: "Planned",
      cycle: "3+ Years",
      marketUse: "Export / Nuts",
      image:
        "https://images.unsplash.com/photo-1666115390686-049677eb9380?auto=format&fit=crop&q=80&w=1600",
    },
  ];

  const [filter, setFilter] = useState("All Horizons");

  const filteredCrops =
    filter === "All Horizons"
      ? allCrops
      : allCrops.filter((c) => c.horizon === filter || c.status === filter);

  return (
    <>
      <div className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=2600&auto=format&fit=crop"
          className="hero-bg"
          alt="Green Seedling in Soil"
        />
        <div className="page-hero-content">
          <h1 className="page-hero-title">What We Grow</h1>
          <p className="page-hero-subtitle">
            Cultivating Excellence from Nigerian Soil. Explore our diverse
            portfolio of high-quality crops designed for local markets and
            global export.
          </p>
        </div>
      </div>

      <section
        className="section bg-light"
        style={{ background: "var(--color-bg-alt)" }}
      >
        <div className="container">
          <div className="portfolio-head">
            <div>
              <h2 style={{ marginBottom: "0.25rem" }}>Our Crop Portfolio</h2>
              <p className="text-sm" style={{ margin: 0 }}>
                Browse by horizon or filter by availability status.
              </p>
            </div>

            <div className="segmented">
              {["All Horizons", "Active Crops", "Planned Projects"].map((f) => {
                const active =
                  (f === "All Horizons" && filter === "All Horizons") ||
                  (f === "Active Crops" && filter === "Active") ||
                  (f === "Planned Projects" && filter === "Planned");

                return (
                  <button
                    key={f}
                    className={`segmented-btn ${active ? "is-active" : ""}`}
                    onClick={() =>
                      setFilter(
                        f === "Active Crops"
                          ? "Active"
                          : f === "Planned Projects"
                          ? "Planned"
                          : "All Horizons"
                      )
                    }
                    type="button"
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-3" style={{ marginBottom: "6rem" }}>
            {filteredCrops.map((crop) => (
              <div key={crop.id} className="crop-card">
                <div className="crop-image">
                  {crop.image ? (
                    <img src={crop.image} alt={crop.name} />
                  ) : (
                    <div className="location-image-empty">No Image</div>
                  )}
                  <div className="crop-badge">
                    <span
                      className={`badge ${
                        crop.status === "Active"
                          ? "badge-accent"
                          : "badge-neutral"
                      }`}
                    >
                      {crop.status}
                    </span>
                  </div>
                </div>

                <div className="crop-body">
                  <h3>{crop.name}</h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#666",
                      lineHeight: "1.5",
                      minHeight: "3rem",
                    }}
                  >
                    {crop.description}
                  </p>

                  <div className="crop-meta">
                    <div className="flex justify-between items-center text-sm">
                      <span className="crop-meta-label">
                        <Calendar size={16} /> Cycle
                      </span>
                      <span className="crop-meta-value">{crop.cycle}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="crop-meta-label">
                        <TrendingUp size={16} /> Market Use
                      </span>
                      <span className="crop-meta-value">{crop.marketUse}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="quality-promise">
            <h2 style={{ marginBottom: "1rem" }}>Our Quality Promise</h2>
            <p
              style={{
                maxWidth: "700px",
                margin: "0 auto 3rem auto",
                color: "#666",
              }}
            >
              We adhere to rigorous standards from seed selection to harvest,
              ensuring that every crop meets the highest benchmarks for safety
              and quality.
            </p>

            <div className="grid grid-3">
              <div className="card quality-card">
                <div className="card-icon quality-icon">
                  <Check />
                </div>
                <h4>Sustainable Soil Health</h4>
                <p className="text-sm">
                  We utilize regenerative practices to maintain nutrient-rich
                  soil, reducing the need for synthetic inputs.
                </p>
              </div>

              <div className="card quality-card">
                <div className="card-icon quality-icon">
                  <Check />
                </div>
                <h4>Rigorous Selection</h4>
                <p className="text-sm">
                  Every harvest undergoes manual sorting and grading to ensure
                  uniform size, ripeness, and quality.
                </p>
              </div>

              <div className="card quality-card">
                <div className="card-icon quality-icon">
                  <Check />
                </div>
                <h4>Cold Chain Logistics</h4>
                <p className="text-sm">
                  We prioritize rapid transport and appropriate storage
                  conditions to extend shelf life and freshness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeGrow;
