import React from "react";
import { Section } from "../components/common/UI";
import { ShoppingBag, Truck, Map, Factory, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Partnerships = () => {
  return (
    <>
      <div className="hero hero--short hero--soft" style={{ marginBottom: 0 }}>
        <img
          src="
          https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=2340&auto=format&fit=crop"
          className="hero-bg"
          alt="Partnerships Hero"
          style={{ filter: "brightness(0.55)" }}
        />
        <div className="container hero-content text-center">
          <h1 className="text-white" style={{ maxWidth: 980 }}>
            Growing Together: Partner <br /> with TerraField
          </h1>
          <p
            className="text-white"
            style={{
              fontSize: "1.05rem",
              maxWidth: 760,
              margin: "0 auto 1.75rem auto",
              opacity: 0.9,
            }}
          >
            Sourcing, distribution, and expansion opportunities for agribusiness
            leaders in Nigeria and beyond.
          </p>

          <div
            className="flex gap-md justify-center"
            style={{ flexWrap: "wrap" }}
          >
            <a href="#opportunities" className="btn btn-primary">
              View Opportunities
            </a>
            <Link to="/contact" className="btn btn-outline-white btn-glass">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      <Section id="opportunities" className="bg-light">
        <div
          className="container text-center"
          style={{ marginBottom: "2.75rem" }}
        >
          <span className="kicker">Collaborate</span>
          <h2>Select Your Partnership Pathway</h2>
          <p
            style={{
              maxWidth: 640,
              margin: "0.75rem auto 0",
              color: "#667085",
            }}
          >
            Whether you are a buyer, logistics expert, landowner, or processor,
            we have a model designed for mutual growth.
          </p>
        </div>

        <div className="container">
          {/* Wholesale Split Card */}
          <div className="card card-split" style={{ marginBottom: "2rem" }}>
            <div className="card-split-body">
              <div
                className="flex items-center gap-sm"
                style={{ marginBottom: "0.75rem" }}
              >
                <ShoppingBag className="text-primary" size={22} />
                <h3 style={{ margin: 0 }}>Wholesale Supply</h3>
              </div>

              <p style={{ color: "#667085", marginBottom: "0.75rem" }}>
                For bulk buyers, distributors, processors, and hospitality
                chains. Get consistent quality and volume directly from our
                farms. We guarantee freshness and reliable delivery schedules.
              </p>

              <div className="quick-quote">
                <div className="kicker" style={{ marginBottom: "1rem" }}>
                  Quick Quote Request
                </div>

                <div
                  className="form-grid-2"
                  style={{ marginBottom: "0.75rem" }}
                >
                  <select className="field" defaultValue="">
                    <option value="" disabled>
                      Crop Interest
                    </option>
                    <option>Tomatoes</option>
                    <option>Peppers</option>
                    <option>Corn</option>
                  </select>
                  <input
                    className="field"
                    type="text"
                    placeholder="Est. Volume (Kg/Tons)"
                  />
                </div>

                <div className="form-grid-2" style={{ marginBottom: "1rem" }}>
                  <select className="field" defaultValue="One-time">
                    <option>One-time</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                  <input
                    className="field"
                    type="text"
                    placeholder="Location (City/State)"
                  />
                </div>

                <Link to="/contact" className="btn btn-primary btn-block">
                  Request Quote
                </Link>
              </div>
            </div>

            <div
              className="card-split-media"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=1335&auto=format&fit=crop",
              }}
              aria-label="Produce"
            />
          </div>

          {/* 3 Cards */}
          <div className="grid grid-3" style={{ gap: "1.5rem" }}>
            <div className="card">
              <div
                className="badge badge-neutral"
                style={{ display: "inline-flex", gap: 6, marginBottom: "1rem" }}
              >
                <Truck size={14} /> Distribution
              </div>

              <img
                src="
                https://images.unsplash.com/photo-1695222833131-54ee679ae8e5?q=80&w=2282&auto=format&fit=crop"
                alt="Distribution"
                style={{
                  width: "100%",
                  height: 170,
                  objectFit: "cover",
                  borderRadius: 12,
                  marginBottom: "1.25rem",
                }}
              />

              <h3>Become a Distribution Partner</h3>
              <p style={{ color: "#667085" }}>
                Join our logistics network. We are looking for reliable partners
                with cold chain capabilities to help move produce across
                Nigeria.
              </p>

              <Link to="/contact" className="btn btn-outline btn-block">
                Apply Now
              </Link>
            </div>

            <div className="card">
              <div
                className="badge badge-accent"
                style={{ display: "inline-flex", gap: 6, marginBottom: "1rem" }}
              >
                <Map size={14} /> Land Partner
              </div>

              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=900&auto=format&fit=crop"
                alt="Land Partner"
                style={{
                  width: "100%",
                  height: 170,
                  objectFit: "cover",
                  borderRadius: 12,
                  marginBottom: "1.25rem",
                }}
              />

              <h3>Host a TerraField Branch</h3>
              <p style={{ color: "#667085" }}>
                Turn idle land into profit. We provide the operations,
                expertise, and market access. You provide the land. We share the
                profits.
              </p>

              <div
                style={{ display: "grid", gap: "0.6rem", marginTop: "1rem" }}
              >
                <input
                  className="field"
                  type="text"
                  placeholder="Land Size (Hectares)"
                />
                <input
                  className="field"
                  type="text"
                  placeholder="Location (LGA/State)"
                />
                <Link to="/contact" className="btn btn-outline btn-block">
                  Start Discussion
                </Link>
              </div>
            </div>

            <div
              className="card card-dashed card-center"
              style={{ padding: "2.25rem" }}
            >
              <div
                className="badge badge-neutral"
                style={{
                  background: "#FEF3C7",
                  color: "#92400E",
                  marginBottom: "1.25rem",
                }}
              >
                In Development
              </div>
              <Factory
                size={48}
                style={{ color: "#D1D5DB", marginBottom: "1rem" }}
              />
              <h3>Processing &amp; Export</h3>
              <p style={{ color: "#667085" }}>
                We are actively developing capacity for food processing and
                international export. Strategic partners are invited to register
                early interest.
              </p>

              <a
                href="#"
                style={{
                  color: "var(--color-primary)",
                  fontWeight: 800,
                  fontSize: "0.9rem",
                }}
              >
                Register Interest{" "}
                <ArrowRight size={16} style={{ verticalAlign: "middle" }} />
              </a>
            </div>
          </div>
        </div>
      </Section>

      <section className="section" style={{ padding: "3.5rem 0" }}>
        <div className="container text-center">
          <div
            className="kicker"
            style={{ color: "#9CA3AF", marginBottom: "1.25rem" }}
          >
            Trusted by Growing Businesses
          </div>
          <div
            className="flex justify-center gap-lg"
            style={{ flexWrap: "wrap", opacity: 0.45, filter: "grayscale(1)" }}
          >
            <h3 style={{ color: "#9CA3AF", margin: 0 }}>CHEF&apos;S CHOICE</h3>
            <h3 style={{ color: "#9CA3AF", margin: 0 }}>SUPERMART</h3>
            <h3 style={{ color: "#9CA3AF", margin: 0 }}>GOLDGRAIN</h3>
            <h3 style={{ color: "#9CA3AF", margin: 0 }}>GRAND HOTELS</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partnerships;
