<template>
  <div class="w-full">
    <!-- Skeleton Loading -->
    <template v-if="isLoading">
      <div
        class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden relative mb-4 animate-pulse"
      >
        <!-- Banner Skeleton -->
        <div
          class="h-[180px] bg-gray-200 dark:bg-gray-700 w-full relative"
        ></div>

        <!-- Avatar & Main Content Skeleton -->
        <div class="px-6 relative pb-6">
          <!-- Profile Picture Skeleton -->
          <div
            class="mt-[-90px] mb-4 relative z-10 w-[152px] h-[152px] rounded-full border-4 border-white dark:border-[#1d2226] bg-gray-300 dark:bg-gray-600"
          ></div>

          <!-- Info Row Skeleton -->
          <div class="flex flex-col md:flex-row justify-between mb-4 mt-2">
            <div class="md:w-2/3">
              <div
                class="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"
              ></div>
              <div
                class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"
              ></div>
              <div
                class="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-6"
              ></div>

              <!-- Action Buttons Skeleton -->
              <div class="flex flex-wrap gap-3 mt-2">
                <div
                  class="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded-full"
                ></div>
                <div
                  class="h-8 w-28 bg-gray-200 dark:bg-gray-700 rounded-full"
                ></div>
                <div
                  class="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded-full"
                ></div>
              </div>
            </div>

            <!-- Right Side Skeleton -->
            <div
              class="md:w-1/3 flex flex-col gap-4 mt-6 md:mt-0 px-2 md:pl-4 border-l-0 md:border-l border-gray-100 dark:border-gray-800"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-md"
                ></div>
                <div
                  class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32"
                ></div>
              </div>
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-md"
                ></div>
                <div
                  class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-40"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- About Section Skeleton -->
        <div class="px-6 py-6 border-t border-gray-100 dark:border-gray-800">
          <div
            class="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"
          ></div>
          <div class="space-y-3">
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-11/12"></div>
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </template>

    <!-- Actual Content -->
    <template v-else>
      <div
        class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden relative transition-colors mb-4 animate-in fade-in duration-500"
      >
        <!-- Banner Section -->
        <div
          class="h-[180px] bg-gradient-to-r from-[#1b1c4b] to-[#01091a] w-full relative overflow-hidden flex items-center"
        >
          <!-- Abstract network pattern simulation -->
          <div
            class="absolute left-0 top-0 w-2/3 h-full opacity-20 transform -skew-x-12"
            style="
              background-image: radial-gradient(#fff 1px, transparent 1px);
              background-size: 8px 8px;
            "
          ></div>

          <!-- Text on Banner -->
          <div class="absolute right-6 z-10 hidden sm:flex flex-col items-end">
            <h2 class="text-white text-xl font-bold tracking-wide">
              Muhammad Wisnu Ainun Najib
            </h2>
            <p class="text-gray-300 text-[11px] mt-1">
              najib.mwa@gmail.com | @mwisnunajib
            </p>
          </div>
        </div>

        <!-- Avatar & Main Content Section -->
        <div class="px-6 relative pb-6">
          <!-- Profile Picture (Negative Margin for overlap) -->
          <div class="mt-[-90px] mb-4 relative z-10 w-[152px] h-[152px]">
            <img
              src="/image/Profil.jpg"
              alt="Profile Picture"
              class="w-full h-full rounded-full border-4 border-white dark:border-[#1d2226] bg-white dark:bg-[#1d2226] object-cover transition-colors shadow-sm"
            />
          </div>

          <!-- Info Row container -->
          <div class="flex flex-col md:flex-row justify-between mb-4">
            <!-- Left Side: Profile Info -->
            <div class="md:w-2/3">
              <div class="flex items-center gap-2 mb-1">
                <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Muhammad Wisnu Ainun Najib
                </h1>
                <span class="text-gray-500 dark:text-gray-400 text-[14px]">{{
                  $t("profile.pronouns")
                }}</span>
              </div>

              <p
                class="text-[15px] text-gray-900 dark:text-gray-200 leading-snug mb-2 pr-6"
              >
                {{ $t("profile.role") }}
              </p>

              <p class="text-[14px] text-gray-500 dark:text-gray-400 mb-5">
                {{ $t("profile.location") }}
              </p>

              <!-- Standard Portfolio Action Buttons -->
              <div class="flex flex-wrap gap-3 mt-2">
                <a
                  href="mailto:najib.mwa@gmail.com"
                  class="flex items-center gap-2 bg-[#0a66c2] text-white font-semibold text-[15px] px-5 py-1.5 rounded-full hover:bg-[#004182] transition shadow-sm"
                >
                  <i class="fas fa-paper-plane text-[13px]"></i>
                  {{ $t("profile.btnMessage") }}
                </a>
                <button
                  class="flex items-center gap-2 bg-transparent text-[#0a66c2] dark:text-blue-400 font-semibold text-[15px] px-5 py-1.5 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition border-[1.5px] border-[#0a66c2] dark:border-blue-400 shadow-sm"
                >
                  <i class="fas fa-file-download text-[13px]"></i>
                  {{ $t("profile.btnDownload") }}
                </button>
                <NuxtLink
                  :to="localePath('/portfolio')"
                  class="flex items-center gap-2 bg-transparent text-gray-600 dark:text-gray-300 font-semibold text-[15px] px-5 py-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition border-[1.5px] border-gray-500 dark:border-gray-400 shadow-sm"
                >
                  <i class="fas fa-folder-open text-[13px]"></i>
                  {{ $t("profile.btnProjects") }}
                </NuxtLink>
              </div>
            </div>

            <!-- Right Side: Current Company & University -->
            <div
              class="md:w-1/3 flex flex-col gap-3 mt-6 md:mt-0 px-2 md:pl-4 border-l-0 md:border-l border-gray-100 dark:border-gray-800"
            >
              <div class="flex flex-col gap-4 pt-1">
                <NuxtLink
                  to="#"
                  class="flex items-center gap-3 hover:underline group text-left"
                >
                  <div
                    class="w-10 h-10 rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm flex-shrink-0"
                  >
                    <img
                      src="/image/logoAirnav.png"
                      class="w-full h-full object-cover"
                      alt="AirNav Indonesia"
                    />
                  </div>
                  <span
                    class="text-[14px] font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 leading-snug"
                    >AirNav Indonesia</span
                  >
                </NuxtLink>
                <NuxtLink
                  to="#"
                  class="flex items-center gap-3 hover:underline group text-left"
                >
                  <div
                    class="w-10 h-10 bg-white rounded-md flex items-center justify-center border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm flex-shrink-0 p-1"
                  >
                    <img
                      src="/image/LogoPolines.png"
                      class="w-full h-full object-contain"
                      alt="Polines"
                    />
                  </div>
                  <span
                    class="text-[14px] font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 leading-snug"
                    >Politeknik Negeri Semarang</span
                  >
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- About Section in Profile Page -->
        <div class="px-6 py-6 border-t border-gray-100 dark:border-gray-800">
          <h2
            class="text-[18px] font-bold text-gray-900 dark:text-gray-100 mb-3"
          >
            {{ $t("profile.aboutTitle") }}
          </h2>
          <p
            class="text-[14px] text-gray-800 dark:text-gray-300 leading-relaxed whitespace-pre-line"
          >
            {{ $t("profile.aboutDesc1") }}
            <br /><br />
            {{ $t("profile.aboutDesc2") }}
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useLocalePath } from "#imports";

const localePath = useLocalePath();
const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
</script>
