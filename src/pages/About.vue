<template>
  <div class="bg-cream min-h-screen px-4 py-10 flex flex-col items-center">
    <!-- Title -->
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-8 sm:mb-10 text-center">
      About Travel
    </h1>

    <!-- Travel Image -->
    <img
      src="../assets/images/Hero-img3.jpg"
      alt="Travel Visual"
      class="w-full max-w-4xl h-auto object-cover rounded-2xl shadow-xl mb-10 sm:mb-12"
    />

    <!-- Card Container -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl px-2">
      <!-- Cards with zoom-out hover -->
      <div
        class="bg-white p-6 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:scale-95"
      >
        <h2 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3">Our Mission</h2>
        <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
          We aim to inspire travel dreams by offering safe, enriching, and unforgettable journeys around the world.
        </p>
      </div>

      <div
        class="bg-white p-6 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:scale-95"
      >
        <h2 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3">Who We Are</h2>
        <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
          A passionate team of global explorers bringing expert insights and personalized experiences to every traveler.
        </p>
      </div>

      <div
        class="bg-white p-6 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:scale-95"
      >
        <h2 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3">Our Services</h2>
        <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
          Customized tours, luxury escapes, and budget trips — all supported by our 24/7 assistance and curated planning.
        </p>
      </div>

      <div
        class="bg-white p-6 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:scale-95"
      >
        <h2 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3">Why Choose Us</h2>
        <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
          Trusted worldwide for our transparency, travel expertise, and dedication to creating lifetime memories.
        </p>
      </div>

      <div
        class="bg-white p-6 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:scale-95"
      >
        <h2 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3">Our Destinations</h2>
        <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
          Explore iconic cities, hidden gems, and cultural treasures — from Asia to Europe and beyond.
        </p>
      </div>

      <div
        class="bg-white p-6 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:scale-95"
      >
        <h2 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3">Sustainable Travel</h2>
        <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
          We promote eco-friendly travel options that respect nature and local cultures to keep the world beautiful.
        </p>
      </div>

      <div
        class="bg-white p-6 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:scale-95"
      >
        <h2 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3">Traveler Support</h2>
        <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
          Our team is available 24/7 to assist with any questions or emergencies during your travel.
        </p>
      </div>

      <div
        class="bg-white p-6 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:scale-95"
      >
        <h2 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3">Travel Tips & Guides</h2>
        <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
          Get expert advice, packing lists, and insider tips to make your trips smooth and enjoyable.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutTravel'
}
</script>

<style scoped>
.bg-cream {
  background-color: #fdf6ee;
}
</style>
