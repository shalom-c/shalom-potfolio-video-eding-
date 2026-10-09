import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero shell" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="availability-dot"></span> Independent video editor{" "}
          <span className="eyebrow-divider">·</span> Available for projects
        </p>
        <h1 id="hero-title">
          I cut videos that <span>keep people watching.</span>
        </h1>
        <p className="hero-intro">
          I’m Shalom Taki Sunday, a video editor specializing in YouTube,
          short-form, documentary, and podcast storytelling. I shape raw footage
          into engaging, story-first edits with thoughtful pacing and a clean
          finish for creators who want their videos to hold attention.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            View my work <span aria-hidden="true">↓</span>
          </a>
          <a
            className="button button-outline"
            href="mailto:takisunday3@gmail.com?subject=Video%20editing%20project%20inquiry&body=Hi%20Shalom%2C%0A%0AI%27d%20like%20to%20talk%20about%20a%20video%20editing%20project.%0A%0A"
          >
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="stats" aria-label="Turnaround">
          <div className="stat">
            <strong>48<span>h</span></strong>
            <span>turnaround</span>
          </div>
        </div>
      </div>
      <div className="hero-art" aria-label="Video editing workspace illustration">
        <div className="hero-image">
          <Image
            className="hero-image-photo"
            src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1000&q=85"
            alt=""
            fill
            priority
            sizes="(max-width: 600px) 90vw, 45vw"
          />
        </div>
        <div className="floating-note">
          <span className="note-icon" aria-hidden="true">▶</span>
          <span><strong>Story first.</strong><small>Every frame has a purpose.</small></span>
        </div>
        <span className="hero-index" aria-hidden="true">01 / 04</span>
      </div>
    </section>
  );
}
