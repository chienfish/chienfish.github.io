import Panel from "./Panel.jsx";
import { experiences } from "../data/experiences.js";
import '../styles/experiencesCF.css'

export default function ExperienceCF() {
  return (
    <Panel title="Experience">
      <div className="exp-page">
        <div className="exp-head">
          <div className="exp-pill">EXPERIENCE</div>
          <h1 className="exp-title">Work Experience</h1>
        </div>

        <div className="exp-timeline">
          {experiences.map((item, idx) => (
            <article className="exp-item" key={`${item.company}-${idx}`}>
              <div className="exp-dot" />

              <div className="exp-card">
                <div className="exp-top">
                  <div className="exp-main">
                    <div className="exp-logo-wrap">
                      <img
                        className="exp-logo"
                        src={item.logo}
                        alt={`${item.company} logo`}
                      />
                    </div>

                    <div className="exp-text">
                      <h3 className="exp-role">{item.role}</h3>

                      <div className="exp-company-row">
                        <span className="exp-company">{item.company}</span>
                        {item.note && (
                          <span className="exp-note">{item.note}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="exp-period">{item.period}</div>
                </div>

                <ul className="exp-bullets">
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>

                <div className="exp-skills">
                  <span>Skills:</span> {item.skills}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Panel>
  );
}