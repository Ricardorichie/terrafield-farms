import React from "react";
import { ArrowRight, Sprout, Map, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const shortTermCrops = [
    {
      name: "Tomatoes",
      horizon: "Short Term",
      status: "Active",
      cycle: "High-yield greenhouse variety.",
    },
    {
      name: "Habanero Pepper",
      horizon: "Short Term",
      status: "Active",
      cycle: "Local market favorite.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ justifyContent: "flex-start" }}>
        <img
          src="https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?q=80&w=2600&auto=format&fit=crop"
          alt="Green Farm Field"
          className="hero-bg"
          style={{
            objectFit: "revert",
            filter: "brightness(0.5) blur(7px)",
            mixBlendMode: "multiply",
          }}
        />

        <div className="container hero-content">
          <div className="hero-badge animate-fade-up">
            Planting Now: Season 2026
          </div>

          <h1 className="animate-fade-up text-primary-light">
            TerraField <br />
            <span className="text-accent">Farms.</span>
          </h1>

          <p
            className="text-white animate-fade-up"
            style={{
              fontSize: "1.25rem",
              maxWidth: "600px",
              marginBottom: "2.5rem",
              animationDelay: "0.1s",
            }}
          >
            Feeding the Future of Nigeria. Modern agriculture meeting local
            demand with global standards.
          </p>

          <div
            className="flex gap-md animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link to="/what-we-grow" className="btn btn-primary">
              Explore Produce <ArrowRight size={20} />
            </Link>
            <Link to="/partnerships" className="btn btn-outline-white">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section text-center">
        <div className="container">
          <h2 style={{ maxWidth: "1000px", margin: "0 auto" }}>
            We grow <span className="text-accent">high-demand crops</span> using
            greenhouse and open-field systems, built to scale into
            multi-location farming, processing, and export.
          </h2>
        </div>
      </section>

      {/* What We Do Now */}
      <section
        className="section bg-light"
        style={{ background: "var(--color-bg-alt)" }}
      >
        <div className="container">
          <div style={{ marginBottom: "3rem" }}>
            <span className="uppercase text-accent font-bold text-sm">
              Our Operations
            </span>
            <h2>What We Do Now</h2>
          </div>

          <div className="grid grid-3">
            <div className="card">
              <div className="card-icon">
                <Sprout size={24} />
              </div>
              <h3>Greenhouse Tech</h3>
              <p>
                Controlled environments for delicate crops like peppers and
                cucumbers, guaranteeing year-round supply.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">
                <Map size={24} />
              </div>
              <h3>Open-Field Scale</h3>
              <p>
                Scalable staple crop production optimized for Nigerian soil
                conditions, focusing on Maize and Tubers.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">
                <ShoppingBag size={24} />
              </div>
              <h3>Wholesale Readiness</h3>
              <p>
                Consistent supply chain management designed for major buyers and
                supermarkets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Building */}
      <section className="section">
        <div className="container">
          <div
            className="flex justify-between items-center"
            style={{ marginBottom: "4rem" }}
          >
            <div>
              <span className="uppercase text-accent font-bold text-sm">
                Vision
              </span>
              <h2>What We're Building</h2>
            </div>
          </div>

          <div className="grid grid-3">
            <div>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "#eef",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  marginBottom: "1.5rem",
                  color: "var(--color-primary)",
                }}
              >
                01
              </div>
              <h3>Multi-Branch Expansion</h3>
              <p>
                Acquiring additional hectares across key agricultural zones to
                diversify crop yield.
              </p>
            </div>
            <div>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "#f3f4f6",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  marginBottom: "1.5rem",
                  color: "#999",
                }}
              >
                02
              </div>
              <h3>Processing Facilities</h3>
              <p>
                Establishing on-site processing to reduce post-harvest loss and
                create value-added products.
              </p>
            </div>
            <div>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "#f3f4f6",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  marginBottom: "1.5rem",
                  color: "#999",
                }}
              >
                03
              </div>
              <h3>Global Export</h3>
              <p>
                Obtaining international organic certifications to begin
                exporting premium produce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crop Overview */}
      <section
        className="section"
        style={{ background: "var(--color-bg-alt)" }}
      >
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <span className="uppercase text-accent font-bold text-sm">
              Our Produce
            </span>
            <h2>Crop Overview</h2>
          </div>

          <div className="grid grid-2">
            {shortTermCrops.map((c, i) => (
              <div
                key={i}
                className="crop-card flex"
                style={{ flexDirection: "row", height: "140px" }}
              >
                <div
                  style={{
                    width: "35%",
                    background: "#eee",
                    position: "relative",
                  }}
                >
                  <img
                    src={
                      i === 0
                        ? "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?q=80&w=2340&auto=format&fit=crop"
                        : "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=500"
                    }
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    alt={c.name}
                  />
                </div>
                <div className="crop-body" style={{ flex: 1, padding: "1rem" }}>
                  <div className="flex justify-between">
                    <h3>{c.name}</h3>
                    <span className="badge badge-accent">{c.status}</span>
                  </div>
                  <p>{c.cycle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
