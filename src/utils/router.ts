import { renderDetailPage } from "../pages/detail";
import { renderListPage } from "../pages/list";
import { renderHomepage } from "../pages/home";
import { renderProductDetailPage } from "../pages/productDetailPage";
import { renderAboutPage } from "../pages/about";

let isRendering = false;

export async function router() {
  if (isRendering) return;
  isRendering = true;

  try {
    const app = document.getElementById("app");
    if (!app) return;

    const hash = window.location.hash;
    // app.innerHTML = ""; // Clear previous content

    if (
      !hash ||
      !["#home", "#products", "#about", "#products/"].some((validHash) =>
        hash.startsWith(validHash)
      )
    ) {
      window.location.hash = "#home";
      return;
    }

    // Home Route
    if (hash === "#home" || hash === "" || hash === "#") {
      //todo: Load homepage structure
      app.innerHTML = renderHomepage();
      return;

      //todo: Dynamically load best sellers after main content renders
      // const bestSellersContainer  = document.getElementById("promoting-grid");
      // if (bestSellersContainer ) {
      //   const { renderPromoting } = await import(
      //     "../components/renderPromoting"
      //   );
      //   renderPromoting();
      // }

      //todo Load promoting section if needed
      // const promotingContainer = document.getElementById("promoting-container");
      // if (promotingContainer) {
      //   const { renderPromoting } = await import(
      //     "../components/renderPromoting"
      //   );
      //   renderPromoting();
      // }
      // return;
    }

    //todo: Products List Route
    if (hash === "#products") {
      try {
        await renderListPage();
      } catch (err) {
        app.innerHTML = `<p class="text-red-500">Error loading products: ${err.message}</p>`;
      }
      return;
    }

    //todo: Product Detail Route
    if (hash.startsWith("#products/")) {
      const id = parseInt(hash.split("/")[1]);
      if (!isNaN(id)) {
        // await renderDetailPage(id);
        await renderProductDetailPage(id);
      } else {
        app.innerHTML = `<p class="text-red-500">Invalid product ID</p>`;
      }
      return;
    }

    //todo: About Route
    if (hash === "#about") {
      // const { renderAboutPage } = await import("../pages/about");
      app.innerHTML = renderAboutPage();
      return;
    }

    // 404 Route
    app.innerHTML = `<p class="text-red-500">Page not found</p>`;
  } catch (error) {
    console.error("Router error:", error);
    const app = document.getElementById("app");
    if (app) {
      app.innerHTML = `
        <div class="error-alert">
          <i class="fas fa-exclamation-triangle text-yellow-500"></i>
          <p>${error.message}</p>
          <button onclick="window.location.hash='home'" class="mt-4 px-4 py-2 bg-indigo-500 text-white rounded">
            Return Home
          </button>
        </div>
      `;
    }
  } finally {
    isRendering = false;
  }
}

// Initialize
if (!window.location.hash) {
  window.location.hash = "#home";
} else {
  window.addEventListener("load", router);
}
window.addEventListener("hashchange", router);
