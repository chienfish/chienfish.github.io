export default function PortfolioGrid({ projects, onOpen }) {
  return (
    <div className="portfolio-grid">
      {projects.map((p) => (
        <button
          key={p.id}
          className="portfolio-card"
          onClick={() => onOpen(p)}
          type="button"
        >
          <div className="portfolio-thumb">
            {p.image ? (
              <img src={p.image} alt={p.title} />
            ) : (
              <div className="portfolio-thumb-fallback">Project</div>
            )}
          </div>

          <div className="portfolio-card-body">
            {p.category && <div className="portfolio-category">{p.category}</div>}

            <h3 className="portfolio-card-title">{p.title}</h3>

            <p className="portfolio-card-desc">{p.desc}</p>

            {!!p.tags?.length && (
              <div className="portfolio-tags">
                {p.tags.map((t) => (
                  <span key={t} className="portfolio-tag">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}