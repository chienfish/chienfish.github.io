import { NavLink } from "react-router-dom";
import { FiHome, FiUser, FiBriefcase, FiGrid, FiFileText, FiMail } from "react-icons/fi";
import "../styles/sidebar.css";

export default function Sidebar() {
  const nav = [
    { to: "/", label: "Home", icon: <FiHome /> },
    { to: "/about", label: "About", icon: <FiUser /> },
    { to: "/experience", label: "Experience", icon: <FiBriefcase /> },
    { to: "/portfolio", label: "Portfolio", icon: <FiGrid /> },
  ];

  return (
    <aside className="cf-Sidebar">
      <div className="cf-SideInner">
      <div className="cf-Logo">TOC</div>

        <nav className="cf-Nav">
          {nav.map((n) => (
            <NavLink
              key={n.label}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) => `cf-NavItem ${isActive ? "active" : ""}`}
            >
              <span className="cf-Icon">{n.icon}</span>
              <span>{n.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="cf-Foot">
        <div>© {new Date().getFullYear()} Chien-Yu (Laura) Lin.</div>
        <div>All rights reserved.</div>
      </div>
    </aside>
  );
}