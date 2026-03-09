import { useState } from "react";
import Panel from "../components/Panel.jsx";
import PortfolioGrid from "../components/PortfolioGrid.jsx";
import ProjectModal from "../components/ProjectModal.jsx";
import { projects } from "../data/projects.js";
import '../styles/portfolioCF.css'

export default function Portfolio() {
  const [active, setActive] = useState(null);

  return (
    <Panel title="Portfolio">
      <div className="portfolio-page">
        <div className="portfolio-head">
          <div className="portfolio-pill">PORTFOLIO</div>
          <h1 className="portfolio-title">Selected Projects</h1>
        </div>

        <PortfolioGrid projects={projects} onOpen={setActive} />
        <ProjectModal project={active} onClose={() => setActive(null)} />
      </div>
    </Panel>
  );
}