<template>
  <div class="flex flex-col gap-4 w-full">
    <!-- Skeleton Loading State -->
    <template v-if="isLoading">
      <!-- Create Post Box Skeleton -->
      <div
        class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 animate-pulse"
      >
        <div class="flex gap-3 items-center">
          <div
            class="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700"
          ></div>
          <div
            class="h-12 flex-grow bg-gray-200 dark:bg-gray-700 rounded-full"
          ></div>
        </div>
        <div class="flex justify-between items-center mt-3 pt-3 px-2">
          <div class="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
          <div class="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
          <div class="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
          <div class="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
        </div>
      </div>

      <!-- Post Skeleton 1 -->
      <div
        class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 animate-pulse"
      >
        <div class="flex justify-between items-start mb-4">
          <div class="flex gap-3 w-full">
            <div
              class="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700"
            ></div>
            <div class="flex-1 space-y-2 py-1">
              <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
              <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
              <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/6"></div>
            </div>
          </div>
        </div>
        <div class="space-y-3 mb-6">
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
        </div>
        <div class="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
      </div>

      <!-- Post Skeleton 2 -->
      <div
        class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 animate-pulse"
      >
        <div class="flex justify-between items-start mb-4">
          <div class="flex gap-3 w-full">
            <div
              class="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700"
            ></div>
            <div class="flex-1 space-y-2 py-1">
              <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
              <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
            </div>
          </div>
        </div>
        <div
          class="h-20 bg-gray-200 dark:bg-gray-700 rounded w-full mb-4"
        ></div>
        <div class="space-y-3 mb-6">
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        </div>
        <div class="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
      </div>
    </template>

    <!-- Actual Content -->
    <template v-else>
      <!-- Welcome Notification Post (Khusus Tamu) -->
      <div
        v-if="guestName"
        class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors animate-in fade-in duration-500"
      >
        <div class="p-4">
          <!-- Header -->
          <div class="flex justify-between items-start mb-3">
            <div class="flex gap-3 items-center">
              <img
                src="/image/Profil.jpg"
                alt="Profile"
                class="h-12 w-12 rounded-full object-cover"
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
                  IT Developer
                </p>
              </div>
            </div>
            <button
              class="text-gray-500 hover:bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center transition"
            >
              <i class="fas fa-ellipsis-h"></i>
            </button>
          </div>

          <!-- Content -->
          <div class="mt-4 mb-2 px-1">
            <h4
              class="text-[16px] font-bold text-gray-900 dark:text-white mb-1"
            >
              {{ $t("home.welcome_greeting", { name: guestName }) }}
            </h4>
            <p
              class="text-[14px] text-gray-800 dark:text-gray-300 leading-relaxed"
            >
              {{ $t("home.welcome_message") }}
            </p>
          </div>
        </div>
      </div>

      <!-- Pinned Introduction Post -->
      <div
        class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors animate-in fade-in duration-500"
      >
        <div class="p-4">
          <!-- Header -->
          <div class="flex justify-between items-start mb-3">
            <div class="flex gap-3 items-center">
              <img
                src="/image/Profil.jpg"
                alt="Profile"
                class="h-12 w-12 rounded-full object-cover"
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
                  IT Developer
                </p>
              </div>
            </div>
            <button
              class="text-gray-500 hover:bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center transition"
            >
              <i class="fas fa-ellipsis-h"></i>
            </button>
          </div>

          <div
            class="mb-3 text-blue-700 dark:text-blue-400 text-sm font-semibold flex items-center gap-2"
          >
            <i class="fas fa-thumbtack"></i> {{ $t("home.pinned_title") }}
          </div>

          <!-- Content -->
          <div
            class="text-[14px] text-gray-900 dark:text-gray-200 leading-relaxed mb-4"
          >
            {{ $t("home.pinned_content") }}
            <NuxtLink
              :to="localePath('/about')"
              class="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline whitespace-nowrap"
            >
              {{ $t("home.show_more") }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Internship Update Post -->
      <div
        class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors animate-in fade-in duration-500"
      >
        <div class="p-4">
          <!-- Header -->
          <div class="flex justify-between items-start mb-3">
            <div class="flex gap-3 items-center">
              <img
                src="/image/Profil.jpg"
                alt="Profile"
                class="h-12 w-12 rounded-full object-cover"
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
                  IT Developer
                </p>
              </div>
            </div>
            <button
              class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 w-8 h-8 rounded-full flex items-center justify-center transition"
            >
              <i class="fas fa-ellipsis-h"></i>
            </button>
          </div>

          <!-- Role Card inside post -->
          <div
            class="bg-[#f8fafd] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md p-4 mb-4 flex gap-4 mt-2"
          >
            <div
              class="w-12 h-12 bg-gray-200 dark:bg-gray-700 flex-shrink-0 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-full overflow-hidden"
            >
              <img
                src="/image/logoAirnav.png"
                alt="Airnav Indonesia"
                class="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal opacity-80"
              />
            </div>
            <div>
              <h4
                class="font-bold text-[16px] text-gray-900 dark:text-gray-100"
              >
                {{ $t("internship.job1.position") }}
              </h4>
              <p class="text-[14px] text-gray-800 dark:text-gray-300">
                {{ $t("internship.job1.company") }}
              </p>
              <p class="text-[12px] text-gray-500 dark:text-gray-400 mt-1">
                {{ $t("internship.job1.duration") }}
              </p>
              <p class="text-[12px] text-gray-500 dark:text-gray-400">
                Semarang, Jawa Tengah, Indonesia
              </p>
            </div>
          </div>

          <!-- Content -->
          <div
            class="text-[14px] text-gray-900 dark:text-gray-200 leading-relaxed mb-4"
          >
            <div class="mb-3">
              <span
                class="font-semibold text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-800/50 px-2 py-1 rounded"
                >{{ $t("internship.responsibilities") }}</span
              >
            </div>
            <ul
              class="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300"
            >
              <li>
                {{ $t("internship.job1.desc1") }}
              </li>
              <li>
                {{ $t("internship.job1.desc2_short") }}
                <NuxtLink
                  :to="localePath('/internship')"
                  class="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors"
                >
                  {{ $t("home.show_more") }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Project Showcase Post -->
      <div
        class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors animate-in fade-in duration-500"
      >
        <div class="p-4">
          <div class="flex justify-between items-start mb-3">
            <div class="flex gap-3 items-center">
              <img
                src="/image/Profil.jpg"
                alt="Profile"
                class="h-12 w-12 rounded-full object-cover"
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
                  IT Developer
                </p>
              </div>
            </div>
            <button
              class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 w-8 h-8 rounded-full flex items-center justify-center transition"
            >
              <i class="fas fa-ellipsis-h"></i>
            </button>
          </div>

          <div
            class="text-[14px] text-gray-900 dark:text-gray-200 leading-relaxed mb-4"
          >
            Happy to share one of my recent full-stack projects! It's a
            comprehensive web application built with modern technologies to
            solve real-world problems. Check out the details below! 🚀💻
          </div>

          <div
            class="bg-[#f8fafd] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden mb-4"
          >
            <div
              class="h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
            >
              <i class="fas fa-laptop-code text-4xl text-gray-400"></i>
            </div>
            <div class="p-4">
              <h4
                class="font-bold text-[16px] text-gray-900 dark:text-gray-100"
              >
                E-Commerce Dashboard Analytics
              </h4>
              <p class="text-[14px] text-gray-600 dark:text-gray-400 mt-1">
                A real-time analytics dashboard for e-commerce platforms
                featuring interactive charts and data visualization.
              </p>
              <div class="flex flex-wrap gap-2 mt-3">
                <span
                  class="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded-full"
                  >Vue.js</span
                >
                <span
                  class="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded-full"
                  >Node.js</span
                >
                <span
                  class="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded-full"
                  >TailwindCSS</span
                >
              </div>
            </div>
          </div>
        </div>

        <div
          class="px-4 py-2 flex justify-between items-center text-gray-500 dark:text-gray-400 text-[12px] border-t border-gray-100 dark:border-gray-800"
        >
          <div class="flex items-center gap-1">
            <span
              class="bg-blue-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]"
              ><i class="fas fa-thumbs-up"></i
            ></span>
            <span
              class="bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] -ml-1"
              ><i class="fas fa-heart"></i
            ></span>
            <span class="ml-1 text-[13px]">85</span>
          </div>
        </div>

        <div
          class="border-t border-gray-200 dark:border-gray-700 p-2 flex justify-center px-4"
        >
          <button
            @click="likedProject = !likedProject"
            :class="[
              'flex items-center gap-2 px-4 py-2 rounded-md transition text-sm font-semibold flex-1 justify-center max-w-[200px]',
              likedProject
                ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10',
            ]"
          >
            <i
              :class="
                likedProject
                  ? 'fas fa-thumbs-up text-lg'
                  : 'far fa-thumbs-up text-lg'
              "
            ></i>
            Like
          </button>
        </div>
      </div>

      <!-- Contact Setup Post -->
      <div
        class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors animate-in fade-in duration-500"
      >
        <div class="p-4">
          <div class="flex justify-between items-start mb-3">
            <div class="flex gap-3 items-center">
              <img
                src="/image/Profil.jpg"
                alt="Profile"
                class="h-12 w-12 rounded-full object-cover"
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
                  IT Developer
                </p>
              </div>
            </div>
            <button
              class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 w-8 h-8 rounded-full flex items-center justify-center transition"
            >
              <i class="fas fa-ellipsis-h"></i>
            </button>
          </div>

          <div
            class="text-[14px] text-gray-900 dark:text-gray-200 leading-relaxed mb-4"
          >
            Let's connect! I'm always open to discussing web development, tech
            innovations, and exciting collaboration opportunities. Feel free to
            reach out to me! 🤝✉️
          </div>

          <div
            class="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-md p-4 mb-4 flex gap-4 items-center"
          >
            <div
              class="w-12 h-12 bg-blue-100 dark:bg-blue-800 flex-shrink-0 flex items-center justify-center rounded-full"
            >
              <i
                class="fas fa-envelope text-blue-600 dark:text-blue-300 text-xl"
              ></i>
            </div>
            <div>
              <h4
                class="font-bold text-[16px] text-gray-900 dark:text-gray-100"
              >
                Contact Me
              </h4>
              <p class="text-[14px] text-gray-600 dark:text-gray-400 mt-1">
                muhammadwisnuainunnajib@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div
          class="px-4 py-2 flex justify-between items-center text-gray-500 dark:text-gray-400 text-[12px] border-t border-gray-100 dark:border-gray-800"
        >
          <div class="flex items-center gap-1">
            <span
              class="bg-blue-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]"
              ><i class="fas fa-thumbs-up"></i
            ></span>
            <span class="ml-1 text-[13px]">42</span>
          </div>
        </div>

        <div
          class="border-t border-gray-200 dark:border-gray-700 p-2 flex justify-center px-4"
        >
          <button
            @click="likedContact = !likedContact"
            :class="[
              'flex items-center gap-2 px-4 py-2 rounded-md transition text-sm font-semibold flex-1 justify-center max-w-[200px]',
              likedContact
                ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10',
            ]"
          >
            <i
              :class="
                likedContact
                  ? 'fas fa-thumbs-up text-lg'
                  : 'far fa-thumbs-up text-lg'
              "
            ></i>
            Like
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useState, useLocalePath } from "#imports";

const isLoading = ref(true);
const guestName = useState("guestName", () => "");
const localePath = useLocalePath();

const likedWelcome = ref(false);
const likedPinned = ref(false);
const likedInternship = ref(false);
const likedProject = ref(false);
const likedContact = ref(false);

onMounted(() => {
  // Simulate network request to trigger skeleton loader
  setTimeout(() => {
    isLoading.value = false;
  }, 1200);
});
</script>
