import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sprout } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'What We Grow', path: '/what-we-grow' },
    { name: 'Locations', path: '/locations' },
    { name: 'Partnerships', path: '/partnerships' },
    { name: 'Farm Plan', path: '/farm-plan' },
    { name: 'Projections', path: '/projections' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container flex justify-between items-center" style={{ height: '100%' }}>
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <img src="/logo.png" alt="TerraField Farms" style={{height: '45px'}} />
          <span className="font-heading" style={{fontSize: '1.25rem', fontWeight: '600', color: 'var(--color-text-heading)'}}>TerraField Farms</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="navbar-nav">
          {navLinks.filter(l => l.name !== 'Contact').map((link) => (
             <NavLink 
                key={link.name} 
                to={link.path} 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
             >
                {link.name}
             </NavLink>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          <Link to="/contact" className="btn btn-primary" style={{padding: '0.6rem 1.5rem'}}>
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
           {navLinks.map((link) => (
             <NavLink 
                key={link.name} 
                to={link.path} 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
             >
                {link.name}
             </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
