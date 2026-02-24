<template>
  <section id="internship" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <h2
        class="text-4xl font-bold text-center text-gray-800 mb-12"
        data-aos="fade-up"
      >
        {{ $t("internship.title") }}
      </h2>
      <div class="relative max-w-5xl mx-auto">
        <!-- Vertical Line -->
        <div
          class="absolute left-4 md:left-1/2 h-full w-1 bg-gray-200 transform md:-translate-x-1/2"
        ></div>

        <!-- Timeline Items Container -->
        <div class="space-y-8">
          <!-- ITEM 1 -->
          <div class="relative w-full" data-aos="fade-right">
            <div
              class="md:flex items-center md:justify-between md:flex-row-reverse"
            >
              <div class="md:w-5/12"></div>
              <div
                class="z-10 flex-shrink-0 bg-teal-500 shadow-xl w-8 h-8 rounded-full flex items-center justify-center absolute left-4 -translate-x-1/2 md:static md:translate-x-0"
              >
                <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
              </div>
              <div
                class="bg-gray-100 rounded-lg shadow-xl w-auto md:w-5/12 ml-10 md:ml-0 px-6 py-4"
              >
                <h3 class="mb-3 font-bold text-gray-800 text-xl">
                  {{ $t("internship.job1.company") }}
                </h3>
                <p class="text-sm leading-snug tracking-wide text-gray-600">
                  <strong>{{ $t("internship.position") }}</strong>
                  {{ $t("internship.job1.position") }}<br />
                  <strong>{{ $t("internship.duration") }}</strong>
                  {{ $t("internship.job1.duration") }}
                </p>
                <ul class="list-disc list-inside mt-2 text-sm text-gray-500">
                  <li>{{ $t("internship.job1.desc1") }}</li>
                  <li>{{ $t("internship.job1.desc2") }}</li>
                  <li>{{ $t("internship.job1.desc3") }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- ITEM 2 -->
          <div class="relative w-full" data-aos="fade-left">
            <div class="md:flex items-center md:justify-between">
              <div class="md:w-5/12"></div>
              <div
                class="z-10 flex-shrink-0 bg-teal-500 shadow-xl w-8 h-8 rounded-full flex items-center justify-center absolute left-4 -translate-x-1/2 md:static md:translate-x-0"
              >
                <h1 class="mx-auto font-semibold text-lg text-white">2</h1>
              </div>
              <div
                class="bg-gray-100 rounded-lg shadow-xl w-auto md:w-5/12 ml-10 md:ml-0 px-6 py-4"
              >
                <h3 class="mb-3 font-bold text-gray-800 text-xl">
                  {{ $t("internship.job2.company") }}
                </h3>
                <p class="text-sm leading-snug tracking-wide text-gray-600">
                  <strong>{{ $t("internship.position") }}</strong>
                  {{ $t("internship.job2.position") }}<br />
                  <strong>{{ $t("internship.duration") }}</strong>
                  {{ $t("internship.job2.duration") }}
                </p>
                <ul class="list-disc list-inside mt-2 text-sm text-gray-500">
                  <li>{{ $t("internship.job2.desc1") }}</li>
                  <li>{{ $t("internship.job2.desc2") }}</li>
                  <li>{{ $t("internship.job2.desc3") }}</li>
                  <li>{{ $t("internship.job2.desc4") }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- ITEM 3 -->
          <!-- <div class="relative w-full" data-aos="fade-right">
            <div
              class="md:flex items-center md:justify-between md:flex-row-reverse"
            >
              <div class="md:w-5/12"></div>
              <div
                class="z-10 flex-shrink-0 bg-teal-500 shadow-xl w-8 h-8 rounded-full flex items-center justify-center absolute left-4 -translate-x-1/2 md:static md:translate-x-0"
              >
                <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
              </div>
              <div
                class="bg-gray-100 rounded-lg shadow-xl w-auto md:w-5/12 ml-10 md:ml-0 px-6 py-4"
              >
                <h3 class="mb-3 font-bold text-gray-800 text-xl">
                  Nama Perusahaan
                </h3>
                <p class="text-sm leading-snug tracking-wide text-gray-600">
                  <strong>Posisi:</strong> Engineering and Maintenance<br />
                  <strong>Durasi:</strong> Feb 2023 - Jun 2023
                </p>
                <ul class="list-disc list-inside mt-2 text-sm text-gray-500">
                  <li>Melakukan pemeliharaan preventif pada sistem.</li>
                  <li>Membantu dalam pemecahan masalah teknis.</li>
                  <li>Berkontribusi pada proyek pengembangan sistem.</li>
                </ul>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Komponen ini menggunakan AOS untuk animasi
</script>
