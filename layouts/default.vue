<template>
  <div
    class="bg-[#f4f2ee] dark:bg-black min-h-screen font-sans text-gray-800 dark:text-gray-300 transition-colors"
  >
    <Navbar />

    <main
      class="max-w-[1128px] mx-auto pt-[76px] pb-12 px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-4 gap-6"
    >
      <!-- Left Sidebar (Hide on Profile Page) -->
      <aside v-if="!isProfilePage" class="lg:col-span-1 flex flex-col gap-4">
        <!-- Profile Card -->
        <div
          class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden relative transition-colors"
        >
          <!-- Clickable Header Section to Profile -->
          <NuxtLink
            :to="localePath('/Profil')"
            class="block pb-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group cursor-pointer"
          >
            <!-- Banner -->
            <div
              class="h-[72px] bg-gradient-to-r from-[#1b1c4b] to-[#01091a] w-full relative overflow-hidden"
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
              <div class="absolute top-2 right-3 text-right">
                <span
                  class="text-white text-[9px] font-medium tracking-wide block opacity-90"
                >
                  Muhammad Wisnu Ainun Najib
                </span>
              </div>
            </div>

            <!-- Avatar -->
            <div class="absolute top-[28px] left-4">
              <div class="relative w-[72px] h-[72px]">
                <img
                  src="/image/pnav2.jpg"
                  alt="Profile"
                  class="w-[72px] h-[72px] rounded-full border-2 border-white dark:border-[#1d2226] bg-white dark:bg-[#1d2226] object-cover transition-colors"
                />
              </div>
            </div>

            <!-- Info -->
            <div class="pt-10 px-4 text-left">
              <h1
                class="font-semibold text-[16px] text-gray-900 dark:text-gray-100 leading-tight group-hover:underline decoration-blue-600 truncate mt-2"
              >
                Muhammad Wisnu...
              </h1>
              <p
                class="text-[12px] text-gray-800 dark:text-gray-300 mt-1 leading-snug"
              >
                Frontend Developer - IT <br />
                Development at AirNav Indonesia ...
              </p>
              <p class="text-[12px] text-gray-500 dark:text-gray-400 mt-2">
                Semarang, Jawa Tengah
              </p>

              <div class="flex items-center gap-2 mt-3">
                <div
                  class="w-[18px] h-[18px] rounded-sm overflow-hidden bg-white border border-gray-200"
                >
                  <img
                    src="/image/pnav2.jpg"
                    alt="AirNav"
                    class="w-full h-full object-cover mix-blend-multiply opacity-80"
                  />
                </div>
                <span
                  class="text-[12px] font-bold text-gray-800 dark:text-gray-200"
                  >AirNav Indonesia</span
                >
              </div>
            </div>
          </NuxtLink>
        </div>
      </aside>

      <!-- Center Column (Main Content) -->
      <section
        :class="isProfilePage ? 'lg:col-span-3' : 'lg:col-span-2'"
        class="flex flex-col gap-4"
      >
        <slot />
      </section>

      <!-- Right Sidebar -->
      <aside class="lg:col-span-1 flex flex-col gap-4">
        <!-- Contact Information -->
        <div
          class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors"
        >
          <h2
            class="font-semibold text-[14px] text-gray-900 dark:text-gray-100 mb-3"
          >
            {{ $t("sidebar.contact_info") }}
          </h2>
          <div class="flex flex-col gap-3">
            <div class="flex items-start gap-2">
              <i
                class="fas fa-envelope text-blue-600 dark:text-blue-400 mt-1"
              ></i>
              <div>
                <p
                  class="text-[12px] font-semibold text-gray-800 dark:text-gray-200"
                >
                  {{ $t("contact.email") }}
                </p>
                <a
                  href="mailto:najib.mwa@gmail.com"
                  class="text-[12px] text-blue-600 hover:underline"
                  >najib.mwa@gmail.com</a
                >
              </div>
            </div>

            <div class="flex items-start gap-2">
              <i
                class="fab fa-linkedin text-blue-700 dark:text-blue-400 mt-1"
              ></i>
              <div>
                <p
                  class="text-[12px] font-semibold text-gray-800 dark:text-gray-200"
                >
                  {{ $t("contact.linkedin") }}
                </p>
                <a
                  href="https://linkedin.com/in/mwisnunajib"
                  target="_blank"
                  class="text-[12px] text-blue-600 hover:underline"
                  >linkedin.com/in/mwisnunajib</a
                >
              </div>
            </div>

            <div class="flex items-start gap-2">
              <i
                class="fab fa-github text-gray-800 dark:text-gray-300 mt-1"
              ></i>
              <div>
                <p
                  class="text-[12px] font-semibold text-gray-800 dark:text-gray-200"
                >
                  {{ $t("contact.github") }}
                </p>
                <a
                  href="https://github.com/mwisnunajib"
                  target="_blank"
                  class="text-[12px] text-blue-600 hover:underline"
                  >github.com/mwisnunajib</a
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Core Skills & Tools -->
        <div
          class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors"
        >
          <h2
            class="font-semibold text-[14px] text-gray-900 dark:text-gray-100 mb-3"
          >
            {{ $t("sidebar.skills_tools") }}
          </h2>
          <div class="flex flex-wrap gap-2">
            <span
              class="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[12px] px-2.5 py-1 rounded-full font-medium"
              >HTML5</span
            >
            <span
              class="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[12px] px-2.5 py-1 rounded-full font-medium"
              >CSS3</span
            >
            <span
              class="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[12px] px-2.5 py-1 rounded-full font-medium"
              >JavaScript</span
            >
            <span
              class="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[12px] px-2.5 py-1 rounded-full font-medium"
              >TypeScript</span
            >
            <span
              class="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[12px] px-2.5 py-1 rounded-full font-medium"
              >Vue.js</span
            >
            <span
              class="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[12px] px-2.5 py-1 rounded-full font-medium"
              >Nuxt 3</span
            >
            <span
              class="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[12px] px-2.5 py-1 rounded-full font-medium"
              >Tailwind CSS</span
            >
            <span
              class="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[12px] px-2.5 py-1 rounded-full font-medium"
              >Git</span
            >
            <span
              class="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[12px] px-2.5 py-1 rounded-full font-medium"
              >SQL</span
            >
          </div>
        </div>
      </aside>
    </main>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useLocalePath } from "#imports";

const route = useRoute();
const localePath = useLocalePath();

const isProfilePage = computed(() => {
  return route.path.toLowerCase().includes("/profil");
});
</script>
