<template>
  <footer
    class="bg-gray-800 text-center py-6 px-4 sm:px-6 lg:px-8 font-sans text-white"
  >
    <div class="mb-6">
      <img
        :src="logo"
        alt="Logo"
        class="mx-auto max-w-[150px] w-32 sm:w-36 md:w-40"
      />
    </div>

    <!-- Menu -->
    <nav>
      <ul class="flex flex-wrap justify-center gap-6 sm:gap-8 mb-6 list-none p-0 m-0">
        <li v-for="(item, index) in menuItems" :key="index">
          <router-link
            :to="item.path"
            class="font-semibold transition-colors duration-300"
            :class="item.classes"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Social Icons -->
    <div class="flex justify-center gap-8 mb-6 text-white text-2xl sm:text-3xl">
      <a
        v-for="(icon, index) in socialLinks"
        :key="index"
        :href="icon.url"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="icon.label"
        class="hover:text-[#615FFF] transition-colors duration-300"
      >
        <component :is="icon.component" />
      </a>
    </div>

    <hr class="border-t border-indigo-800 w-11/12 max-w-4xl mx-auto my-6" />

    <div class="text-gray-400 text-sm sm:text-base">
      Workcation &copy; 2025. All rights reserved.
    </div>
  </footer>
</template>

<script>
import logoImage from "../assets/images/workcation-1.png";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-vue-next";

export default {
  name: "FooterComponent",
  components: {
    Linkedin,
    Facebook,
    Instagram,
    Twitter,
  },
  data() {
    return {
      logo: logoImage,
      menuItems: [
        { name: "Home", path: "/", classes: "text-indigo-500 hover:text-indigo-800" },
        { name: "About", path: "/about", classes: "text-[#615FFF] hover:text-[#817DFF]" },
        { name: "Services", path: "/services", classes: "text-[#615FFF] hover:text-[#817DFF]" },
        { name: "Contact", path: "/contact", classes: "text-[#615FFF] hover:text-[#817DFF]" },
      ],
      socialLinks: [
        { label: "LinkedIn", url: "https://linkedin.com", component: "Linkedin" },
        { label: "Facebook", url: "https://facebook.com", component: "Facebook" },
        { label: "Instagram", url: "https://instagram.com", component: "Instagram" },
        { label: "Twitter", url: "https://twitter.com", component: "Twitter" },
      ],
    };
  },
};
</script>
