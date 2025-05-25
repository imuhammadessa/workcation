<template>
  <div class="font-sans text-gray-800">
    <!-- Hero Section (height reduced) -->
    <section class="relative h-80 bg-cover bg-center" style="background-image: url('/images/hero-background.jpg');">
      <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center px-4">
        <div>
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Explore the World with Us</h1>
          <p class="text-lg md:text-xl">Discover breathtaking places, travel tips & guides to inspire your next adventure.</p>
        </div>
      </div>
    </section>

    <!-- Blog Section -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Latest Travel Blogs</h2>
        <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(post, index) in blogPosts"
            :key="index"
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              :src="post.image"
              alt="Blog Cover"
              class="w-full h-[200px] object-cover transform scale-105 transition-transform duration-300 ease-in-out hover:scale-100"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{ post.title }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ post.description }}</p>
              <a href="#" class="text-blue-600 hover:underline font-semibold">Read More →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Travel Tips Section -->
    <section class="py-12 bg-blue-50">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Travel Tips & Guides</h2>
        <p class="text-gray-700 mb-8">Get the best tips for smart traveling, packing, budgeting, and exploring hidden gems!</p>
        <ul class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <li class="bg-white shadow p-4 rounded">
            <h4 class="font-bold mb-2">📍 Hidden Destinations</h4>
            <p>Explore places that are less crowded but full of magic and beauty.</p>
          </li>
          <li class="bg-white shadow p-4 rounded">
            <h4 class="font-bold mb-2">🎒 Packing Essentials</h4>
            <p>What to pack and how to travel light without missing anything.</p>
          </li>
          <li class="bg-white shadow p-4 rounded">
            <h4 class="font-bold mb-2">💰 Budget Travel Hacks</h4>
            <p>Learn how to save money while enjoying premium travel experiences.</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-12 bg-white">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8">What Our Travelers Say</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img :src="testimonial.image" alt="User" class="w-16 h-16 rounded-full mx-auto mb-4" />
            <p class="text-gray-600 italic">"{{ testimonial.message }}"</p>
            <h4 class="mt-4 font-bold text-blue-600">{{ testimonial.name }}</h4>
            <p class="text-sm text-gray-500">{{ testimonial.location }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Travel Newsletter</h2>
        <p class="mb-6 text-lg">Stay updated with the latest travel news, deals, and inspiration — straight to your inbox!</p>

        <div class="bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-xl mx-auto">
          <form @submit.prevent="subscribe" class="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              v-model="email"
              required
              placeholder="Enter your email"
              class="px-4 py-3 rounded-full text-gray-800 w-full sm:w-96 focus:outline-none border border-gray-300"
            />
            <button
              type="submit"
              class="bg-blue-600 text-white font-bold px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
          <p v-if="subscribed" class="mt-4 text-green-600">Thanks for subscribing!</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TravelBlog',
  data() {
    return {
      email: '',
      subscribed: false,
      blogPosts: [
        {
          title: '10 Must-Visit Destinations in 2025',
          image: '/images/10Must-VisitDestinations.jpg',
          description: 'Uncover breathtaking landscapes and vibrant cultures in our top 10 travel picks.',
        },
        {
          title: 'Backpacking Across Europe on a Budget',
          image: '/images/BackpackingAcrossEuropeonaBudget.jpg',
          description: 'A practical guide to exploring Europe without breaking the bank.',
        },
        {
          title: 'Solo Travel: Finding Peace in the Unknown',
          image: '/images/SoloTravel.jpg',
          description: 'Learn how to embrace solitude and adventure on your solo journeys.',
        },
      ],
      testimonials: [
        {
          name: 'Sarah Ahmed',
          location: 'Lahore, Pakistan',
          message: 'This blog inspired my dream trip to Hunza Valley. The tips were life-saving!',
          image: '/images/sarahAhmad.jpg',
        },
        {
          name: 'James Kim',
          location: 'Seoul, South Korea',
          message: 'Incredible visuals and practical advice! I follow every new post.',
          image: '/images/jimkim.jpg',
        },
        {
          name: 'Fatima Noor',
          location: 'Dubai, UAE',
          message: 'Beautiful design and very helpful content. Totally love this travel site!',
          image: '/images/fatimanoor.jpg',
        },
      ],
    };
  },
  methods: {
    subscribe() {
      if (this.email) {
        this.subscribed = true;
        console.log('Subscribed with:', this.email);
        this.email = '';
      }
    },
  },
};
</script>
