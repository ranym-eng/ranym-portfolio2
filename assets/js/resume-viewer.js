(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const viewer = document.querySelector("[data-resume-viewer]");
    if (!viewer) return;

    const pages = Array.from(viewer.querySelectorAll("[data-resume-page]"));
    const current = viewer.querySelector("[data-resume-current]");
    let activeIndex = 0;

    const showPage = index => {
      activeIndex = (index + pages.length) % pages.length;
      pages.forEach((page, pageIndex) => page.classList.toggle("active", pageIndex === activeIndex));
      current.textContent = String(activeIndex + 1);
    };

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
  });
})();
