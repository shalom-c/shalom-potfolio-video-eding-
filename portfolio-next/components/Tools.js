import { tools } from "../data/projects";

export default function Tools() {
  return (
    <section className="section shell tools-section" id="tools" aria-labelledby="tools-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">My toolkit <span className="section-count">/ 03</span></p>
          <h2 id="tools-title">Made with <span>these.</span></h2>
        </div>
        <p className="section-aside">The right tool for the right story. Always learning, always refining.</p>
      </div>
      <div className="tool-list" aria-label="Editing tools">
        {tools.map((tool) => (
          <span className="tool-chip" key={tool.name}>
            <span className="tool-mark">{tool.mark}</span>{tool.name}
          </span>
        ))}
      </div>
    </section>
  );
}
