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
          <div
            class="flex items-center gap-4 mb-6 pb-2 border-b border-gray-100 dark:border-gray-800"
          >
            <NuxtLink
              :to="localePath('/')"
              class="flex items-center justify-center w-9 h-9 -ml-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shrink-0"
              title="Kembali ke Beranda"
            >
              <i class="fas fa-arrow-left"></i>
            </NuxtLink>

            <div class="flex gap-3 items-center">
              <img
                src="/image/Profil.jpg"
                alt="Profile"
                class="h-12 w-12 rounded-full object-cover shadow-sm"
              />
              <div class="flex flex-col justify-center">
                <h3
                  class="font-bold text-[16px] text-slate-800 dark:text-gray-100 leading-none mb-1 tracking-tight"
                >
                  Muhammad Wisnu Ainun Najib
                </h3>
                <p
                  class="text-[13px] text-gray-500 dark:text-gray-400 font-medium leading-none"
                >
                  {{ $t("about_page.me") }}
                </p>
              </div>
            </div>
          </div>
          <div
            class="text-[14px] text-gray-800 dark:text-gray-200 leading-relaxed text-justify"
          >
            <!-- Introduction Box -->
            <div
              class="mb-8 bg-gray-50 dark:bg-[#252a30] p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm relative overflow-hidden"
            >
              <div
                class="absolute top-0 left-0 w-1 h-full bg-blue-500 rounded-l-xl"
              ></div>
              <p class="relative z-10">{{ $t("about_page.p1") }}</p>
            </div>
            <div class="mb-6 clear-both">
              <img
                src="/image/pAirnav.jpeg"
                alt="At AirNav Indonesia"
                class="float-right w-1/3 md:w-1/4 rounded-lg shadow-md ml-4 mb-2 object-cover border border-gray-200 dark:border-gray-700"
              />
              <p>{{ $t("about_page.p2") }}</p>
            </div>
            <div class="clear-both">
              <img
                src="/image/Jasamarga.jpeg"
                alt="At Jasa Marga (JMTO)"
                class="float-left w-1/3 md:w-1/4 rounded-lg shadow-md mr-4 mb-2 object-cover border border-gray-200 dark:border-gray-700"
              />
              <p>{{ $t("about_page.p3") }}</p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useLocalePath } from "#imports";

const isLoading = ref(true);
const localePath = useLocalePath();

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
</script>
