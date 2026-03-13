import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import "../styles/homeCF.css";

export default function HomeCF() {
  return (
    <section className="cf-Home">
      <div className="cf-BlobWrap">
        <div className="cf-Blob" />
      </div>

      <div className="cf-Intro">
        {/* <h1 className="cf-Name">Chien-Yu (Laura) Lin</h1> */}

        <div className="cf-Name">
          <TypeAnimation
            sequence={["Chien-Yu (Laura) Lin", 1200, "Chien-Yu (Laura) Lin", 1200]}
            wrapper="span"
            speed={45}
            repeat={Infinity}
            className="cf-Typing"
          />
          <span className="cf-Cursor">|</span>
        </div>

        {/* <div className="cf-TypingRow">
          <TypeAnimation
            sequence={["Backend Systems", 1200, "Distributed Systems", 1200, "Scalable APIs", 1200, "Cloud Infrastructure", 1200]}
            wrapper="span"
            speed={45}
            repeat={Infinity}
            className="cf-Typing"
          />
          <span className="cf-Cursor">|</span>
        </div> */}

        <p className="cf-Desc">
          M.S. Student in Engineering Science & Ocean Engineering (IT) @ NTU
        </p>

        <div className="cf-Social">
          <a aria-label="Mail" href="mailto:ttnrgjgui@gmail.com" target="_blank" rel="noreferrer"><CiMail /></a>
          <a aria-label="Linkedin" href="https://www.linkedin.com/in/-390b03229" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a aria-label="Github" href="https://github.com/chienfish" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>
      </div>
    </section>
  );
}