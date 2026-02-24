<template>
  <div
    class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors"
  >
    <div class="p-6">
      <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Contact
      </h2>

      <form class="flex flex-col gap-4 max-w-lg">
        <div>
          <label
            class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
            >Name</label
          >
          <input
            type="text"
            placeholder="Your Name"
            class="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#38434f] text-gray-900 dark:text-gray-100 rounded-md px-4 py-2 text-[14px] focus:outline-none focus:border-gray-500 dark:focus:border-gray-400 focus:ring-1 focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors"
          />
        </div>

        <div>
          <label
            class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
            >Email</label
          >
          <input
            type="email"
            placeholder="Your Email"
            class="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#38434f] text-gray-900 dark:text-gray-100 rounded-md px-4 py-2 text-[14px] focus:outline-none focus:border-gray-500 dark:focus:border-gray-400 focus:ring-1 focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors"
          />
        </div>

        <div>
          <label
            class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
            >Message</label
          >
          <textarea
            rows="4"
            placeholder="Your Message"
            class="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#38434f] text-gray-900 dark:text-gray-100 rounded-md px-4 py-2 text-[14px] focus:outline-none focus:border-gray-500 dark:focus:border-gray-400 focus:ring-1 focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors"
          ></textarea>
        </div>

        <button
          type="button"
          class="bg-[#0a66c2] text-white hover:bg-[#004182] font-semibold text-[14px] py-2 px-6 rounded-full w-max transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>

<script setup></script>
