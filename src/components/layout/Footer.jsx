import React from "react";
import { Link } from "react-router-dom";
import {
  Leaf,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-4" style={{ gap: "2rem" }}>
          {/* Brand Column */}
          <div>
            <div className="footer-brand">
              <div
                style={{
                  background: "rgba(255,255,255,0.1)",
                  padding: "5px",
                  borderRadius: "5px",
                  display: "flex",
                }}
              >
                <Leaf size={20} />
              </div>
              <span>TerraField Farms</span>
            </div>
            <p style={{ color: "#ccc", fontSize: "0.9rem", lineHeight: "1.6" }}>
              Rooted in Nature, Growing the Future. Building a scalable,
              multi-branch agribusiness across Nigeria and beyond.
            </p>
            <div className="flex gap-sm" style={{ marginTop: "1rem" }}>
              <Instagram size={20} color="#ccc" />
              <Linkedin size={20} color="#ccc" />
              <Facebook size={20} color="#ccc" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/what-we-grow">Our Produce</Link>
              </li>
              <li>
                <Link to="/locations">Farm Locations</Link>
              </li>
              <li>
                <Link to="/farm-plan">Farm Roadmap</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h4>For Partners</h4>
            <ul>
              <li>
                <Link to="/partnerships">Wholesale Supply</Link>
              </li>
              <li>
                <Link to="/partnerships">Distribution</Link>
              </li>
              <li>
                <Link to="/projections">Investor Relations</Link>
              </li>
              {/* <li><Link to="/updates">Farm Updates</Link></li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4>Contact</h4>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
              }}
            >
              <li className="flex items-center gap-sm">
                <MapPin size={18} className="text-accent" />
                <span style={{ color: "#ccc", fontSize: "0.9rem" }}>
                  Akure, Ondo State, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-sm">
                <Phone size={18} className="text-accent" />
                <span style={{ color: "#ccc", fontSize: "0.9rem" }}>
                  +234 800 TERRA FIELD
                </span>
              </li>
              <li className="flex items-center gap-sm">
                <Mail size={18} className="text-accent" />
                <span style={{ color: "#ccc", fontSize: "0.9rem" }}>
                  hello@terrafieldfarms.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} TerraField Farms. All rights reserved.
          </p>
          <div className="flex gap-md">
            <a href="#" style={{ display: "inline", margin: 0 }}>
              Privacy Policy
            </a>
            <a href="#" style={{ display: "inline", margin: 0 }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
