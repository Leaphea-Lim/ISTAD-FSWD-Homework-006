import renderProductCard from "../components/card";
import { fetchProducts } from "../utils/api";

export async function renderListPage() {
  console.log("renderListPage executed!"); // Add this
  const app = document.getElementById("app");
  app!.innerHTML = `
  <div class="m-12">
  
     <h1 class="text-3xl text-center text-indigo-500 font-bold mt-[100px]">
     <span class="text-green-500">Catagories / </span>
     Products Sell</h1>
   <div class="mt-12 bg-white rounded-md">
     <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" id="product-grid"></div>
   </div>
  </div>
    `;

  const grid = document.getElementById("product-grid");
  if (!grid) return; // Safety check

  try {
    const products = await fetchProducts();
    console.log("Fetched products:", products); // Verify data

    // if (!products.length) throw new Error("No products loaded");
    grid!.innerHTML = products.map(renderProductCard).join("");
  } catch (err) {
    grid!.innerHTML = `<p class="text-red-500">${err}</p>`;
  }
  //   const products = await fetchProducts();
//   const grid = document.getElementById("product-grid");
//   console.log("Grid element:", grid); // Check if exists

  //   grid!.innerHTML = products.map(renderProductCard).join("");
  //   console.log("First product:", products[0]);
}
