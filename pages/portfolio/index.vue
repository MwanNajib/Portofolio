<template>
  <div
    class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors"
  >
    <div class="p-6">
      <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Projects
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Project 1 -->
        <div
          class="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md dark:hover:bg-white/5 transition"
        >
          <h3
            class="font-bold text-[16px] text-blue-700 dark:text-blue-400 hover:underline cursor-pointer"
          >
            E-Commerce Web App
          </h3>
          <p class="text-[12px] text-gray-500 dark:text-gray-400 mt-1 mb-3">
            React.js, Node.js, MongoDB
          </p>
          <div
            class="w-full h-32 bg-gray-100 dark:bg-[#38434f] rounded-md mb-3 flex items-center justify-center overflow-hidden transition-colors"
          >
            <i
              class="fas fa-laptop-code text-gray-300 dark:text-gray-500 text-5xl"
            ></i>
          </div>
          <p class="text-[14px] text-gray-800 dark:text-gray-300 line-clamp-3">
            A full-stack e-commerce platform with user authentication, product
            management, shopping cart, and payment integration.
          </p>
        </div>

        <!-- Project 2 -->
        <div
          class="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md dark:hover:bg-white/5 transition"
        >
          <h3
            class="font-bold text-[16px] text-blue-700 dark:text-blue-400 hover:underline cursor-pointer"
          >
            Portfolio Website
          </h3>
          <p class="text-[12px] text-gray-500 dark:text-gray-400 mt-1 mb-3">
            Nuxt.js, Vue 3, Tailwind CSS
          </p>
          <div
            class="w-full h-32 bg-gray-100 dark:bg-[#38434f] rounded-md mb-3 flex items-center justify-center overflow-hidden transition-colors"
          >
            <i
              class="fas fa-sitemap text-gray-300 dark:text-gray-500 text-5xl"
            ></i>
          </div>
          <p class="text-[14px] text-gray-800 dark:text-gray-300 line-clamp-3">
            A personal portfolio website showcasing projects, skills, and
            professional experience with a modern, responsive design.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
