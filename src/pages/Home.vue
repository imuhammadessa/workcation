<template>
  <section class="flex flex-col md:flex-row items-center p-4 md:p-8">
    <!-- Text and Logo Section -->
    <div class="w-full md:w-1/2 mt-6 md:mt-0 md:pr-8 text-center md:text-left">
      <img class="h-12 w-auto mx-auto md:mx-0" :src="logo" alt="workcation" />
      <h1 class="text-2xl text-gray-500 mt-4">You can work from anywhere.</h1>
      <h2 class="text-indigo-500 font-bold text-3xl sm:text-2xl mt-2">Take advantage of it.</h2>
      <p class="mt-4 text-lg sm:text-xl text-gray-700 max-w-md mx-auto md:mx-0">
        Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation.
      </p>
    </div>

    <!-- Image Section -->
    <div class="w-full md:w-1/2 mb-6 md:mb-0">
      <img class="w-full max-w-lg mx-auto rounded" :src="heroImg" alt="Hero image" />
    </div>
  </section>
</template>

<script>
import heroImg from "../assets/images/Hero-img2.jpg";
import logo from "../assets/images/workcation.svg";

export default {
  data() {
    return {
      heroImg,
      logo,
    };
  },
};
</script>
