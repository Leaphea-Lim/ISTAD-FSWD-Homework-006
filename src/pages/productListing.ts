// src/pages/product-listing.ts
import { fetchProducts } from "../utils/api";
import { renderProductCard } from "../components/card";

export async function renderProductListingPage() {
  const app = document.getElementById('app');
  if (!app) return;

  // Set up the page structure
  app.innerHTML = `
    <div class="page-transition">
    <header class="bg-white shadow-sm py-4">
      <div class="container mx-auto px-4">
        <button id="back-button" class="flex items-center text-gray-600 hover:text-gray-900">
          <i class="fas fa-arrow-left mr-2"></i> Back
        </button>
      </div>
    </header>
    
    <main class="container mx-auto px-4 py-8">
      <!-- Your existing product grid -->
    </main>
  </div>
  `;

  // Load products
  const products = await fetchProducts();
  const grid = document.getElementById('product-grid');
  if (grid) {
    grid.innerHTML = products.map(renderProductCard).join('');
  }

  // Add back button handler
  document.getElementById('back-to-home')?.addEventListener('click', () => {
    window.location.hash = '#home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}