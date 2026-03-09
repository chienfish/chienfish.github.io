import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";
import MobileMenuDrawer from "./MobileMenuDrawer.jsx";
import "../styles/topBar.css";

export default function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="topbarInner">
        <nav><NavLink to="/" end className="topbarLeft">Laura Lin</NavLink></nav>

        <div style={{ display: "inline-flex", gap: 10, alignItems: "center" }}>
          <ThemeToggle />

          {/* 只有手機顯示 */}
          <button
            className="topbarMenuBtn"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            title="Menu"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      <MobileMenuDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  );
}