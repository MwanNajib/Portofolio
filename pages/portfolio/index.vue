<template>
  <div class="w-full">
    <!-- Skeleton Loading -->
    <template v-if="isLoading">
      <div
        class="bg-white dark:bg-[#1d2226] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 animate-pulse"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"
          ></div>
          <div
            class="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full"
          ></div>
          <div class="space-y-2">
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
            <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
          </div>
        </div>
        <div class="space-y-12">
          <div class="flex flex-col gap-6">
            <div
              class="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-2xl"
            ></div>
            <div class="w-full space-y-4 py-4">
              <div class="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              <div
                class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"
              ></div>
              <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
              <div
                class="h-8 bg-gray-200 dark:bg-gray-700 rounded w-24 mt-4"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- Actual Content -->
    <template v-else>
      <div
        class="bg-white dark:bg-[#1d2226] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors animate-in fade-in duration-500 overflow-hidden"
      >
        <!-- Header Profile -->
        <div
          class="flex items-center gap-4 mb-2 p-5 sm:p-8 border-b border-gray-100 dark:border-gray-800 relative bg-gradient-to-r from-gray-50 to-white dark:from-[#1d2226] dark:to-[#22282d]"
        >
          <NuxtLink
            :to="localePath('/')"
            class="flex items-center justify-center w-10 h-10 -ml-2 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm border border-gray-100 dark:border-gray-700 transition-all shrink-0 z-10 hover:scale-105"
            :title="$t('internship.back_to_home')"
          >
            <i class="fas fa-arrow-left"></i>
          </NuxtLink>

          <div class="flex gap-4 items-center pl-1">
            <div class="relative">
              <img
                src="/image/Profil.jpg"
                alt="Profile"
                class="h-14 w-14 rounded-full object-cover shadow-md ring-2 ring-white dark:ring-[#1d2226]"
              />
            </div>
            <div class="flex flex-col justify-center">
              <h3
                class="font-bold text-[18px] text-slate-800 dark:text-gray-100 leading-none mb-1.5 tracking-tight"
              >
                Muhammad Wisnu Ainun Najib
              </h3>
              <p
                class="text-[13px] text-gray-500 dark:text-gray-400 font-medium leading-none"
              >
                {{ $t("portfolio.pageSubtitle") }}
              </p>
            </div>
          </div>
        </div>

        <!-- Project List -->
        <div class="p-5 sm:p-8 space-y-10">
          <!-- Project 1: ebkost (NEWEST) -->
          <div
            class="group flex flex-col gap-5 rounded-2xl bg-white dark:bg-[#1d2226] border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-6"
          >
            <!-- Image Side -->
            <div
              class="w-full h-56 sm:h-80 overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800/50 relative border border-gray-100 dark:border-gray-700 flex items-center justify-center p-4"
            >
              <div
                class="absolute inset-0 bg-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              ></div>
              <img
                src="/image/portofolio4.png"
                alt="ebkost"
                class="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

            <!-- Content Side -->
            <div class="w-full flex flex-col pt-2">
              <div
                class="flex flex-wrap justify-between items-start gap-4 mb-3"
              >
                <div>
                  <h3
                    class="text-[18px] font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  >
                    ebkost
                  </h3>
                </div>

                <a
                  href="https://github.com/MwanNajib/ebkost"
                  target="_blank"
                  class="flex items-center gap-2 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-md font-semibold transition-all text-[13px] shadow-sm shrink-0"
                >
                  <i class="fab fa-github"></i> {{ $t("portfolio.github") }}
                </a>
              </div>

              <p
                class="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed mb-5 text-justify"
              >
                {{ $t("portfolio.ebkostDesc") }}
              </p>

              <div class="flex flex-wrap items-center gap-4 mt-auto">
                <span
                  class="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700 text-xs px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 shadow-sm"
                >
                  <svg class="h-4 w-4" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="64" cy="64" r="64" fill="black"/>
                    <path d="M102.4 97.4667L45.4187 25.6H38.4V102.4H45.4187V43.52L95.3813 102.4H102.4V97.4667Z" fill="white"/>
                    <path d="M76.8 102.4V25.6H83.8187V102.4H76.8Z" fill="white"/>
                  </svg>
                  Next.js
                </span>
                <span
                  class="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700 text-xs px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 shadow-sm"
                >
                  <i class="fas fa-database text-blue-600 text-sm"></i> Prisma
                </span>
              </div>
            </div>
          </div>

          <!-- Project 2: NavEvent (AirNav Event) -->
          <div
            class="group flex flex-col gap-5 rounded-2xl bg-white dark:bg-[#1d2226] border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-6"
          >
            <!-- Image Side -->
            <div
              class="w-full h-56 sm:h-80 overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800/50 relative border border-gray-100 dark:border-gray-700 flex items-center justify-center p-4"
            >
              <div
                class="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              ></div>
              <img
                src="/image/portofolio1.jpg"
                alt="NavEvent"
                class="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <!-- Content Side -->
            <div class="w-full flex flex-col pt-2">
              <div
                class="flex flex-wrap justify-between items-start gap-4 mb-3"
              >
                <div>
                  <h3
                    class="text-[18px] font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  >
                    NavEvent (AirNav Event)
                  </h3>
                </div>
              </div>

              <p
                class="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed mb-5 text-justify"
              >
                {{ $t("portfolio.navEventDesc") }}
              </p>

              <div class="flex flex-wrap items-center gap-4 mt-auto">
                <span
                  class="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700 text-xs px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 shadow-sm"
                >
                  <i class="fab fa-react text-blue-500 text-sm"></i> React.js
                </span>
              </div>
            </div>
          </div>

          <!-- Project 3: HelpDesk AirNav -->
          <div
            class="group flex flex-col gap-5 rounded-2xl bg-white dark:bg-[#1d2226] border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-6"
          >
            <!-- Image Side -->
            <div
              class="w-full h-56 sm:h-80 overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800/50 relative border border-gray-100 dark:border-gray-700 flex items-center justify-center p-4"
            >
              <div
                class="absolute inset-0 bg-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              ></div>
              <img
                src="/image/portofolio2.png"
                alt="HelpDesk AirNav"
                class="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <!-- Content Side -->
            <div class="w-full flex flex-col pt-2">
              <div
                class="flex flex-wrap justify-between items-start gap-4 mb-3"
              >
                <div>
                  <h3
                    class="text-[18px] font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  >
                    HelpDesk AirNav
                  </h3>
                </div>
              </div>

              <p
                class="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed mb-5 text-justify"
              >
                {{ $t("portfolio.helpdeskDesc") }}
              </p>

              <div class="flex flex-wrap items-center gap-4 mt-auto">
                <span
                  class="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700 text-xs px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 shadow-sm"
                >
                  <i class="fab fa-vuejs text-green-600 text-sm"></i> Nuxt
                </span>
              </div>
            </div>
          </div>

          <!-- Project 4: FISHFRESH (OLDEST) -->
          <div
            class="group flex flex-col gap-5 rounded-2xl bg-white dark:bg-[#1d2226] border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-6"
          >
            <!-- Image Side -->
            <div
              class="w-full h-56 sm:h-80 overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800/50 relative border border-gray-100 dark:border-gray-700 flex items-center justify-center p-4"
            >
              <div
                class="absolute inset-0 bg-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              ></div>
              <img
                src="/image/portofolio3.jpg"
                alt="FISHFRESH"
                class="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <!-- Content Side -->
            <div class="w-full flex flex-col pt-2">
              <div
                class="flex flex-wrap justify-between items-start gap-4 mb-3"
              >
                <div class="flex-1">
                  <h3
                    class="text-[18px] font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug"
                  >
                    FISHFRESH : Aplikasi Mobile Untuk Klasifikasi Kesegaran Ikan
                    Bandeng Berbasis Computer Vision
                  </h3>
                </div>

                <a
                  href="https://github.com/MwanNajib/Fish-Fresh"
                  target="_blank"
                  class="flex items-center gap-2 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-md font-semibold transition-all text-[13px] shadow-sm shrink-0 mt-1"
                >
                  <i class="fab fa-github"></i> {{ $t("portfolio.github") }}
                </a>
              </div>

              <p
                class="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed mb-5 text-justify"
              >
                {{ $t("portfolio.fishfreshDesc") }}
              </p>

              <div class="flex flex-wrap items-center gap-4 mt-auto">
                <span
                  class="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700 text-xs px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 shadow-sm"
                >
                  <i class="fas fa-mobile-alt text-blue-500 text-sm"></i>
                  Flutter
                </span>
                <span
                  class="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700 text-xs px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 shadow-sm"
                >
                  <i class="fas fa-brain text-purple-600 text-sm"></i> YOLOv8
                </span>
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
import { useLocalePath } from "#imports";

const isLoading = ref(true);
const localePath = useLocalePath();

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 800);
});
</script>
