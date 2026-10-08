const projects = [
  {
    title: "EU SECRETAMENTE ME TORNEI UM SUPER-VILÃO",
    niche: "Gaming / Minecraft YouTube",
    client: "oPDR_",
    youtubeId: "PWgggRfq_fw",
    thumbnail: "https://img.youtube.com/vi/PWgggRfq_fw/maxresdefault.jpg"
  },
  {
    title: "COMO EU CACEI O MAIOR TRAIDOR DO MINECRAFT",
    niche: "Gaming / Minecraft YouTube",
    client: "oPDR_",
    youtubeId: "NHk7lSnSyu8",
    thumbnail: "https://img.youtube.com/vi/NHk7lSnSyu8/maxresdefault.jpg"
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
