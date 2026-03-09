import { NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi";
import "../styles/mobileMenuDrawer.css";

export default function MobileMenuDrawer({ open, onClose }) {
  return (
    <div className={`mm-backdrop ${open ? "open" : ""}`} onMouseDown={onClose}>
      <div className="mm-drawer" onMouseDown={(e) => e.stopPropagation()}>
        <div className="mm-head">
          <div className="mm-title">MENU</div>
          <button className="mm-close" onClick={onClose} aria-label="Close menu">
            <FiX />
          </button>
        </div>

        <nav className="mm-nav">
          <NavLink to="/" end onClick={onClose} className="mm-item">Home</NavLink>
          <NavLink to="/about" onClick={onClose} className="mm-item">About</NavLink>
          <NavLink to="/experience" onClick={onClose} className="mm-item">Experience</NavLink>
          <NavLink to="/portfolio" onClick={onClose} className="mm-item">Portfolio</NavLink>
        </nav>
      </div>
    </div>
  );
}