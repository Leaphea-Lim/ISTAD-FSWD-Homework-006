interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description?: string;
  rating?: number;
}

function renderProductCard(product: any): string {
  const stars =
    "★".repeat(Math.floor(product.rating || 4)) +
    "☆".repeat(5 - Math.floor(product.rating || 4));
  return `
        <div class="max-w-6xl m-6">
    <div class="bg-white rounded-lg shadow p-4 relative flex flex-col h-full">
        <img
            src="${product.thumbnail}"
            alt="${product.title}"
            class="w-full h-40 object-contain mb-4"
        />
        <div class="absolute top-4 right-4 flex flex-col space-y-2">
            <button class="text-gray-500 hover:text-blue-500">
                <i class="fas fa-heart"></i>
            </button>
            <button class="text-gray-500 hover:text-blue-500">
                <i class="fas fa-exchange-alt"></i>
            </button>
            <button class="text-gray-500 hover:text-blue-500">
                <i class="fas fa-search"></i>
            </button>
        </div>
        <h2 class="font-bold text-lg mb-2">${product.title}</h2>
        <div class="flex items-center mb-2">
            <span class="text-lg font-semibold">$${product.price}</span>
            <div class="text-yellow-400 ml-2">${stars}</div>
        </div>
        <!-- Spacer pushes buttons to bottom -->
        <div class="mt-auto flex space-x-4 pt-4">
            <button class="px-4 py-2 border border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-50 transition-colors duration-300">
                Detail
            </button>
            <button class="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-300">
                Buy Now
            </button>
        </div>
    </div>
</div>

    `;
}
export default renderProductCard;
