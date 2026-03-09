import { AnimatePresence, motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="project-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.div
            className="project-modal"
            initial={{ y: 16, opacity: 0, scale: 0.985 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.2 }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="project-modal-top">
              <div className="project-modal-head">
                {project.category && (
                  <div className="project-modal-category">{project.category}</div>
                )}
                <h2 className="project-modal-title">{project.title}</h2>
                <p className="project-modal-desc">{project.desc}</p>
              </div>

              <button className="project-modal-close" onClick={onClose} type="button">
                Close
              </button>
            </div>

            {project.images?.length ? (
              <div className="project-gallery">
                {project.images.map((img) => (
                  <img key={img} src={img} alt={project.title} />
                ))}
              </div>
            ) : (
              project.image && (
                <div className="project-modal-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )
            )}

            {!!project.highlights?.length && (
              <div className="project-modal-section">
                <h3>Highlights</h3>
                <ul className="project-modal-list">
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            )}

            {!!project.tags?.length && (
              <div className="project-modal-section">
                <h3>Tech Stack</h3>
                <div className="project-modal-tags">
                  {project.tags.map((t) => (
                    <span key={t} className="portfolio-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="project-modal-actions">
              {project.links?.github && (
                <a href={project.links.github} target="_blank" rel="noreferrer">
                  GitHub / Link
                </a>
              )}
              {project.links?.demo && (
                <a href={project.links.demo} target="_blank" rel="noreferrer">
                  Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}