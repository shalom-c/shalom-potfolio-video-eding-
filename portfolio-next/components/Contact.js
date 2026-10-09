export default function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="shell contact-inner">
        <p className="eyebrow">
          <span className="availability-dot"></span> Have a good one in mind?{" "}
          <span className="section-count">/ 04</span>
        </p>
        <h2 id="contact-title">Let’s make<br /><span>it matter.</span></h2>
        <p className="contact-copy">
          Tell me what you’re working on. I’d love to help turn it into something people remember.
        </p>
        <div className="contact-actions">
          <a
            className="button button-primary"
            href="mailto:takisunday3@gmail.com?subject=Video%20editing%20project%20inquiry&body=Hi%20Shalom%2C%0A%0AI%27d%20like%20to%20talk%20about%20a%20video%20editing%20project.%0A%0A"
          >
            Email me <span aria-hidden="true">↗</span>
          </a>
        </div>
        <span className="contact-decoration" aria-hidden="true">LET’S<br />ROLL</span>
      </div>
    </section>
  );
}
