import { services } from "../data/projects";

export default function Services() {
  return (
    <section className="section services-section" id="services" aria-labelledby="services-title">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">What I do <span className="section-count">/ 02</span></p>
            <h2 id="services-title">More than <span>just cuts.</span></h2>
          </div>
          <p className="section-aside">Thoughtful post-production, from the first assembly to the final export.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-icon" aria-hidden="true">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-tag">{service.tags}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
