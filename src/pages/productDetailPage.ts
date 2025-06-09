// src/pages/productDetailPage.ts
interface Product {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    description: string;
    rating: number;
    images: string[];
    brand: string;
    category: string;
    discountPercentage?: number;
    stock: number;
}

export async function renderProductDetailPage(id: number) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const product: Product = await response.json();

    //todo: Calculate stars for rating
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    //todo: Calculate discounted price if available
    const originalPrice = product.price;
    const discountedPrice = product.discountPercentage 
        ? (originalPrice * (1 - product.discountPercentage / 100)).toFixed(2)
        : null;

    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
    <div  id="darkModeToggle " class= "bg-card pt-16 m-12">
        <div class="container mx-auto px-4 py-8">
            <div class="flex flex-wrap -mx-4">
                <!-- Product Images -->
                <div class="w-full md:w-1/2 px-4 mb-8">
                    <img
                        src="${product.thumbnail}"
                        alt="${product.title}"
                        class="w-full h-auto rounded-lg shadow-md mb-4"
                        id="mainImage"
                    />
                    <div class="flex gap-4 py-4 justify-center overflow-x-auto">
                        ${product.images.map((image, index) => `
                            <img
                                src="${image}"
                                alt="Thumbnail ${index + 1}"
                                class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition"
                                onclick="changeImage(this.src)"
                            />
                        `).join('')}
                    </div>
                </div>

                <!-- Product Details -->
                <div class="w-full md:w-1/2 px-4">
                    <h2 class="text-3xl font-bold mb-2">${product.title}</h2>
                    <!-- testing -->
                    <button 
                        onclick="window.location.hash='#products'"
                        class="mb-4 flex items-center text-indigo-600 hover:text-indigo-800">
                        <i class="fas fa-arrow-left mr-2"></i> Back to Products
                    </button>
                    <p class="text-gray-600 mb-4">${product.brand} | ${product.category}</p>
                    
                    <div class="mb-4">
                        ${discountedPrice ? `
                            <span class="text-2xl font-bold mr-2">$${discountedPrice}</span>
                            <span class="text-gray-500 line-through">$${originalPrice}</span>
                            <span class="ml-2 text-red-500">${product.discountPercentage}% OFF</span>
                        ` : `
                            <span class="text-2xl font-bold">$${originalPrice}</span>
                        `}
                    </div>

                    <!-- Rating -->
                    <div class="flex items-center mb-4">
                        <div class="flex text-yellow-500">
                            ${'★'.repeat(fullStars)}
                            ${halfStar ? '½' : ''}
                            ${'☆'.repeat(emptyStars)}
                        </div>
                        <span class="ml-2 text-gray-600">${product.rating.toFixed(1)} (${product.stock} reviews)</span>
                    </div>

                    <p class="text-gray-700 mb-6">${product.description}</p>

                    <!-- Stock Status -->
                    <div class="mb-6">
                        <span class="${product.stock > 0 ? 'text-green-600' : 'text-red-600'} font-medium">
                            ${product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                        </span>
                    </div>

                    <!-- Quantity -->
                    <div class="mb-6">
                        <label for="quantity" class="block text-sm font-medium text-gray-700 mb-1">
                            Quantity:
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            min="1"
                            max="${product.stock}"
                            value="1"
                            class="w-12 text-center rounded-md border-gray-300 shadow-sm focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex space-x-4 mb-6">
                        <button
                            class="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            <i class="fas fa-shopping-cart"></i>
                            Add to Cart
                        </button>

                        <button
                            class="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        >
                            <i class="fas fa-heart"></i>
                            Wishlist
                        </button>
                    </div>

                    <!-- Key Features -->
                    <div>
                        <h3 class="text-lg font-semibold mb-2">Product Details:</h3>
                        <ul class="list-disc list-inside text-gray-700">
                            <li>Brand: ${product.brand}</li>
                            <li>Category: ${product.category}</li>
                            <li>Availability: ${product.stock} units in stock</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        function changeImage(src) {
            document.getElementById("mainImage").src = src;
        }
    </script>
    `;
}