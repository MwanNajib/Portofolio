<template>
  <section
    id="hero"
    class="min-h-screen flex items-center bg-gradient-to-br from-gray-100 to-gray-200"
  >
    <div class="container mx-auto px-6 text-center" data-aos="fade-up">
      <h1 class="text-5xl md:text-7xl font-extrabold text-gray-800 mb-4 h-20">
        {{ typedText }}<span class="cursor-blink">|</span>
      </h1>
      <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
        Fresh Graduate Computer Engineering Technology Student | Web Developer
        Enthusiast | Engineering & Maintenance Enthusiast.
      </p>
      <a
        href="#portfolio"
        class="bg-teal-600 text-white font-bold px-8 py-4 rounded-full hover:bg-teal-700 transition-all duration-300 shadow-lg transform hover:scale-105"
      >
        Portofolio
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const typedText = ref("");
const fullText = "Muhammad Wisnu Ainun Najib";
let charIndex = 0;
let typingInterval;

const type = () => {
  if (charIndex < fullText.length) {
    typedText.value += fullText.charAt(charIndex);
    charIndex++;
  } else {
    clearInterval(typingInterval);
    setTimeout(() => {
      charIndex = 0;
      typedText.value = "";
      typingInterval = setInterval(type, 150);
    }, 2000);
  }
};

onMounted(() => {
  typingInterval = setInterval(type, 150);
});

onUnmounted(() => {
  clearInterval(typingInterval);
});
</script>

<style scoped>
.cursor-blink {
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
