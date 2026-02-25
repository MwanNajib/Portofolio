<template>
  <div class="w-full">
    <!-- Skeleton Loading -->
    <template v-if="isLoading">
      <div
        class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 animate-pulse"
      >
        <div class="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-6"></div>
        <div class="flex gap-4 mb-6">
          <div
            class="w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded-sm flex-shrink-0"
          ></div>
          <div
            class="border-b border-gray-100 dark:border-gray-700 pb-6 flex-grow space-y-3"
          >
            <div class="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
            <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/5"></div>
            <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/6"></div>

            <div class="pt-4 space-y-2">
              <div
                class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"
              ></div>
              <div
                class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-11/12"
              ></div>
              <div
                class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"
              ></div>
            </div>
          </div>
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
            Experience
          </h2>

          <!-- Experience Item -->
          <div class="flex gap-4 mb-6">
            <div
              class="w-14 h-14 bg-gray-100 dark:bg-[#38434f] flex-shrink-0 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-full overflow-hidden"
            >
              <img
                src="/image/logoAirnav.png"
                alt="Company Logo"
                class="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal opacity-80"
              />
            </div>
            <div
              class="border-b border-gray-100 dark:border-gray-700 pb-6 flex-grow"
            >
              <h3
                class="font-bold text-[16px] text-gray-900 dark:text-gray-100"
              >
                Frontend Developer - IT Development
              </h3>
              <p class="text-[14px] text-gray-800 dark:text-gray-300">
                AirNav Indonesia
              </p>
              <p class="text-[14px] text-gray-500 dark:text-gray-400 mt-1">
                Jan 2025 - Present · 2 mos
              </p>
              <p class="text-[14px] text-gray-500 dark:text-gray-400 mb-3">
                Semarang, Jawa Tengah, Indonesia
              </p>

              <div class="text-[14px] text-gray-900 dark:text-gray-200">
                <ul class="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Developed and maintained responsive web applications using
                    React.js and Tailwind CSS, improving user engagement by 35%
                  </li>
                  <li>
                    Collaborated with cross-functional teams to implement new
                    features and optimize existing codebase
                  </li>
                  <li>
                    Participated in code reviews and contributed to establishing
                    best practices for frontend development
                  </li>
                  <li>
                    Integrated RESTful APIs and managed state with Redux,
                    enhancing application performance and scalability
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
