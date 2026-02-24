<template>
  <section id="about" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div
        class="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12"
      >
        <div class="md:w-1/3" data-aos="fade-right">
          <img
            src="/image/aboutme.jpg"
            alt="Foto Tentang Saya"
            class="rounded-full shadow-lg w-72 h-72 mx-auto object-cover object-[50%_30%]"
          />
        </div>
        <div class="md:w-2/3" data-aos="fade-left">
          <h2
            class="text-4xl font-semibold text-gray-800 mb-4 text-center md:text-left"
          >
            {{ $t("about.title") }}
          </h2>
          <p class="text-lg text-gray-600 mb-4 text-center md:text-justify">
            {{ $t("about.description") }}

            <a
              href="https://drive.google.com/file/d/1hbfi8GWl3vcckYaw1qMkt6j6vGhpH23t/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              class="text-red-600 font-bold hover:underline"
            >
              (CV) </a
            >.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
