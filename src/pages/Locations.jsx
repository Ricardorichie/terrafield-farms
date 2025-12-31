import React from "react";
import { Section, Button } from "../components/common/UI";
import {
  MapPin,
  ArrowRight,
  CheckCircle,
  Clock,
  TrendingUp,
  Tractor,
  Phone,
  Mail,
  Building2,
  Sprout,
} from "lucide-react";

const akureMetrics = [
  {
    label: "Primary Crops",
    value: "Tomatoes, Potatoes",
    icon: <Sprout size={16} className="text-accent" />,
  },
  {
    label: "Method",
    value: "Hydroponic",
    icon: <span className="metric-dot" aria-hidden="true" />,
  },
  {
    label: "Active Land",
    value: "1 Hectare",
    icon: <TrendingUp size={16} className="text-accent" />,
  },
  {
    label: "Next Harvest",
    value: "May 2026",
    icon: <Clock size={16} className="text-accent" />,
  },
];

const futureLocations = [
  {
    id: 1,
    name: "TerraField Lagos",
    region: "Epe Region",
    status: "Coming Soon",
    statusClass: "coming-soon",
    detail: "Expected Launch: Q1 2027",
    icon: <Tractor size={16} />,
    statusIcon: "Site Prep Phase",
    image:
      "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "TerraField Abuja",
    region: "Federal Capital Territory",
    status: "Scouting",
    statusClass: "scouting",
    detail: "Expected Launch: Q4 2027",
    icon: <MapPin size={16} />,
    statusIcon: "Land Acquisition",
    image:
      "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "TerraField Expansion",
    region: "Oyo / Osun Region",
    status: "Pending",
    statusClass: "scouting",
    detail: "Expected Launch: 2026",
    icon: <Building2 size={16} />,
    statusIcon: "Feasibility Study",
    image: null,
  },
];

const Locations = () => {
  return (
    <>
      <div className="locations-hero-wrap">
        <div className="container">
          <div className="locations-hero-panel">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2500&auto=format&fit=crop"
              alt="Nigeria Map Background"
              className="hero-bg"
              style={{
                filter: "brightness(0.5) blur(2px)",
              }}
            />

            <div className="locations-hero-content">
              <span className="status-badge status-badge-hero">
                <span className="pulse-dot" aria-hidden="true" />
                Expanding Network
              </span>

              <h1 className="locations-hero-title">
                Growing Across the
                <br />
                Nation
              </h1>

              <p className="locations-hero-subtitle">
                TerraField is building a sustainable farming network across
                Nigeria. From our roots in Akure to upcoming hubs nationwide.
              </p>

              <div className="locations-hero-actions">
                <Button className="btn btn-primary">
                  View Active Locations
                </Button>
                <Button className="btn btn-outline-white btn-glass">
                  Partnership Opportunities
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section className="section-sm">
        <div className="container">
          <div style={{ marginBottom: "6rem" }}>
            <div className="section-title-row">
              <MapPin className="text-accent" size={22} />
              <h2 style={{ margin: 0 }}>Rooted in Akure</h2>
            </div>

            <div
              className="flex justify-between"
              style={{
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <p style={{ margin: 0, maxWidth: "46rem" }}>
                Our pilot facility establishing the blueprint for sustainable
                farming. Fully operational and currently serving the Ondo State
                region.
              </p>

              <span
                className="status-badge active"
                style={{ border: "1px solid #BBF7D0" }}
              >
                <CheckCircle size={14} /> Operational Base
              </span>
            </div>

            <div className="active-location">
              <div className="active-location-image">
                <img
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop"
                  alt="Akure Facility"
                />
                <div className="image-label">HQ &amp; Pilot Facility</div>
              </div>

              <div className="active-location-content">
                <div className="active-location-head">
                  <div>
                    <h3 className="active-location-name">TerraField Akure</h3>
                    <span className="active-location-region">
                      Ondo State, Nigeria
                    </span>
                  </div>

                  <div className="active-location-actions">
                    <button
                      className="icon-btn"
                      type="button"
                      aria-label="Call"
                    >
                      <Phone size={14} />
                    </button>
                    <button
                      className="icon-btn"
                      type="button"
                      aria-label="Email"
                    >
                      <Mail size={14} />
                    </button>
                  </div>
                </div>

                <p className="active-location-desc">
                  Specializing in high-yield maize and cassava production using
                  a hybrid of hydroponic technologies and optimized open-field
                  methods. This facility serves as our central training hub.
                </p>

                <div className="metrics-box">
                  <div className="metric-grid">
                    {akureMetrics.map((metric, idx) => (
                      <div key={idx}>
                        <div className="metric-item-label">{metric.label}</div>
                        <div className="metric-item-value">
                          {metric.icon} {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-md" style={{ flexWrap: "wrap" }}>
                  <Button
                    className="btn btn-primary"
                    style={{ flex: 1, justifyContent: "center" }}
                  >
                    View Supply Schedule <ArrowRight size={16} />
                  </Button>
                  <Button
                    className="btn btn-outline"
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      background: "white",
                    }}
                  >
                    Facility Updates
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: "6rem" }}>
            <h2 style={{ marginBottom: "0.35rem" }}>Cultivating the Future</h2>
            <p style={{ marginBottom: "2rem" }}>
              Upcoming locations scheduled for development and launch in the
              next 24 months.
            </p>

            <div className="grid grid-3" style={{ gap: "1.5rem" }}>
              {futureLocations.map((loc) => (
                <div key={loc.id} className="location-card">
                  <div className="location-image location-image-muted">
                    {loc.image ? (
                      <img src={loc.image} alt={loc.name} />
                    ) : (
                      <div className="location-image-empty">
                        <MapPin className="text-muted" size={42} />
                      </div>
                    )}

                    <div
                      className={`status-badge ${loc.statusClass} location-status`}
                    >
                      {loc.status}
                    </div>
                  </div>

                  <div className="location-content">
                    <h4 className="location-name">{loc.name}</h4>
                    <p className="location-region">{loc.region}</p>

                    <div className="location-meta">
                      <div className="location-meta-row">
                        {loc.icon} {loc.statusIcon}
                      </div>
                      <div className="location-meta-detail">{loc.detail}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="partner-banner" style={{ marginBottom: "3rem" }}>
            <div>
              <h2 className="text-white" style={{ marginBottom: "0.5rem" }}>
                Own Land? Become a Partner.
              </h2>
              <p
                style={{
                  margin: 0,
                  marginRight: "1rem",
                  color: "rgba(255,255,255,0.75)",
                  maxWidth: "44rem",
                }}
              >
                We are actively looking for land partners and distributors to
                expand our network. Join us in revolutionizing agriculture
                across the continent.
              </p>
            </div>

            <div className="flex gap-md" style={{ flexWrap: "wrap" }}>
              <Button className="btn btn-primary">Apply as Land Partner</Button>
              <Button className="btn btn-outline-white btn-glass">
                Become a Distributor
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Locations;
