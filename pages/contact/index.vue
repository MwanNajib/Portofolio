<template>
  <div class="w-full">
    <!-- Skeleton Loading -->
    <template v-if="isLoading">
      <div
        class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 animate-pulse"
      >
        <div class="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-6"></div>

        <div class="flex flex-col gap-4 max-w-lg">
          <div>
            <div
              class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 mb-2"
            ></div>
            <div
              class="w-full h-10 bg-gray-200 dark:bg-gray-700 rounded-md"
            ></div>
          </div>
          <div>
            <div
              class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 mb-2"
            ></div>
            <div
              class="w-full h-10 bg-gray-200 dark:bg-gray-700 rounded-md"
            ></div>
          </div>
          <div>
            <div
              class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 mb-2"
            ></div>
            <div
              class="w-full h-24 bg-gray-200 dark:bg-gray-700 rounded-md"
            ></div>
          </div>
          <div
            class="h-10 bg-gray-200 dark:bg-gray-700 rounded-full w-32 mt-2"
          ></div>
        </div>
      </div>
    </template>

    <!-- Actual Content -->
    <template v-else>
      <div
        class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors animate-in fade-in duration-500"
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
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
</script>
