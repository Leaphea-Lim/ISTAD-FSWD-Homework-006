// import girlImage from '../assets/girl.png'
export function renderHomepage() {
  return `
    <section class="pt-24">
        <!-- Header Section -->
        <section class="bg-blue-100  rounded-md px-6 m-6">
    <div class="mx-auto px-4 py-12">
        <!-- Main Content -->
        <div class="flex flex-col lg:flex-row items-center gap-8">
            <!-- Left Column - Text Content -->
            <div class="flex-1 min-w-0">
                <div class="">
                    <h2 class="text-4xl lg:text-5xl font-bold text-green-700 leading-tight">
                        Comes Grab The
                        <span class="text-brand-green">
                            Cart
                            <div class="absolute -bottmin-h-screenom-2 left-0 w-full h-3 bg-brand-green bg-opacity-20 rounded-full"></div>
                        </span>
                    </h2>

                    <p class="text-xl text-gray-600 leading-relaxed max-w-lg">
                        A market is a self-service store providing a diverse range of
                        groceries, drinks, and household essentials, conveniently
                        arranged in sections.
                    </p>
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row gap-4">
                    <button class="text-white px-8 py-4 bg-green-700 rounded-full font-semibold text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-xl">
                        25% Off Festival
                    </button>
                    <button class="text-white px-8 py-4 bg-green-700 rounded-full font-semibold text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-xl">
                        Discover Shop
                    </button>
                </div>
            </div>

            <!-- Right Column - Hero Image -->
            <div class="flex-1 relative">
                <div class="relative z-10 transform hover:scale-105 transition-transform duration-500">
                    <img src="./assets/girl-holding.png" alt="Woman with fresh groceries" class="w-full max-w-[500px] h-auto mx-auto" />
                </div>
            </div>
        </div>
    </div>
</section>

        <!-- section -->
        <section>
            <div class="py-16 px-4 m-5">
                <div class=" mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <!-- Free Shipping -->
                        <div class="bg-white rounded-3xl shadow-lg p-6 flex items-center space-x-4 hover:transform hover:scale-105 transition-all duration-300">
                            <div class="flex-shrink-0">
                                <div class="w-25 h-25 bg-green-100 rounded-full flex items-center justify-center" >
                                <i class="fa-solid fa-truck-fast" style="color: green"></i>
                            </div>
                        </div>

                        <div class="flex-grow text-left">
                            <h3 class="text-lg font-bold text-gray-800 mb-1">
                            Free shipping
                            </h3>
                            <p class="text-sm text-gray-600">On all orders over $50.00</p>
                        </div>
                    </div>

                    <!-- Return for Free -->
                    <div
                        class="bg-white rounded-3xl shadow-lg p-6 flex items-center space-x-4 hover:transform hover:scale-105 transition-all duration-300"
                        >
                        <div class="flex-shrink-0">
                            <div
                            class="w-25 h-25 bg-green-100 rounded-full flex items-center justify-center"
                            >
                                <i
                                    class="fa-solid fa-money-bill-transfer"
                                    style="color: green"
                                ></i>
                            </div>
                        </div>
                        <div class="flex-grow text-left">
                            <h3 class="text-lg font-bold text-gray-800 mb-1">
                                Return for free
                            </h3>
                            <p class="text-sm text-gray-600">Returns are free 3 days</p>
                        </div>
                        </div>

                        <!-- Secure Payment -->
                        <div
                        class="bg-white rounded-3xl shadow-lg p-6 flex items-center space-x-4 hover:transform hover:scale-105 transition-all duration-300"
                        >
                        <div class="flex-shrink-0">
                            <div
                            class="w-25 h-25 bg-green-100 rounded-full flex items-center justify-center"
                            >
                            <i class="fa-solid fa-building-lock" style="color: green"></i>
                            </div>
                        </div>
                        <div class="flex-grow text-left">
                            <h3 class="text-lg font-bold text-gray-800 mb-1">
                            Secure Payment
                            </h3>
                            <p class="text-sm text-gray-600">Your payments 100% safe</p>
                        </div>
                        </div>

                        <!-- 24/7 Support -->
                        <div
                        class="bg-white rounded-3xl shadow-lg p-6 flex items-center space-x-4 hover:transform hover:scale-105 transition-all duration-300"
                        >
                        <div class="flex-shrink-0">
                            <div
                            class="w-25 h-25 bg-green-100 rounded-full flex items-center justify-center"
                            >
                            <i class="fa-solid fa-business-time" style="color: green"></i>
                            </div>
                        </div>
                        <div class="flex-grow text-left">
                            <h3 class="text-lg font-bold text-gray-800 mb-1">
                            24/7 Support
                            </h3>
                            <p class="text-sm text-gray-600">Contact us anytime want</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <!-- Features Section -->
        <section>
            <div class="py-16 px-4 bg-gray-50 m-5">
                <div class=" mx-auto">
                    <!-- Section Title -->
                    <div class="text-center mb-12">
                        <h2 class="text-4xl font-bold text-gray-800">
                            Discover our <span class="text-green-500">Categories</span>
                        </h2>
                    </div>

                        <!-- Categories -->
                        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            <!-- Fishes & Raw Meats -->
                            <div
                            class="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                            >
                            <div class="flex justify-center mb-4">
                                <img src="./assets/fish.png" alt="" />
                            </div>
                            <h3 class="font-bold text-gray-800 text-sm">
                                Fishes & Raw Meats
                            </h3>
                            </div>

                            <!-- Fruits & Vegetables -->
                            <div
                            class="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                            >
                            <div class="flex justify-center mb-4">
                                <img src="./assets/fruit.png" alt="" />
                            </div>
                            <h3 class="font-bold text-gray-800 text-sm">
                                Fruits & Vegetables
                            </h3>
                            </div>
                            <!-- Breads & Sweets -->
                            <div
                            class="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                            >
                            <div class="flex justify-center mb-4">
                                <img src="./assets/bread.png" alt="" />
                            </div>
                            <h3 class="font-bold text-gray-800 text-sm">Breads & Sweets</h3>
                            </div>

                            <!-- Milks & Proteins -->
                            <div
                            class="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                            >
                            <div class="flex justify-center mb-4">
                                <img src="./assets/milk.png" alt="" />
                            </div>
                            <h3 class="font-bold text-gray-800 text-sm">Milks & Proteins</h3>
                            </div>

                            <!-- Cleaning Materials -->
                            <div
                            class="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                            >
                            <div class="flex justify-center mb-4">
                                <img src="./assets/clean.png" alt="" />
                            </div>
                            <h3 class="font-bold text-gray-800 text-sm">
                                Cleaning Materials
                            </h3>
                            </div>

                            <!-- Ready to use Foods -->
                            <div
                            class="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                            >
                            <div class="flex justify-center mb-4">
                                <img src="./assets/chick.png" alt="" />
                            </div>
                            <h3 class="font-bold text-gray-800 text-sm">
                                Ready to use Foods
                            </h3>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        
        
   <!-- Promoting section -->
    <section class=" bg-blue-50"
    id="promoting-section"
    >
    
      <div id="promoting"></div>
    
    </section>
   
    `;
}
