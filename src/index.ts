// src/index.ts
import  renderFooter  from "./components/footer";
import  renderNavbar  from "./components/navbar";
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
  if (!window.location.hash || window.location.hash === '#') {
    window.location.hash = '#home';
  }

  // Handle initial route
  router();
}

console.log("🔥 1. App started"); // Should appear immediately

document.addEventListener('DOMContentLoaded', () => {
  console.log("🚀 2. DOM fully loaded");
  
  // Manually call renderPromoting after 1 second
  setTimeout(async () => {
    console.log("⏰ 3. Attempting to load promoting");
    const { renderPromoting } = await import('./components/renderPromoting');
    renderPromoting();
  }, 1000);
});

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  initializeLayout();
  initializeApp();
});

window.addEventListener('hashchange', router);

//main element script
document.addEventListener('DOMContentLoaded', function() {
            const buttons = document.querySelectorAll('button');
            buttons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px)';
                });
                button.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        });
// footer element script 
// document.getElementById("year")!.textContent = new Date().getFullYear
document.addEventListener("mousemove",(e) => {
    const orb = document.querySelector(".orb") as HTMLElement
    orb.style.left = `${e.clientX}px`
    orb.style.top = `${e.clientY}px`
})
