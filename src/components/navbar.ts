function renderNavbar(){
    return `
        <nav
        class="container mx-auto  bg-gradient-to-br from-white to-indigo-200 px-4 py-4 flex justify-between items-center"
      >
        <a
          href="#"
          class="text-2xl font-bold text-indigo-800 transition-colors duration-300"
        >
          Logo
        </a>
        <div class="hidden md:flex space-x-6">
          <a
            href="#"
            class="nav-link text-gray-700 font-semibold hover:text-indigo-800 transition-colors duration-300"
            >Home</a
          >
          <a
            href="#"
            class="nav-link text-gray-700 font-semibold hover:text-indigo-800 transition-colors duration-300"
            >About</a
          >
          <a
            href="#"
            class="nav-link text-gray-700 font-semibold hover:text-indigo-800 transition-colors duration-300"
            >Services</a
          >
          <a
            href="#"
            class="nav-link text-gray-700 font-semibold hover:text-indigo-800 transition-colors duration-300"
            >Contact</a
          >
        </div>
        <div class="hidden md:flex items-center space-x-4">
          <div>
            <i class="fa-solid fa-cart-shopping text-indigo-800"></i>
          </div>
          <button
            id="darkModeToggle"
            class="text-gray-700 hover:text-indigo-800 focus:outline-none transition-colors duration-300"
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
            class="bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300"
            >Sign Up</a
          >
        </div>
        <button
          id="mobileMenuButton"
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
    `
}
export default renderNavbar