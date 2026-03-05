<template>
  <div
    class="bg-[#f4f2ee] dark:bg-black w-full min-h-screen font-sans text-gray-800 dark:text-gray-300 transition-colors overflow-x-clip flex flex-col"
  >
    <Navbar />

    <!-- Padding Top offsets the 52px fixed navbar. Padding Bottom offsets the 48px fixed footer -->
    <main
      class="flex-1 w-full max-w-[1128px] mx-auto pt-[76px] pb-[76px] px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-4 gap-6 items-start"
    >
      <!-- Left Sidebar (Hide on Profile Page) -->
      <aside
        v-if="!isProfilePage"
        class="lg:col-span-1 flex flex-col gap-4 lg:sticky lg:top-[76px] z-10 transition-transform"
      >
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
              class="h-[72px] bg-gray-200 dark:bg-gray-700 w-full relative overflow-hidden"
            >
              <!-- Background Image -->
              <img
                src="/image/BannerProfil.jpg"
                alt="Profile Banner"
                class="absolute inset-0 w-full h-full object-cover"
              />
              <!-- Gradient Overlay for better text readability -->
              <div
                class="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent"
              ></div>
            </div>

            <!-- Avatar -->
            <div class="absolute top-[28px] left-4">
              <div class="relative w-[72px] h-[72px]">
                <img
                  src="/image/Profil.jpg"
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
                Frontend Developer - IT Develop...
              </p>
              <p class="text-[12px] text-gray-500 dark:text-gray-400 mt-2">
                Demak, Jawa Tengah
              </p>

              <div class="flex items-center gap-2 mt-3">
                <div
                  class="w-[18px] h-[18px] rounded-full overflow-hidden bg-white border border-gray-200"
                >
                  <img
                    src="/image/logoAirnav.png"
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
      <aside
        class="lg:col-span-1 flex flex-col gap-4 lg:sticky lg:top-[76px] z-10 transition-transform"
      >
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
              <div class="overflow-hidden">
                <p
                  class="text-[12px] font-semibold text-gray-800 dark:text-gray-200"
                >
                  {{ $t("contact.email") }}
                </p>
                <a
                  href="mailto:muhammadwisnuainunnajib@gmail.com"
                  class="text-[12px] text-blue-600 hover:underline truncate block w-full"
                  >muhammadwisnuainunnajib@gmail.com</a
                >
              </div>
            </div>

            <div class="flex items-start gap-2">
              <i
                class="fab fa-linkedin text-blue-700 dark:text-blue-400 mt-1"
              ></i>
              <div class="overflow-hidden">
                <p
                  class="text-[12px] font-semibold text-gray-800 dark:text-gray-200"
                >
                  {{ $t("contact.linkedin") }}
                </p>
                <a
                  href="https://www.linkedin.com/in/muhammadwisnuainunnajib/"
                  target="_blank"
                  class="text-[12px] text-blue-600 hover:underline truncate block w-full"
                >
                  linkedin.com/in/muhammadwisnuainunnajib
                </a>
              </div>
            </div>

            <div class="flex items-start gap-2">
              <i
                class="fab fa-github text-gray-800 dark:text-gray-300 mt-1"
              ></i>
              <div class="overflow-hidden">
                <p
                  class="text-[12px] font-semibold text-gray-800 dark:text-gray-200"
                >
                  {{ $t("contact.github") }}
                </p>
                <a
                  href="https://github.com/MwanNajib"
                  target="_blank"
                  class="text-[12px] text-blue-600 hover:underline truncate block w-full"
                >
                  github.com/MwanNajib
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Core Skills & Tools -->
        <!-- <div
          class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors"
        >
          <h2
            class="font-semibold text-[14px] text-gray-900 dark:text-gray-100 mb-3"
          >
            {{ $t("sidebar.skills_tools") }}
          </h2>
          <div class="flex flex-wrap gap-2.5 mt-1">
            <span
              class="group flex items-center gap-1.5 bg-gray-50 dark:bg-[#22282d] hover:bg-white dark:hover:bg-[#2a3036] border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-500/50 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 text-[12px] px-3 py-1.5 rounded-lg font-medium transition-all shadow-sm hover:shadow cursor-default"
            >
              <i
                class="fab fa-html5 text-orange-500 group-hover:scale-110 transition-transform"
              ></i>
              HTML5
            </span>
            <span
              class="group flex items-center gap-1.5 bg-gray-50 dark:bg-[#22282d] hover:bg-white dark:hover:bg-[#2a3036] border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-[12px] px-3 py-1.5 rounded-lg font-medium transition-all shadow-sm hover:shadow cursor-default"
            >
              <i
                class="fab fa-css3-alt text-blue-500 group-hover:scale-110 transition-transform"
              ></i>
              CSS3
            </span>
            <span
              class="group flex items-center gap-1.5 bg-gray-50 dark:bg-[#22282d] hover:bg-white dark:hover:bg-[#2a3036] border border-gray-200 dark:border-gray-700 hover:border-yellow-300 dark:hover:border-yellow-500/50 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-500 text-[12px] px-3 py-1.5 rounded-lg font-medium transition-all shadow-sm hover:shadow cursor-default"
            >
              <i
                class="fab fa-js text-yellow-500 group-hover:scale-110 transition-transform"
              ></i>
              JavaScript
            </span>
            <span
              class="group flex items-center gap-1.5 bg-gray-50 dark:bg-[#22282d] hover:bg-white dark:hover:bg-[#2a3036] border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500/50 text-gray-700 dark:text-gray-300 hover:text-[#3178C6] dark:hover:text-[#3178C6] text-[12px] px-3 py-1.5 rounded-lg font-medium transition-all shadow-sm hover:shadow cursor-default"
            >
              <i
                class="fas fa-code text-[#3178C6] group-hover:scale-110 transition-transform"
              ></i>
              TypeScript
            </span>
            <span
              class="group flex items-center gap-1.5 bg-gray-50 dark:bg-[#22282d] hover:bg-white dark:hover:bg-[#2a3036] border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-500/50 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500 text-[12px] px-3 py-1.5 rounded-lg font-medium transition-all shadow-sm hover:shadow cursor-default"
            >
              <i
                class="fab fa-vuejs text-green-500 group-hover:scale-110 transition-transform"
              ></i>
              Vue.js
            </span>
            <span
              class="group flex items-center gap-1.5 bg-gray-50 dark:bg-[#22282d] hover:bg-white dark:hover:bg-[#2a3036] border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-500/50 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500 text-[12px] px-3 py-1.5 rounded-lg font-medium transition-all shadow-sm hover:shadow cursor-default"
            >
              <i
                class="fas fa-mountain text-green-600 group-hover:scale-110 transition-transform"
              ></i>
              Nuxt 3
            </span>
            <span
              class="group flex items-center gap-1.5 bg-gray-50 dark:bg-[#22282d] hover:bg-white dark:hover:bg-[#2a3036] border border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-500/50 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 text-[12px] px-3 py-1.5 rounded-lg font-medium transition-all shadow-sm hover:shadow cursor-default"
            >
              <i
                class="fas fa-wind text-cyan-500 group-hover:scale-110 transition-transform"
              ></i>
              Tailwind CSS
            </span>
            <span
              class="group flex items-center gap-1.5 bg-gray-50 dark:bg-[#22282d] hover:bg-white dark:hover:bg-[#2a3036] border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-500/50 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 text-[12px] px-3 py-1.5 rounded-lg font-medium transition-all shadow-sm hover:shadow cursor-default"
            >
              <i
                class="fab fa-git-alt text-red-500 group-hover:scale-110 transition-transform"
              ></i>
              Git
            </span>
            <span
              class="group flex items-center gap-1.5 bg-gray-50 dark:bg-[#22282d] hover:bg-white dark:hover:bg-[#2a3036] border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500/50 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-[12px] px-3 py-1.5 rounded-lg font-medium transition-all shadow-sm hover:shadow cursor-default"
            >
              <i
                class="fas fa-database text-indigo-500 group-hover:scale-110 transition-transform"
              ></i>
              SQL
            </span>
            <span
              class="group flex items-center gap-1.5 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/40 dark:hover:to-pink-900/40 border border-purple-200 dark:border-purple-800 text-gray-800 dark:text-gray-200 text-[12px] px-3 py-1.5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-default relative overflow-hidden"
            >
              <span
                class="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out -translate-x-full z-0"
              ></span>
              <i
                class="fas fa-space-shuttle text-purple-600 dark:text-purple-400 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:-rotate-12 transition-all duration-300 z-10 relative relative z-10"
              ></i>
              <span
                class="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 z-10 relative"
                >Antigravity</span
              >
            </span>
          </div>
        </div> -->
      </aside>
    </main>

    <!-- FOOTER -->
    <footer
      class="p-3 text-center text-xs text-gray-400 dark:text-gray-600 bg-white dark:bg-[#1d2226] border-t border-gray-200 dark:border-gray-700 w-full fixed bottom-0 left-0 z-50 h-[48px] flex items-center justify-center"
    >
      <div>
        &copy; 2026 Developed by
        <span class="font-bold text-[#0a66c2] dark:text-blue-400"
          >Muhammad Wisnu Ainun Najib</span
        >
      </div>
    </footer>
    <div
      v-if="showWelcomeModal"
      class="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      <div class="absolute inset-0 bg-slate-950/40 backdrop-blur-md"></div>

      <div
        class="relative w-full max-w-md overflow-hidden rounded-xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] animate-in fade-in zoom-in duration-500 dark:bg-[#1b1f23] border border-gray-100 dark:border-gray-800"
      >
        <div
          class="h-1.5 w-full bg-gradient-to-r from-blue-600 to-indigo-600"
        ></div>

        <div class="p-10">
          <div class="flex justify-center mb-8">
            <div
              class="w-14 h-14 border-2 border-blue-600/20 rounded-full flex items-center justify-center"
            >
              <div
                class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30"
              >
                <i class="fas fa-user-tie text-lg"></i>
              </div>
            </div>
          </div>

          <div class="text-center mb-10">
            <h2
              class="text-2xl font-semibold text-gray-900 dark:text-white mb-3 tracking-tight"
            >
              Selamat Datang
            </h2>
            <p
              class="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-[280px] mx-auto"
            >
              Silakan masukkan nama Anda untuk memulai pengalaman navigasi
              portofolio yang dipersonalisasi.
            </p>
          </div>

          <form @submit.prevent="saveGuestName" class="space-y-6">
            <div class="relative group">
              <label
                class="block text-[11px] font-bold uppercase tracking-widest text-blue-600 mb-2 ml-1"
                >Nama Lengkap / Panggilan</label
              >
              <input
                v-model="tempName"
                type="text"
                placeholder="Contoh : Gibran Rakabuming Raka"
                required
                class="w-full bg-gray-50 dark:bg-[#24292e] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
              />
            </div>

            <button
              type="submit"
              class="w-full bg-[#0a66c2] hover:bg-[#004182] text-white text-sm font-bold py-4 rounded-lg transition-all shadow-md hover:shadow-lg flex justify-center items-center gap-3 tracking-wide"
            >
              <span>MASUK KE PORTOFOLIO</span>
              <i class="fas fa-chevron-right text-[10px] opacity-70"></i>
            </button>
          </form>

          <div
            class="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 text-center"
          >
            <span class="text-[10px] text-gray-400 uppercase tracking-[0.2em]"
              >Portfolio Interactive Identity</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useRoute, useLocalePath, useState } from "#imports";

const route = useRoute();
const localePath = useLocalePath();

const isProfilePage = computed(() => {
  return route.path.toLowerCase().includes("/profil");
});

const showWelcomeModal = ref(false);
const tempName = ref("");
const guestName = useState("guestName", () => "");

onMounted(() => {
  const savedName = localStorage.getItem("guest-name");
  if (savedName) {
    guestName.value = savedName;
  } else {
    // Beri jeda sedikit agar modal tidak langsung numpuk saat load pertama
    setTimeout(() => {
      showWelcomeModal.value = true;
    }, 500);
  }
});

const saveGuestName = () => {
  if (tempName.value.trim()) {
    guestName.value = tempName.value.trim();
    localStorage.setItem("guest-name", guestName.value);
    showWelcomeModal.value = false;
  }
};
</script>
