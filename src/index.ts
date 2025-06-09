// src/index.ts
import renderFooter from "./components/footer";
import renderNavbar from "./components/navbar";
import { router } from "./utils/router";

// Initialize static layout elements
function initializeLayout() {
  const navbar = document.getElementById("navbar");
  const footer = document.getElementById("footer");

  if (navbar) navbar.innerHTML = renderNavbar();
  if (footer) footer.innerHTML = renderFooter();
}

// Set up routing and initial page load
function initializeApp() {
  // Set default route if none exists
  if (!window.location.hash || window.location.hash === "#") {
    window.location.hash = "#home";
  }

  // Handle initial route
  router();
}

console.log("🔥 1. App started"); // Should appear immediately

document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 2. DOM fully loaded");

  // Manually call renderPromoting after 1 second
  setTimeout(async () => {
    console.log("⏰ 3. Attempting to load promoting");
    const { renderPromoting } = await import("./components/renderPromoting");
    renderPromoting();
  }, 1000);
});

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  initializeLayout();
  initializeApp();
});

window.addEventListener("hashchange", router);

//main element script
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });
    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
});
// footer element script
// document.getElementById("year")!.textContent = new Date().getFullYear
document.addEventListener("mousemove", (e) => {
  const orb = document.querySelector(".orb") as HTMLElement;
  orb.style.left = `${e.clientX}px`;
  orb.style.top = `${e.clientY}px`;
});
//navber
document.getElementById("navbar")!.innerHTML = renderNavbar();
document.getElementById("footer")!.innerHTML = renderFooter();
document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById(
    "darkModeToggle"
  ) as HTMLElement | null;

  // Initialize isDarkMode by checking actual class presence
  let isDarkMode = document.documentElement.classList.contains("dark");

  function toggleDarkMode(): void {
    isDarkMode = !isDarkMode;
    document.documentElement.classList.toggle("dark");
    console.log("Dark mode toggled:", isDarkMode);
    console.log("Current classList:", document.documentElement.classList);
    updateDarkModeIcon();
  }

  function updateDarkModeIcon(): void {
    if (!darkModeToggle) return;

    darkModeToggle.innerHTML = isDarkMode
      ? `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>`;
  }

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
    isDarkMode = true;
    updateDarkModeIcon();
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", toggleDarkMode);
    updateDarkModeIcon();
  }
});
