<template>
  <div class="w-full h-full flex items-center justify-center">
    <!-- Skeleton Loading -->
    <template v-if="isLoading">
      <div
        class="w-full max-w-2xl bg-white dark:bg-[#1d2226] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 sm:p-10 animate-pulse"
      >
        <div class="flex items-center gap-4 mb-8">
          <div
            class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"
          ></div>
          <div class="space-y-2">
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
            <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
          </div>
        </div>
        <div class="space-y-6">
          <div class="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
          <div class="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
          <div class="h-32 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
          <div
            class="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded-xl mt-4"
          ></div>
        </div>
      </div>
    </template>

    <!-- Actual Content -->
    <template v-else>
      <div
        class="w-full max-w-2xl bg-white dark:bg-[#1d2226] rounded-xl shadow-md border border-gray-100 dark:border-gray-800 transition-colors animate-in fade-in duration-500 overflow-hidden"
      >
        <!-- Header Profile -->
        <div
          class="flex items-center gap-4 p-5 sm:p-6 sm:px-8 border-b border-gray-100 dark:border-gray-800 bg-gradient-to-r from-gray-50 to-white dark:from-[#1d2226] dark:to-[#22282d]"
        >
          <NuxtLink
            :to="localePath('/')"
            class="flex items-center justify-center w-10 h-10 -ml-2 rounded-full bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm border border-gray-100 dark:border-gray-700 transition-all shrink-0 z-10 hover:scale-105"
            :title="$t('internship.back_to_home')"
          >
            <i class="fas fa-arrow-left"></i>
          </NuxtLink>

          <div class="flex gap-4 items-center">
            <img
              src="/image/Profil.jpg"
              alt="Profile"
              class="h-12 w-12 rounded-full object-cover shadow-sm ring-2 ring-white dark:ring-[#1d2226]"
            />
            <div class="flex flex-col justify-center">
              <h3
                class="font-bold text-[16px] text-slate-800 dark:text-gray-100 leading-none mb-1.5 tracking-tight"
              >
                Muhammad Wisnu Ainun Najib
              </h3>
              <p
                class="text-[13px] text-gray-500 dark:text-gray-400 font-medium leading-none"
              >
                {{ $t("contact.title") }}
              </p>
            </div>
          </div>
        </div>

        <!-- Contact Form Section -->
        <div class="p-6 sm:p-10">
          <div class="text-center mb-8">
            <h2
              class="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-2 tracking-tight"
            >
              Let's Talk! 💬
            </h2>
            <p class="text-gray-500 dark:text-gray-400 text-[14px]">
              Feel free to send me a message!
            </p>
          </div>

          <form
            class="flex flex-col gap-5 sm:gap-6"
            @submit.prevent="sendMessage"
          >
            <!-- Name -->
            <div>
              <label
                class="block text-[14px] font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1"
              >
                {{ $t("contact.name") }} <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400"
                >
                  <i class="fas fa-user text-[14px]"></i>
                </div>
                <input
                  v-model="formData.name"
                  type="text"
                  :placeholder="$t('contact.namePlaceholder')"
                  class="pl-11 w-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#15191c] text-gray-900 dark:text-gray-100 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-sm placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  required
                />
              </div>
            </div>

            <!-- Email -->
            <div>
              <label
                class="block text-[14px] font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1"
              >
                {{ $t("contact.email") }} <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400"
                >
                  <i class="fas fa-at text-[14px]"></i>
                </div>
                <input
                  v-model="formData.email"
                  type="email"
                  :placeholder="$t('contact.emailPlaceholder')"
                  class="pl-11 w-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#15191c] text-gray-900 dark:text-gray-100 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-sm placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  required
                />
              </div>
            </div>

            <!-- Message -->
            <div class="flex-1 flex flex-col">
              <label
                class="block text-[14px] font-bold text-gray-700 dark:text-gray-300 mb-2 ml-1"
              >
                {{ $t("contact.message") }} <span class="text-red-500">*</span>
              </label>
              <textarea
                v-model="formData.message"
                rows="5"
                :placeholder="$t('contact.messagePlaceholder')"
                class="w-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#15191c] text-gray-900 dark:text-gray-100 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-sm resize-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
                required
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="mt-2 group relative w-full flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-[15px] py-3.5 px-6 rounded-xl transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5 overflow-hidden"
            >
              <span class="relative z-10">{{ $t("contact.btn") }}</span>
              <i
                class="fas fa-paper-plane relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              ></i>
              <!-- Button hover effect overlay -->
              <div
                class="absolute inset-0 h-full w-full bg-white/20 scale-0 group-hover:scale-100 rounded-xl transition-transform origin-center duration-300"
              ></div>
            </button>
          </form>
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

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const sendMessage = () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message)
    return;

  const subject = `Message from ${formData.value.name}`;
  const body = `${formData.value.message}\n\nFrom: ${formData.value.name} (${formData.value.email})`;

  const mailtoLink = `mailto:muhammadwisnuainunnajib@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;

  // Clear form after delay optionally
  setTimeout(() => {
    formData.value.name = "";
    formData.value.email = "";
    formData.value.message = "";
  }, 1000);
};

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 800);
});
</script>
