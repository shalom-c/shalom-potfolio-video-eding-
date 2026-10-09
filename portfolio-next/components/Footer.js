"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <a className="brand" href="#top" aria-label="Shalom Taki Sunday, back to top">
          STS<span>.</span>
        </a>
        <p>Independent editor. Good stories, well told.</p>
        <a className="footer-top" href="#top">Back to top <span aria-hidden="true">↑</span></a>
        <small>© {year} Shalom Taki Sunday. Made with intention.</small>
      </div>
    </footer>
  );
}
