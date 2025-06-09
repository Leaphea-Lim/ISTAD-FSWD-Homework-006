import { fetchBestSellers } from "../utils/api";
// import { promotingProducts } from "../utils/promotingProducts";
import renderProductCard from "./card";
import { renderProductSkeleton } from "./skeleton";

let cachedBestSellers: any[] | null = null;

export async function renderPromoting() {
  // console.log("Promoting data:", promotingProducts);

  const container = document.getElementById("promoting");

  if (!container) {
    console.error("Promoting container not found!");
    return;
  }

  //todo Show skeleton loading immediately
  container.innerHTML = `
  <div class="py-16 px-4 bg-gray-50 m-5">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">
          Best Seller <span class="text-green-500">Products</span>
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Our most popular items loved by customers
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        ${renderProductSkeleton(4)}
      </div>
      <div class="text-center pt-12">
        <button id="view-more-btn" class="
          px-8 py-3 bg-green-600 text-white 
          rounded-full font-medium text-lg
          hover:bg-green-700 transition-colors
          focus:outline-none focus:ring-2 focus:ring-green-500
        ">
          View All Products
        </button>
      </div>
    </div>
  </div>
  `;
  // Set up the click handler immediately (won't change)
  setupViewMoreButton();
  try {
    // Use cached data if available, otherwise fetch fresh
    const bestSellers = cachedBestSellers || (await fetchBestSellers(4));
    cachedBestSellers = bestSellers; // Cache the results

    //todo Render the promoting section
    container.innerHTML = `
  <div class="py-16 px-4 bg-gray-50 m-5">
    <div class="container mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-gray-800 mb-4">
        Best Seller <span class="text-green-500">Products</span>
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Our most popular items loved by customers
      </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      ${bestSellers.map(renderProductCard).join("")}
    </div>
    <div class="text-center pt-12">
      <button id="view-more-btn" class="
        px-8 py-3 bg-green-600 text-white 
        rounded-full font-medium text-lg
        hover:bg-green-700 transition-colors
        focus:outline-none focus:ring-2 focus:ring-green-500
      ">
        View All Products
      </button>
    </div>
    </div>
    </div>
  `;
    //  Reattach the click handler
    setupViewMoreButton();
  } catch (error) {
    console.error("Error loading best sellers:", error);
    //
    container.innerHTML = `
    <div class="py-16 px-4 bg-gray-50 m-5">
      <div class="container mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            Best Seller <span class="text-green-500">Products</span>
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Our most popular items loved by customers
          </p>
        </div>
        <div class="text-center py-12 text-red-500">
          Failed to load best sellers. 
          <button onclick="window.location.reload()" class="text-green-600 underline">
            Try again
          </button>
        </div>
      </div>
    </div>
    `;
  }

  //todo: Add click handler
  function setupViewMoreButton() {
    document.getElementById("view-more-btn")?.addEventListener("click", () => {
      // window.location.hash = "#products";
      const btn = document.getElementById("view-more-btn");
      if (btn) {
        btn.innerHTML = `
        <span class="flex items-center justify-center">
          <i class="fas fa-spinner fa-spin mr-2"></i>
          Loading...
        </span>
      `;
        btn.classList.add("opacity-75", "cursor-not-allowed");
      }
      // Navigate after a small delay to show loading state
      setTimeout(() => {
        window.location.hash = "#products";
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300);
    });

    // todo: In renderBestSellers.ts, modify the click handler:

    // document.getElementById("view-more-btn")?.addEventListener("click", () => {
    //   window.location.hash = "#products";
    //   window.scrollTo({ top: 0, behavior: "smooth" });
    // });

    // window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
