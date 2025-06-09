import  renderProductCard from "../components/card";
import { renderProductSkeleton } from "../components/skeleton";
import { fetchProducts } from "../utils/api";

export async function renderListPage() {
  console.log("renderListPage executed!");
  const app = document.getElementById("app");
  if (!app) return;

  // Show skeleton loading immediately
  app.innerHTML = `
    <div class="m-12">
        <h1 class="text-3xl text-center text-indigo-500 font-bold mt-[100px]">
            <span class="text-green-500">Categories /</span>
            Products Sell
        </h1>
        <div class="mt-12 bg-white rounded-md">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" id="product-grid">
                ${renderProductSkeleton(8)}
            </div>
        </div>
    </div>
    `;

  try {
    const products = await fetchProducts();
    console.log("Fetched products:", products); // Verify data

    const grid = document.getElementById("product-grid");
    if (!grid) return; // Safety check

    // if (!products.length) throw new Error("No products loaded");
    if (!products.length) {
      grid.innerHTML = `
            <div class="col-span-4 text-center py-12">
                <p class="text-gray-500 text-lg">No products found</p>
                <button onclick="window.location.reload()" class="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
                    Refresh
                </button>
            </div>
            `;
      return;
    }

    grid!.innerHTML = products.map(renderProductCard).join("");
  } catch (err) {
    const grid = document.getElementById("product-grid");
    if (grid) {
      grid.innerHTML = `
      <div class="col-span-4 text-center py-12">
                <p class="text-red-500 text-lg">Error loading products: ${
                  err instanceof Error ? err.message : "Unknown error"
                }</p>
                <button onclick="window.location.reload()" class="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
                    Try Again
                </button>
            </div>
    `;
    }
  }
}
