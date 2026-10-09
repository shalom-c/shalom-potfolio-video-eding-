"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";

function ProjectCard({ project, onPlay }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return undefined;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onPlay();
    }
  }

  return (
    <article
      ref={cardRef}
      className={`project-card reveal${isVisible ? " is-visible" : ""}`}
      tabIndex={0}
      role="button"
      aria-label={`Play ${project.title}`}
      onClick={onPlay}
      onKeyDown={handleKeyDown}
    >
      <div className="project-thumb">
        <Image
          src={project.thumbnail}
          alt={`${project.title} video thumbnail`}
          fill
          sizes="(max-width: 600px) 45vw, 425px"
        />
        <span className="play-button" aria-hidden="true">▶</span>
      </div>
      <div className="project-meta">
        <div><h3>{project.title}</h3><p>{project.client}</p></div>
        <span className="project-niche">{project.niche}</span>
      </div>
    </article>
  );
}

function VideoModal({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();

    return () => {
      if (dialog.open) dialog.close();
    };
  }, [project]);

  return (
    <dialog
      ref={dialogRef}
      className="video-modal"
      aria-labelledby="modal-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onClose={onClose}
    >
      <div className="modal-panel">
        <div className="modal-heading">
          <div><p className="eyebrow">Selected project</p><h2 id="modal-title">{project?.title ?? "Project video"}</h2></div>
          <button className="modal-close" type="button" aria-label="Close video" onClick={onClose}>×</button>
        </div>
        <div className="video-frame">
          {project && (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(project.youtubeId)}?autoplay=1&rel=0`}
              title={`${project.title} video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </dialog>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="section shell" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected projects <span className="section-count">/ 01</span></p>
          <h2 id="work-title">Work that <span>moves.</span></h2>
        </div>
        <p className="section-aside">A few recent edits, each built around the story worth telling.</p>
      </div>
      <div className="project-grid" aria-live="polite">
        {projects.map((project) => (
          <ProjectCard
            key={project.youtubeId}
            project={project}
            onPlay={() => setSelectedProject(project)}
          />
        ))}
      </div>
      <VideoModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
