<template>
  <nav
    class="bg-white/80 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-300"
  >
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <NuxtLink to="/" class="flex items-center space-x-3">
        <img
          src="/image/pnav2.jpg"
          alt="Foto Profil"
          class="h-10 w-10 rounded-full object-cover"
        />
        <span class="text-2xl font-bold text-gray-800"> Portofolio </span>
      </NuxtLink>
      <div class="hidden md:flex space-x-8 text-gray-700 font-medium">
        <a href="#hero" class="hover:text-teal-600 transition">HOME</a>
        <a href="#about" class="hover:text-teal-600 transition">ABOUT</a>
        <a href="#internship" class="hover:text-teal-600 transition"
          >INTERNSHIP</a
        >
        <a href="#portfolio" class="hover:text-teal-600 transition">PROJECTS</a>
        <a href="#contact" class="hover:text-teal-600 transition">CONTACT</a>
      </div>

      <button
        @click="toggleMenu"
        class="md:hidden text-gray-700 focus:outline-none"
      >
        <!-- Icon for hamburger menu -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            v-if="!isOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div v-if="isOpen" class="md:hidden bg-white shadow-lg">
        <div
          class="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium"
        >
          <a
            href="#hero"
            @click="toggleMenu"
            class="hover:text-teal-600 transition"
            >HOME</a
          >
          <a
            href="#about"
            @click="toggleMenu"
            class="hover:text-teal-600 transition"
            >ABOUT</a
          >
          <a
            href="#internship"
            @click="toggleMenu"
            class="hover:text-teal-600 transition"
            >INTERNSHIP</a
          >
          <a
            href="#portfolio"
            @click="toggleMenu"
            class="hover:text-teal-600 transition"
            >PROJECTS</a
          >
          <a
            href="#contact"
            @click="toggleMenu"
            class="hover:text-teal-600 transition"
            >CONTACT</a
          >
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
