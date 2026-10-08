// Edit these entries to showcase your own projects. Use a YouTube video ID, not its full URL.
const projects = [
  {
    title: "The Art of Starting Over",
    niche: "Documentary",
    client: "Northbound Studio",
    youtubeId: "M7lc1UVf-VE",
    thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "A Week in the Wild",
    niche: "YouTube",
    client: "Field Notes",
    youtubeId: "M7lc1UVf-VE",
    thumbnail: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Building Better Habits",
    niche: "Short-form",
    client: "The Daily Practice",
    youtubeId: "M7lc1UVf-VE",
    thumbnail: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "The Long Game",
    niche: "Podcast",
    client: "Open Chapters",
    youtubeId: "M7lc1UVf-VE",
    thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Made by Hand",
    niche: "Brand film",
    client: "Forma Objects",
    youtubeId: "M7lc1UVf-VE",
    thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Finding the Flow",
    niche: "YouTube",
    client: "Studio Sunday",
    youtubeId: "M7lc1UVf-VE",
    thumbnail: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85"
  }
];

const projectGrid = document.querySelector("#project-grid");
const videoModal = document.querySelector("#video-modal");
const videoFrame = document.querySelector("#video-frame");
const modalTitle = document.querySelector("#modal-title");
const modalClose = document.querySelector(".modal-close");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");

function renderProjects() {
  projectGrid.innerHTML = projects.map((project, index) => `
    <article class="project-card reveal" tabindex="0" role="button" aria-label="Play ${escapeHtml(project.title)}">
      <div class="project-thumb">
        <img src="${escapeHtml(project.thumbnail)}" alt="${escapeHtml(project.title)} video thumbnail" loading="lazy">
        <span class="play-button" aria-hidden="true">▶</span>
      </div>
      <div class="project-meta">
        <div><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.client)}</p></div>
        <span class="project-niche">${escapeHtml(project.niche)}</span>
      </div>
    </article>
  `).join("");

  projectGrid.querySelectorAll(".project-card").forEach((card, index) => {
    const openProject = () => openVideo(projects[index]);
    card.addEventListener("click", openProject);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProject();
      }
    });
  });

  observeReveals();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function openVideo(project) {
  modalTitle.textContent = project.title;
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(project.youtubeId)}?autoplay=1&rel=0`;
  iframe.title = `${project.title} video`;
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allowFullscreen = true;
  videoFrame.replaceChildren(iframe);
  videoModal.showModal();
}

function closeVideo() {
  videoModal.close();
  videoFrame.replaceChildren();
}

modalClose.addEventListener("click", closeVideo);
videoModal.addEventListener("click", (event) => {
  if (event.target === videoModal) closeVideo();
});
videoModal.addEventListener("close", () => videoFrame.replaceChildren());

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  navLinks.classList.toggle("is-open", !isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
    navLinks.classList.remove("is-open");
  });
});

function observeReveals() {
  const elements = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach((element) => observer.observe(element));
}

document.querySelector("#year").textContent = new Date().getFullYear();
observeReveals();
renderProjects();
