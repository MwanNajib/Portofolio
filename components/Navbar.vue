<template>
  <nav
    class="bg-white dark:bg-[#1d2226] sticky top-0 left-0 w-full z-50 border-b border-gray-200 dark:border-gray-700 transition-colors"
  >
    <div
      class="max-w-[1128px] mx-auto px-4 lg:px-0 flex justify-between items-center h-[52px]"
    >
      <!-- Left side: Personal Branding/Logo -->
      <div class="flex items-center">
        <NuxtLink
          :to="localePath('/')"
          class="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          <span class="text-[#0a66c2] dark:text-blue-400">Wisnu's</span>
          Portfolio
        </NuxtLink>
      </div>

      <!-- Right side: Menu Icons -->
      <div
        class="flex space-x-1 sm:space-x-2 md:space-x-4 h-full items-center text-gray-500 dark:text-gray-400"
      >
        <NuxtLink
          :to="localePath('/')"
          active-class="text-gray-900 border-b-[2px] border-gray-900 dark:text-white dark:border-white"
          class="flex flex-col items-center justify-center cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors w-[50px] md:w-[70px] h-full"
        >
          <Home class="w-[20px] h-[20px] mb-[2px]" />
          <span
            class="text-[10px] md:text-[12px] hidden sm:block mt-[-2px] uppercase"
            >{{ $t("nav.home") || "Beranda" }}</span
          >
        </NuxtLink>
        <NuxtLink
          :to="localePath('/about')"
          active-class="text-gray-900 border-b-[2px] border-gray-900 dark:text-white dark:border-white"
          class="flex flex-col items-center justify-center cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors w-[50px] md:w-[70px] h-full"
        >
          <User class="w-[20px] h-[20px] mb-[2px]" />
          <span
            class="text-[10px] md:text-[12px] hidden sm:block mt-[-2px] uppercase"
            >{{ $t("nav.about") || "Tentang" }}</span
          >
        </NuxtLink>
        <NuxtLink
          :to="localePath('/internship')"
          active-class="text-gray-900 border-b-[2px] border-gray-900 dark:text-white dark:border-white"
          class="flex flex-col items-center justify-center cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors w-[50px] md:w-[70px] h-full"
        >
          <Building class="w-[20px] h-[20px] mb-[2px]" />
          <span
            class="text-[10px] md:text-[12px] hidden sm:block mt-[-2px] uppercase"
            >{{ $t("nav.internship") || "Magang" }}</span
          >
        </NuxtLink>
        <NuxtLink
          :to="localePath('/portfolio')"
          active-class="text-gray-900 border-b-[2px] border-gray-900 dark:text-white dark:border-white"
          class="flex flex-col items-center justify-center cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors w-[50px] md:w-[70px] h-full relative"
        >
          <Briefcase class="w-[20px] h-[20px] mb-[2px]" />
          <span
            class="text-[10px] md:text-[12px] hidden sm:block mt-[-2px] uppercase"
            >{{ $t("nav.projects") || "Proyek" }}</span
          >
        </NuxtLink>
        <NuxtLink
          :to="localePath('/contact')"
          active-class="text-gray-900 border-b-[2px] border-gray-900 dark:text-white dark:border-white"
          class="flex flex-col items-center justify-center cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors w-[50px] md:w-[70px] h-full border-r border-gray-200 dark:border-gray-700 pr-2 md:pr-4"
        >
          <MessageSquare class="w-[20px] h-[20px] mb-[2px]" />
          <span
            class="text-[10px] md:text-[12px] hidden sm:block mt-[-2px] uppercase"
            >{{ $t("nav.contact") || "Kontak" }}</span
          >
        </NuxtLink>

        <!-- Profil "Saya" (Profile Dropdown) -->
        <div class="relative flex items-center h-full">
          <div
            class="flex flex-col items-center justify-center pl-2 md:pl-4 cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors min-w-[50px] md:min-w-[70px] h-[52px]"
            @click="isProfileMenuOpen = !isProfileMenuOpen"
          >
            <img
              src="/image/Profil.jpg"
              alt="Profile"
              class="w-[24px] h-[24px] rounded-full object-cover mb-[2px] transition-transform shadow-sm"
              :class="{ 'scale-110': isProfileMenuOpen }"
            />
            <div
              class="text-[10px] md:text-[12px] hidden sm:flex items-center gap-1 mt-[-2px] whitespace-nowrap"
            >
              Saya
              <ChevronDown
                class="w-3 h-3 text-gray-500 transition-transform"
                :class="{ 'rotate-180': isProfileMenuOpen }"
              />
            </div>
          </div>

          <!-- Full Screen Invisible Overlay to capture outside clicks -->
          <div
            v-if="isProfileMenuOpen"
            class="fixed inset-0 z-40"
            @click="isProfileMenuOpen = false"
          ></div>

          <!-- Dropdown Menu -->
          <div
            v-if="isProfileMenuOpen"
            class="absolute top-[52px] right-0 translate-y-1 w-[260px] bg-white dark:bg-[#1d2226] border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl flex flex-col text-left z-50 cursor-default animate-in fade-in zoom-in-95 duration-200 overflow-hidden"
          >
            <!-- Profile Link Header -->
            <NuxtLink
              :to="localePath('/Profil')"
              class="flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              @click="isProfileMenuOpen = false"
            >
              <img
                src="/image/Profil.jpg"
                alt="Profile"
                class="w-[48px] h-[48px] rounded-full object-cover shadow-sm"
              />
              <div class="flex flex-col">
                <span
                  class="font-bold text-gray-900 dark:text-white text-[15px] leading-tight"
                  >Muhammad Wisnu...
                </span>
                <span
                  class="text-blue-600 dark:text-blue-400 font-semibold text-[13px] mt-1 hover:underline"
                  >Lihat Profil</span
                >
              </div>
            </NuxtLink>

            <!-- Language Selection -->
            <div
              class="px-4 py-3 flex justify-between items-center border-b border-gray-100 dark:border-gray-800"
            >
              <span
                class="text-[14px] font-medium text-gray-700 dark:text-gray-300"
              >
                Bahasa / Language
              </span>
              <div
                class="flex gap-1 text-[12px] font-medium text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1.5 rounded-md"
              >
                <button
                  @click="changeLocale('id')"
                  :class="{
                    'text-[#0a66c2] font-bold dark:text-blue-400 bg-white dark:bg-gray-700 shadow-sm rounded-sm':
                      locale === 'id',
                  }"
                  class="cursor-pointer hover:text-gray-900 dark:hover:text-white px-2 py-0.5 transition-colors"
                >
                  ID
                </button>
                <button
                  @click="changeLocale('en')"
                  :class="{
                    'text-[#0a66c2] font-bold dark:text-blue-400 bg-white dark:bg-gray-700 shadow-sm rounded-sm':
                      locale === 'en',
                  }"
                  class="cursor-pointer hover:text-gray-900 dark:hover:text-white px-2 py-0.5 transition-colors"
                >
                  EN
                </button>
              </div>
            </div>

            <!-- Dark Mode Toggle -->
            <div
              class="px-4 py-3 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition select-none"
              @click="toggleDarkMode"
            >
              <div class="flex items-center gap-2">
                <Moon v-if="isDark" class="w-[18px] h-[18px] text-gray-300" />
                <Sun
                  v-else
                  class="w-[18px] h-[18px] text-gray-600 dark:text-gray-300"
                />
                <span
                  class="text-[14px] font-medium text-gray-700 dark:text-gray-300"
                >
                  Mode Gelap
                </span>
              </div>
              <!-- Toggle switch UI -->
              <div
                class="w-10 h-5 rounded-full flex items-center p-1 transition-colors duration-300 shadow-inner border border-gray-200 dark:border-gray-600"
                :class="
                  isDark ? 'bg-green-600 border-green-600' : 'bg-gray-200'
                "
              >
                <div
                  class="w-[14px] h-[14px] bg-white rounded-full shadow-md transform transition-transform duration-300"
                  :class="isDark ? 'translate-x-5' : 'translate-x-0'"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n, useLocalePath, useState } from "#imports";
import { useRouter } from "vue-router";
import {
  Home,
  User,
  Building,
  Briefcase,
  MessageSquare,
  ChevronDown,
  Sun,
  Moon,
} from "lucide-vue-next";

// i18n
const { locale, setLocale } = useI18n();
const localePath = useLocalePath();
const router = useRouter();

const isProfileMenuOpen = ref(false);
const isDark = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme-mode", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme-mode", "light");
  }
};

const changeLocale = async (newLocale) => {
  await setLocale(newLocale);
  isProfileMenuOpen.value = false;
};

onMounted(() => {
  // Set initial theme
  const savedTheme = localStorage.getItem("theme-mode");
  if (
    savedTheme === "dark" ||
    (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  } else {
    isDark.value = false;
    document.documentElement.classList.remove("dark");
  }
});
</script>
