// Smooth scroll for internal links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId.length > 1) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // Year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Theme handling (auto / light / dark)
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "light" || storedTheme === "dark") {
    root.setAttribute("data-theme", storedTheme);
  } else {
    root.setAttribute("data-theme", "auto");
  }

  function cycleTheme() {
    const current = root.getAttribute("data-theme");
    let next;
    if (current === "auto") next = "dark";
    else if (current === "dark") next = "light";
    else next = "auto";

    root.setAttribute("data-theme", next);
    if (next === "auto") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", next);
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", cycleTheme);
  }
});
