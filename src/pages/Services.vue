<template>
  <section class="bg-gray-50 text-gray-800">
    <!-- Hero Section -->
    <div class="text-center py-16 px-4 sm:px-6 lg:px-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-md">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Discover the World with Us</h1>
      <p class="text-sm sm:text-lg max-w-xl mx-auto">Your dream destinations await. Explore cultures, landscapes, and adventures with our trusted travel services.</p>
    </div>

    <!-- Services Section -->
    <div class="py-14 px-4 sm:px-6 lg:px-20 space-y-12">
      <h2 class="text-2xl sm:text-3xl font-bold text-blue-700 text-center mb-6">Our Travel & Tourism Services</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(service, index) in services" :key="index" class="bg-white border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300">
          <img :src="service.image" :alt="service.title" class="w-full h-50 object-cover rounded-xl mb-4" />

          <h3 class="text-lg font-semibold text-blue-600">{{ service.title }}</h3>
          <p class="text-sm text-gray-700 mt-2">{{ service.description }}</p>
        </div>
      </div>
    </div>

   <!-- Why Choose Us Section (Updated Design) -->
<div class="bg-white border-t border-gray-200 py-16 px-4 sm:px-6 lg:px-20">
  <h2 class="text-2xl sm:text-3xl font-bold text-blue-700 text-center mb-12">Why Choose Our Travel Agency?</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
    
    <!-- Feature Card 1 -->
    <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
      <div class="text-3xl mb-4">🌍</div>
      <h3 class="font-semibold text-lg text-blue-700 mb-2">Personalized Plans</h3>
      <p class="text-sm text-gray-700">Tailored tour itineraries and full travel assistance from start to end.</p>
    </div>

    <!-- Feature Card 2 -->
    <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
      <div class="text-3xl mb-4">🏨</div>
      <h3 class="font-semibold text-lg text-blue-700 mb-2">Trusted Partnerships</h3>
      <p class="text-sm text-gray-700">Work with top-rated hotels and airlines for smooth and safe travel.</p>
    </div>

    <!-- Feature Card 3 -->
    <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
      <div class="text-3xl mb-4">💰</div>
      <h3 class="font-semibold text-lg text-blue-700 mb-2">Affordable Packages</h3>
      <p class="text-sm text-gray-700">Enjoy competitive pricing and exclusive group discounts.</p>
    </div>

    <!-- Feature Card 4 -->
    <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
      <div class="text-3xl mb-4">📞</div>
      <h3 class="font-semibold text-lg text-blue-700 mb-2">24/7 Support</h3>
      <p class="text-sm text-gray-700">Reach out any time for help — we’re here before, during, and after your trip.</p>
    </div>

  </div>
</div>


    <!-- Destinations Section -->
    <div class="py-14 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-blue-50 to-white">
      <h2 class="text-2xl sm:text-3xl font-bold text-blue-700 text-center mb-10">Popular Destinations</h2>
      <div class="flex flex-wrap justify-center gap-6">
        <div v-for="(place, index) in destinations" :key="index" class="w-40 h-40 bg-white border rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition">
          <img :src="place.image" :alt="place.name" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    <!-- Contact CTA Section -->
    <div class="bg-blue-600 text-white text-center py-12 px-4 sm:px-6 lg:px-20 rounded-t-3xl shadow-2xl">
      <h2 class="text-2xl sm:text-3xl font-bold mb-4">Ready to Travel?</h2>
      <p class="text-sm sm:text-base mb-6">Contact our travel experts to plan your next adventure!</p>
      <button class="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-100 transition">
        Get in Touch
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesPage",
  data() {
    return {
      services: [
        {
          title: "Adventure Tours",
          description: "Experience thrilling adventures from skydiving to deep-sea diving across global hotspots.",
          image: "/images/adventure.jpg"
        },
        {
          title: "Luxury Resorts",
          description: "Book world-class resorts with 5-star amenities tailored for comfort and relaxation.",
          image: ""
        },
        {
          title: "Cultural Tours",
          description: "Dive into rich cultures and historic landmarks guided by our local experts.",
          image: "https://source.unsplash.com/400x300/?culture,temple"
        },
        {
          title: "Travel Documentation",
          description: "Visa applications, insurance, and all paperwork — we take care of it.",
          image: "https://source.unsplash.com/400x300/?passport,documents"
        },
        {
          title: "Family Packages",
          description: "Tailored family tours with fun activities for kids and relaxation for adults.",
          image: "https://source.unsplash.com/400x300/?family,travel"
        },
        {
          title: "Nature & Eco Tours",
          description: "Reconnect with nature through eco-friendly trips, forest trails, and wildlife safaris for a peaceful getaway.",
          image: "https://source.unsplash.com/400x300/?nature,forest"
        }
      ],
      destinations: [
  { name: "Paris", image: "/images/paris.jpg" },
  { name: "Maldives", image: "/images/maldivas.jpg" },
  { name: "Tokyo", image: "/images/tokeyo.jpg" },
  { name: "Dubai", image: "/images/dubai.jpg" }
]
    };
  }
};
</script>
