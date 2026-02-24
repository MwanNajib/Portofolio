<template>
  <section id="portfolio" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2
        class="text-4xl font-bold text-center text-gray-800 mb-12"
        data-aos="fade-up"
      >
        {{ $t("portfolio.title") }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- Project Card 1 -->
        <div
          class="project-card bg-white rounded-lg shadow-lg overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src="/image/portofolio1.jpg"
            alt="Project NavEvent"
            class="w-full h-56 object-cover"
          />
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-2 text-gray-800">
              {{ $t("portfolio.proj1.title") }}
            </h3>
            <p class="text-gray-600 mb-4">
              {{ $t("portfolio.proj1.desc") }}
            </p>
            <a
              href="https://github.com/MwanNajib"
              target="_blank"
              class="text-red-600 font-semibold hover:underline"
              >{{ $t("portfolio.detail") }}</a
            >
          </div>
        </div>

        <!-- Project Card 2 -->
        <div
          class="project-card bg-white rounded-lg shadow-lg overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src="/image/portofolio2.jpg"
            alt="Project Website Makroni Kapok-Kapok"
            class="w-full h-56 object-cover"
          />
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-2 text-gray-800">
              {{ $t("portfolio.proj2.title") }}
            </h3>
            <p class="text-gray-600 mb-4">
              {{ $t("portfolio.proj2.desc") }}
            </p>
            <a
              href="https://github.com/MwanNajib"
              target="_blank"
              class="text-red-600 font-semibold hover:underline"
              >{{ $t("portfolio.detail") }}</a
            >
          </div>
        </div>

        <!-- Project Card 3 -->
        <div
          class="project-card bg-white rounded-lg shadow-lg overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src="/image/portofolio3.png"
            alt="Project Translator"
            class="w-full h-56 object-cover"
          />
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-2 text-gray-800">
              {{ $t("portfolio.proj3.title") }}
            </h3>
            <p class="text-gray-600 mb-4">
              {{ $t("portfolio.proj3.desc") }}
            </p>
            <a
              href="https://github.com/MwanNajib"
              target="_blank"
              class="text-red-600 font-semibold hover:underline"
              >{{ $t("portfolio.detail") }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Script untuk efek 3D akan ditambahkan melalui CSS global
</script>

<style scoped>
.project-card {
  transition:
    transform 0.5s ease,
    box-shadow 0.5s ease;
  transform-style: preserve-3d;
}

.project-card:hover {
  transform: perspective(1000px) rotateY(5deg) rotateX(5deg)
    scale3d(1.05, 1.05, 1.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}
</style>
