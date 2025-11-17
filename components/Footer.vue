<template>
  <footer class="bg-gray-900 text-white py-8">
    <div class="container mx-auto text-center">
      <div class="flex justify-center space-x-6 mb-4">
        <a href="#hero" class="hover:text-red-500 transition">Home</a>
        <a href="#about" class="hover:text-red-500 transition">About</a>
        <a href="#services" class="hover:text-red-500 transition">Services</a>
        <a href="#portfolio" class="hover:text-red-500 transition">Portfolio</a>
        <a href="#contact" class="hover:text-red-500 transition">Contact</a>
      </div>
      <div class="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/MwanNajib"
          target="_blank"
          class="hover:text-red-500 transition"
        >
          <i class="fab fa-github text-2xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/muhammadwisnuainunnajib/"
          target="_blank"
          class="hover:text-red-500 transition"
        >
          <i class="fab fa-linkedin text-2xl"></i>
        </a>
        <a
          href="mailto:muhammadwisnuainunnajib@gmail.com"
          class="hover:text-red-500 transition"
        >
          <i class="fas fa-envelope text-2xl"></i>
        </a>
      </div>
      <p class="text-sm text-gray-400">
        © {{ new Date().getFullYear() }} MWAN — All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup></script>
