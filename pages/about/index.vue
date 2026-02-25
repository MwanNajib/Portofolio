<template>
  <div class="w-full">
    <!-- Skeleton Loading -->
    <template v-if="isLoading">
      <div
        class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 animate-pulse"
      >
        <div class="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-6"></div>
        <div class="space-y-3">
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        </div>
      </div>
    </template>

    <!-- Actual Content -->
    <template v-else>
      <div
        class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors animate-in fade-in duration-500"
      >
        <div class="p-6">
          <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            About
          </h2>
          <div
            class="text-[14px] text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-line"
          >
            Hello! I'm Muhammad Wisnu Ainun Najib, a passionate Web Developer
            and IT professional based in Semarang, Jawa Tengah. With a strong
            foundation in modern web technologies and a keen eye for
            user-centered design, I specialize in building responsive, scalable,
            and performant web applications. My expertise spans across frontend
            development with React, backend systems with Node.js, and database
            management with SQL. I'm committed to continuous learning and
            staying updated with the latest industry trends to deliver
            innovative solutions that drive business value. I thrive in
            collaborative environments and enjoy tackling complex challenges
            that push the boundaries of web development. Whether it's crafting
            intuitive user interfaces or optimizing application performance, I
            bring dedication and technical excellence to every project.
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
