// src/components/renderBestSellers.ts

import { promotingProducts } from "../utils/promotingProducts";
import  renderProductCard from "./card";

export function renderPromoting() {
  
  console.log("Promoting data:", promotingProducts); // Add this debug line
  

  const container = document.getElementById("promoting");
  if (!container) {
    console.error("Promoting container not found!");
    return;
  }
  // const btn = document.getElementById("view-more-btn");
  // if (btn) {
  //   btn.innerHTML = `
  //     <span class="flex items-center justify-center">
  //       <i class="fas fa-spinner fa-spin mr-2"></i>
  //       Loading Products...
  //     </span>
  //   `;
  //   btn.classList.add("opacity-75", "cursor-not-allowed");
  // }

  // Render the promoting section
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
      ${promotingProducts.map(renderProductCard).join("")}
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
  //todo: Add click handler
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

  document.getElementById("view-more-btn")?.addEventListener("click", () => {
    window.location.hash = "#products";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  // todo: Modify the click handler:
  // document.getElementById('view-more-btn')?.addEventListener('click', () => {
  //   const btn = document.getElementById('view-more-btn');
  //   if (btn) {
  //     btn.innerHTML = `
  //       <span class="flex items-center justify-center">
  //         <i class="fas fa-spinner fa-spin mr-2"></i>
  //         Loading...
  //       </span>
  //     `;
  //     btn.disabled = true;
  //   }

  //   window.location.hash = '#products';
  // });
  // Navigate to product listing
  // window.location.hash = "#products";
  window.scrollTo({ top: 0, behavior: "smooth" });
}
