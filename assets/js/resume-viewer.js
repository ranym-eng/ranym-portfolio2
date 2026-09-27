(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const viewer = document.querySelector("[data-resume-viewer]");
    if (!viewer) return;

    const pages = Array.from(viewer.querySelectorAll("[data-resume-page]"));
    const stage = viewer.querySelector(".resume-viewer-stage");
    const current = viewer.querySelector("[data-resume-current]");
    const total = viewer.querySelector("[data-resume-total]");
    const fullscreenButton = viewer.querySelector("[data-resume-fullscreen]");
    const fullscreenIcon = fullscreenButton?.querySelector("i");
    let activeIndex = 0;

    const showPage = index => {
      activeIndex = (index + pages.length) % pages.length;
      pages.forEach((page, pageIndex) => page.classList.toggle("active", pageIndex === activeIndex));
      current.textContent = String(activeIndex + 1);
      stage.scrollTop = 0;
    };

    total.textContent = String(pages.length);

    viewer.querySelectorAll("[data-resume-previous]").forEach(button => {
      button.addEventListener("click", () => showPage(activeIndex - 1));
    });
    viewer.querySelectorAll("[data-resume-next]").forEach(button => {
      button.addEventListener("click", () => showPage(activeIndex + 1));
    });
    viewer.addEventListener("keydown", event => {
      if (event.key === "ArrowLeft") showPage(activeIndex - 1);
      if (event.key === "ArrowRight") showPage(activeIndex + 1);
    });

    fullscreenButton?.addEventListener("click", async () => {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else if (viewer.requestFullscreen) {
        await viewer.requestFullscreen();
      }
    });

    document.addEventListener("fullscreenchange", () => {
      const isFullscreen = document.fullscreenElement === viewer;
      fullscreenIcon?.classList.toggle("bi-arrows-fullscreen", !isFullscreen);
      fullscreenIcon?.classList.toggle("bi-fullscreen-exit", isFullscreen);
      fullscreenButton?.setAttribute("aria-label", isFullscreen ? "Exit fullscreen" : "Open fullscreen");
      if (fullscreenButton) fullscreenButton.title = isFullscreen ? "Exit fullscreen" : "Fullscreen";
    });
  });
})();
