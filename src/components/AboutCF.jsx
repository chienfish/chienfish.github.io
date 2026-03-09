import Panel from "./Panel.jsx";
import '../styles/aboutCF.css'

export default function AboutCF() {
  return (
    <Panel title="About">
      <div className="about2">
        {/* top label + title */}
        <div className="about2-head">
          <div className="about2-pill">ABOUT</div>
          <h1 className="about2-title">About Me</h1>
        </div>

        {/* photo */}
        <div className="about2-photo">
          <img src="/about.jpg" alt="About portrait" />
        </div>

        {/* text */}
        <div className="about2-body">
          <p>
            I build backend systems focused on performance, scalability, and
            reliability — from API design to cloud deployment and operations.
          </p>
          <p>
            I enjoy building distributed systems and high-concurrency services,
            shipping production-ready features with Docker, CI/CD, and AWS.
          </p>
        </div>

        <div className="about2-info">
          <ul>
            <li>
              <span className="k">Languages:</span>
              <span className="v">Python · JavaScript · Java · C++</span>
            </li>
            <li>
              <span className="k">Backend:</span>
              <span className="v">FastAPI · Django · Node.js · Laravel</span>
            </li>
          </ul>
          <ul>
            <li>
              <span className="k">Databases:</span>
              <span className="v">PostgreSQL · MySQL · MongoDB</span>
            </li>
            <li>
              <span className="k">DevOps:</span>
              <span className="v">Docker · GitHub Actions · AWS · Linux</span>
            </li>
          </ul>
        </div>

        {/* check */}
        <div className="about2-actions">
          <a className="btn-check" href="/Resume.pdf" target="_blank" rel="noreferrer">
            View Resume
            </a>
        </div>
      </div>
    </Panel>
  );
}