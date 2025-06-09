export default function renderNavbar():string{
  

    return `
        <nav
        class="fixed top-0 left-0 right-0 z-50 w-full mx-auto bg-green-100/70 backdrop-blur-sm text-black px-4 py-4 flex justify-between items-center transition-all duration-300"
      >
        <a
          href="#"
          class="text-2xl font-bold text-indigo-800 transition-colors duration-300"
        >
           <div class="flex items-center space-x-2">
              <div
                class="w-10 h-10 bg-gradient-to-r from-indigo-500 to-green-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition duration-500"
              >
                <span class="text-xl font-bold">DD</span>
              </div>
              <h2
                class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-indigo-500"
              >
                DailyDealz
              </h2>
            </div>
        </a>
        <div class="hidden md:flex space-x-6">
          <a
            href="#home"
            class="nav-link text-gray-700 font-semibold hover:text-indigo-800  transition-colors duration-300"
            id="home-link"
            >Home</a
          >

          <a
            href="#products"
            class="nav-link text-gray-700 font-semibold hover:text-indigo-800 transition-colors duration-300"
            id="products-link"
            >Categories</a
          >
                      <a
            href="#about"
            class="nav-link text-gray-700 font-semibold hover:text-indigo-800 transition-colors duration-300"
            >About</a
          >
        </div>
        <div class="hidden md:flex items-center space-x-4">
          <div>
            <i class="fa-solid fa-cart-shopping text-indigo-500"></i>
          </div>
          <button
            id="darkModeToggle"
            class="text-gray-700 hover:text-indigo-500 focus:outline-none transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>

          <a
            href="#"
            class="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300"
            >Sign Up</a
          >
        </div>
        <button
          class="md:hidden text-gray-700 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-white focus:outline-none transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
      <div id="mobileMenu" class="mobile-menu md:hidden pt-20 bg-white dark:bg-gray-800 shadow-lg absolute w-full left-0 transform -translate-y-full opacity-0">
        <div class="container mx-auto px-4 py-4 space-y-4">
            <a href="#home" class="block text-gray-700 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-white transition-colors duration-300">Home</a>
            <a href="#products" class="block text-gray-700 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-white transition-colors duration-300">Categories</a>
            <a href="#about" class="block text-gray-700 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-white transition-colors duration-300">About</a>
            <a href="#" class="inline-block bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300">Sign Up</a>
        </div>
    </div>
      
    `
}


