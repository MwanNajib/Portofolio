<template>
  <div class="flex flex-col gap-4 w-full">
    <!-- Create Post Box -->
    <div
      class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors"
    >
      <div class="flex gap-3 items-center">
        <img
          src="/image/pnav2.jpg"
          alt="Profile"
          class="h-12 w-12 rounded-full object-cover"
        />
        <button
          class="flex-grow bg-white dark:bg-[#1d2226] hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-400 dark:border-gray-500 text-gray-500 dark:text-gray-400 text-left px-4 py-3 rounded-full text-sm font-medium transition-colors"
        >
          What are you working on today?
        </button>
      </div>
      <div class="flex justify-between items-center mt-3 pt-3 px-2">
        <button
          class="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 px-3 py-2 rounded-md transition text-sm font-semibold"
        >
          <i class="fas fa-image text-blue-500 text-lg"></i> Photo
        </button>
        <button
          class="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 px-3 py-2 rounded-md transition text-sm font-semibold"
        >
          <i class="fas fa-video text-green-600 text-lg"></i> Video
        </button>
        <button
          class="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 px-3 py-2 rounded-md transition text-sm font-semibold"
        >
          <i class="fas fa-newspaper text-orange-500 text-lg"></i> Article
        </button>
        <button
          class="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 px-3 py-2 rounded-md transition text-sm font-semibold"
        >
          <i class="fas fa-briefcase text-purple-500 text-lg"></i> Project
        </button>
      </div>
    </div>

    <!-- Pinned Introduction Post -->
    <div
      class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors"
    >
      <div class="p-4">
        <!-- Header -->
        <div class="flex justify-between items-start mb-3">
          <div class="flex gap-3">
            <img
              src="/image/pnav2.jpg"
              alt="Profile"
              class="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <h3
                class="font-semibold text-[14px] text-gray-900 dark:text-gray-100 leading-tight"
              >
                Muhammad Wisnu Ainun Najib
              </h3>
              <p class="text-[12px] text-gray-500 dark:text-gray-400">
                Web Developer | IT
              </p>
              <p
                class="text-[12px] text-gray-500 dark:text-gray-400 flex items-center gap-1"
              >
                1d • <i class="fas fa-globe-americas"></i>
              </p>
            </div>
          </div>
          <button
            class="text-gray-500 hover:bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center transition"
          >
            <i class="fas fa-ellipsis-h"></i>
          </button>
        </div>

        <div
          class="mb-3 text-blue-700 dark:text-blue-400 text-sm font-semibold flex items-center gap-2"
        >
          <i class="fas fa-thumbtack"></i> Pinned Introduction
        </div>

        <!-- Content -->
        <div
          class="text-[14px] text-gray-900 dark:text-gray-200 leading-relaxed mb-4 whitespace-pre-line"
        >
          Hello! I'm Muhammad Wisnu Ainun Najib, a passionate Web Developer and
          IT professional based in Semarang, Jawa Tengah. With a strong
          foundation in modern web technologies and a keen eye for user-centered
          design, I specialize in building responsive, scalable, and performant
          web applications. My expertise spans across frontend development with
          React, backend systems with Node.js, and database management with SQL.
          I'm committed to continuous learning and staying updated with the
          latest industry trends to deliver innovative solutions that drive
          business value. I thrive in collaborative environments and enjoy
          tackling complex challenges that push the boundaries of web
          development. Whether it's crafting intuitive user interfaces or
          optimizing application performance, I bring dedication and technical
          excellence to every project.
        </div>
      </div>

      <!-- Actions -->
      <div
        class="border-t border-gray-200 dark:border-gray-700 p-2 flex justify-between px-4"
      >
        <button
          class="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 px-4 py-2 rounded-md transition text-sm font-semibold flex-1 justify-center"
        >
          <i class="far fa-thumbs-up text-lg"></i> Like
        </button>
        <button
          class="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 px-4 py-2 rounded-md transition text-sm font-semibold flex-1 justify-center"
        >
          <i class="far fa-comment text-lg"></i> Comment
        </button>
        <button
          class="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 px-4 py-2 rounded-md transition text-sm font-semibold flex-1 justify-center"
        >
          <i class="fas fa-share text-lg"></i> Share
        </button>
      </div>
    </div>

    <!-- Internship Update Post -->
    <div
      class="bg-white dark:bg-[#1d2226] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors"
    >
      <div class="p-4">
        <!-- Header -->
        <div class="flex justify-between items-start mb-3">
          <div class="flex gap-3">
            <img
              src="/image/pnav2.jpg"
              alt="Profile"
              class="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <h3
                class="font-semibold text-[14px] text-gray-900 dark:text-gray-100 leading-tight"
              >
                Muhammad Wisnu Ainun Najib
              </h3>
              <p class="text-[14px] text-gray-800 dark:text-gray-300">
                started a new position as Web Development Intern
              </p>
              <p
                class="text-[12px] text-gray-500 dark:text-gray-400 flex items-center gap-1"
              >
                3w • <i class="fas fa-globe-americas"></i>
              </p>
            </div>
          </div>
          <button
            class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 w-8 h-8 rounded-full flex items-center justify-center transition"
          >
            <i class="fas fa-ellipsis-h"></i>
          </button>
        </div>

        <!-- Role Card inside post -->
        <div
          class="bg-[#f8fafd] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md p-4 mb-4 flex gap-4 mt-2"
        >
          <div
            class="w-12 h-12 bg-gray-200 dark:bg-gray-700 flex-shrink-0 flex items-center justify-center"
          >
            <i class="fas fa-building text-gray-400 text-2xl"></i>
          </div>
          <div>
            <h4 class="font-bold text-[16px] text-gray-900 dark:text-gray-100">
              Web Development Intern
            </h4>
            <p class="text-[14px] text-gray-800 dark:text-gray-300">
              PT Digital Inovasi Indonesia
            </p>
            <p class="text-[12px] text-gray-500 dark:text-gray-400 mt-1">
              Jan 2025 - Present • 2 mos
            </p>
            <p class="text-[12px] text-gray-500 dark:text-gray-400">
              Semarang, Jawa Tengah, Indonesia
            </p>
          </div>
        </div>

        <!-- Content -->
        <div
          class="text-[14px] text-gray-900 dark:text-gray-200 leading-relaxed mb-4"
        >
          <p class="mb-2">
            <strong>Key Responsibilities & Achievements:</strong>
          </p>
          <ul class="list-disc pl-5 space-y-2">
            <li>
              Developed and maintained responsive web applications using
              React.js and Tailwind CSS, improving user engagement by 35%
            </li>
            <li>
              Collaborated with cross-functional teams to implement new features
              and optimize existing codebase
            </li>
            <li>
              Participated in code reviews and contributed to establishing best
              practices for frontend development
            </li>
            <li>
              Integrated RESTful APIs and managed state with Redux, enhancing
              application performance and scalability
            </li>
          </ul>
        </div>
      </div>

      <!-- Stats -->
      <div
        class="px-4 py-2 flex justify-between items-center text-gray-500 dark:text-gray-400 text-[12px] border-t border-gray-100 dark:border-gray-800"
      >
        <div class="flex items-center gap-1">
          <span
            class="bg-blue-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]"
            ><i class="fas fa-thumbs-up"></i
          ></span>
          <span
            class="bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] -ml-1"
            ><i class="fas fa-heart"></i
          ></span>
          <span class="ml-1 text-[13px]">127</span>
        </div>
        <div>24 comments</div>
      </div>

      <!-- Actions -->
      <div
        class="border-t border-gray-200 dark:border-gray-700 p-2 flex justify-between px-4"
      >
        <button
          class="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 px-4 py-2 rounded-md transition text-sm font-semibold flex-1 justify-center"
        >
          <i class="far fa-thumbs-up text-lg"></i> Like
        </button>
        <button
          class="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 px-4 py-2 rounded-md transition text-sm font-semibold flex-1 justify-center"
        >
          <i class="far fa-comment text-lg"></i> Comment
        </button>
        <button
          class="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 px-4 py-2 rounded-md transition text-sm font-semibold flex-1 justify-center"
        >
          <i class="fas fa-share text-lg"></i> Share
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>
