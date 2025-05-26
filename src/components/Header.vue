<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'

const isMenuOpen = ref(false)
const isDark = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Apply previously selected mode on load
onMounted(() => {
  const theme = localStorage.getItem('theme')
  isDark.value = theme === 'dark'

  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

watchEffect(() => {
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
})
</script>

<template>
  <header class="bg-white dark:bg-gray-800 text-black dark:text-white p-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
    <!-- Logo -->
    <div>
      <svg class="h-8 w-auto" fill="none" viewBox="0 0 185 32" xmlns="http://www.w3.org/2000/svg">
        <!-- SVG content omitted for brevity -->
      </svg>
      <h1>Workcation</h1>
    </div>

    <!-- Desktop Menu -->
    <nav class="hidden md:flex space-x-8 text-sm font-medium items-center">
      <router-link to="/" class="hover:text-indigo-400 transition">Home</router-link>
      <router-link to="/services" class="hover:text-indigo-400 transition">Services</router-link>
      <router-link to="/blog" class="hover:text-indigo-400 transition">Blog</router-link>
      <router-link to="/about" class="hover:text-indigo-400 transition">About</router-link>
      <router-link to="/contact" class="hover:text-indigo-400 transition">Contact</router-link>
      <!-- Dark Mode Toggle (Desktop) -->
      <button
        @click="toggleDarkMode"
        class="flex items-center text-sm px-4 py-1 rounded bg-gray-700 hover:bg-gray-600 transition gap-2"
        aria-label="Toggle Dark Mode"
      >
        <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <!-- Sun icon -->
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" stroke="none">
          <!-- Moon icon -->
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
        </svg>
        <span>{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>
      </button>
    </nav>

    <!-- Search + Filter -->
    <div class="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto order-3 md:order-2">
      <input
        type="text"
        placeholder="Search by keywords"
        class="border border-gray-600 px-5 py-2 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition duration-300 flex-grow md:flex-grow-0"
      />
      <button
        class="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 border border-indigo-600 px-6 py-2 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition duration-300 cursor-pointer select-none"
      >
        Filter
      </button>
    </div>

    <!-- Mobile menu button -->
    <button
      @click="toggleMenu"
      class="md:hidden text-white p-2 rounded hover:bg-gray-700 transition order-2 md:order-3"
      aria-label="Toggle menu"
    >
      <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden mt-4 space-y-2 w-full text-sm font-medium">
      <router-link to="/" class="block hover:text-indigo-400 transition">Home</router-link>
      <router-link to="/services" class="block hover:text-indigo-400 transition">Services</router-link>
      <router-link to="/blog" class="block hover:text-indigo-400 transition">Blog</router-link>
      <router-link to="/about" class="block hover:text-indigo-400 transition">About</router-link>
      <router-link to="/announcement" class="block hover:text-indigo-400 transition">Announcement</router-link>
      <router-link to="/contact" class="block hover:text-indigo-400 transition">Contact</router-link>
      <!-- Dark Mode Toggle (Mobile) -->
      <button
        @click="toggleDarkMode"
        class="w-full flex items-center gap-2 text-left px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
        aria-label="Toggle Dark Mode"
      >
        <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <!-- Sun icon -->
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" stroke="none">
          <!-- Moon icon -->
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
        </svg>
        <span>{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>
      </button>
    </div>
  </header>
</template>

<style>
/* Optional: Add any extra styles here */
</style>
