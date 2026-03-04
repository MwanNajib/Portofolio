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
          <div
            class="flex items-center gap-4 mb-6 pb-2 border-b border-gray-100 dark:border-gray-800"
          >
            <NuxtLink
              :to="localePath('/')"
              class="flex items-center justify-center w-9 h-9 -ml-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shrink-0"
              :title="$t('internship.back_to_home')"
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
                  {{ $t("internship.experience") }}
                </p>
              </div>
            </div>
          </div>

          <!-- Experience Timeline Container -->
          <div class="relative ml-8 pb-4 mt-8">
            <!-- Timeline Line -->
            <div
              class="absolute left-[-1.75rem] top-2 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"
            ></div>

            <!-- Job 1 -->
            <div class="relative mb-12">
              <div
                class="absolute left-[-3rem] top-0 w-10 h-10 bg-white dark:bg-[#1d2226] flex items-center justify-center rounded-full border-[3px] border-blue-50 dark:border-gray-700 z-10 overflow-hidden shadow-sm"
              >
                <img
                  src="/image/logoAirnav.png"
                  alt="AirNav Indonesia"
                  class="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal opacity-90 p-0.5"
                />
              </div>
              <div class="pl-2">
                <h3
                  class="font-bold text-[18px] text-gray-900 dark:text-gray-100 leading-snug"
                >
                  {{ $t("internship.job1.position") }}
                </h3>
                <p
                  class="text-[15px] font-semibold text-blue-600 dark:text-blue-400 mt-0.5"
                >
                  {{ $t("internship.job1.company") }}
                </p>
                <div
                  class="flex items-center flex-wrap text-[13px] text-gray-500 dark:text-gray-400 mt-1.5 gap-2"
                >
                  <span class="flex items-center gap-1.5 whitespace-nowrap"
                    ><i class="far fa-calendar-alt"></i>
                    {{ $t("internship.job1.duration") }}</span
                  >
                  <span class="hidden sm:inline">&bull;</span>
                  <span class="flex items-center gap-1.5 whitespace-nowrap"
                    ><i class="fas fa-map-marker-alt"></i> Semarang, Jawa
                    Tengah</span
                  >
                </div>

                <ul
                  class="mt-4 space-y-2.5 text-[14px] text-gray-700 dark:text-gray-300"
                >
                  <li class="flex items-start gap-3">
                    <i
                      class="fas fa-chevron-right text-[10px] text-blue-500 mt-[6px]"
                    ></i>
                    <span class="leading-relaxed">{{
                      $t("internship.job1.desc1")
                    }}</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i
                      class="fas fa-chevron-right text-[10px] text-blue-500 mt-[6px]"
                    ></i>
                    <span class="leading-relaxed">{{
                      $t("internship.job1.desc2")
                    }}</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i
                      class="fas fa-chevron-right text-[10px] text-blue-500 mt-[6px]"
                    ></i>
                    <span class="leading-relaxed">{{
                      $t("internship.job1.desc3")
                    }}</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i
                      class="fas fa-chevron-right text-[10px] text-blue-500 mt-[6px]"
                    ></i>
                    <span class="leading-relaxed">{{
                      $t("internship.job1.desc4")
                    }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Job 2 -->
            <div class="relative mb-6">
              <div
                class="absolute left-[-3rem] top-0 w-10 h-10 bg-white dark:bg-[#1d2226] flex items-center justify-center rounded-full border-[3px] border-yellow-50 dark:border-gray-700 z-10 overflow-hidden shadow-sm"
              >
                <img
                  src="/image/LogoJasamarga.png"
                  alt="Jasa Marga (JMTO)"
                  class="w-[85%] h-[85%] object-contain"
                />
              </div>
              <div class="pl-2">
                <h3
                  class="font-bold text-[18px] text-gray-900 dark:text-gray-100 leading-snug"
                >
                  {{ $t("internship.job2.position") }}
                </h3>
                <p
                  class="text-[15px] font-semibold text-yellow-600 dark:text-yellow-500 mt-0.5"
                >
                  {{ $t("internship.job2.company") }}
                </p>
                <div
                  class="flex items-center flex-wrap text-[13px] text-gray-500 dark:text-gray-400 mt-1.5 gap-2"
                >
                  <span class="flex items-center gap-1.5 whitespace-nowrap"
                    ><i class="far fa-calendar-alt"></i>
                    {{ $t("internship.job2.duration") }}</span
                  >
                  <span class="hidden sm:inline">&bull;</span>
                  <span class="flex items-center gap-1.5 whitespace-nowrap"
                    ><i class="fas fa-map-marker-alt"></i> Demak, Jawa
                    Tengah</span
                  >
                </div>

                <ul
                  class="mt-4 space-y-2.5 text-[14px] text-gray-700 dark:text-gray-300"
                >
                  <li class="flex items-start gap-3">
                    <i
                      class="fas fa-check text-[12px] text-yellow-500 mt-[4px]"
                    ></i>
                    <span class="leading-relaxed">{{
                      $t("internship.job2.desc1")
                    }}</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i
                      class="fas fa-check text-[12px] text-yellow-500 mt-[4px]"
                    ></i>
                    <span class="leading-relaxed">{{
                      $t("internship.job2.desc2")
                    }}</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i
                      class="fas fa-check text-[12px] text-yellow-500 mt-[4px]"
                    ></i>
                    <span class="leading-relaxed">{{
                      $t("internship.job2.desc3")
                    }}</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i
                      class="fas fa-check text-[12px] text-yellow-500 mt-[4px]"
                    ></i>
                    <span class="leading-relaxed">{{
                      $t("internship.job2.desc4")
                    }}</span>
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
import { useLocalePath } from "#imports";

const isLoading = ref(true);
const localePath = useLocalePath();

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
</script>
