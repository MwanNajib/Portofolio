<template>
  <section id="contact" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">
        Contact Me
      </h2>
      <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <form action="https://formspree.io/f/xqawaldn" method="POST">
          <div class="flex flex-col md:flex-row md:space-x-6 mb-6">
            <div class="flex-1 mb-6 md:mb-0">
              <label
                for="name"
                class="block mb-2 text-lg font-medium text-gray-700"
                >Name</label
              >
              <input
                type="text"
                id="name"
                name="name"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                placeholder="Nama Anda"
              />
            </div>
            <div class="flex-1">
              <label
                for="email"
                class="block mb-2 text-lg font-medium text-gray-700"
                >Email</label
              >
              <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                placeholder="Email Anda"
              />
            </div>
          </div>
          <div class="mb-6">
            <label
              for="message"
              class="block mb-2 text-lg font-medium text-gray-700"
              >Message</label
            >
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              placeholder="Pesan Anda..."
            ></textarea>
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="bg-teal-600 text-white font-bold px-8 py-3 rounded-full hover:bg-teal-700 transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup></script>
