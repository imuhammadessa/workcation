<template>
  <footer
    class="bg-[#1E2939] text-center py-6 px-4 sm:px-6 lg:px-8 font-sans text-white"
  >
    <!-- Logo Centered -->
    <div class="mb-6">
      <img
        :src="logo"
        alt="Logo"
        class="mx-auto max-w-[150px] w-32 sm:w-36 md:w-40"
      />
    </div>

    <!-- Menu -->
    <nav>
      <ul
        class="flex flex-wrap justify-center gap-6 sm:gap-8 mb-6 list-none p-0 m-0"
      >
        <li>
          <router-link
            to="/"
            class="font-semibold text-indigo-500 hover:text-indigo-800 transition-colors duration-300"
          >Home</router-link>
        </li>
        <li>
          <router-link
            to="/about"
            class="font-semibold text-[#615FFF] hover:text-[#817DFF] transition-colors duration-300"
          >About</router-link>
        </li>
        <li>
          <router-link
            to="/services"
            class="font-semibold text-[#615FFF] hover:text-[#817DFF] transition-colors duration-300"
          >Services</router-link>
        </li>
        <li>
          <router-link
            to="/contact"
            class="font-semibold text-[#615FFF] hover:text-[#817DFF] transition-colors duration-300"
          >Contact</router-link>
        </li>
      </ul>
    </nav>

    <!-- Social Icons -->
    <div class="flex justify-center gap-8 mb-6 text-white text-2xl sm:text-3xl">
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        class="hover:text-[#615FFF] transition-colors duration-300"
      >
        <Linkedin />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        class="hover:text-[#615FFF] transition-colors duration-300"
      >
        <Facebook />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        class="hover:text-[#615FFF] transition-colors duration-300"
      >
        <Instagram />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        class="hover:text-[#615FFF] transition-colors duration-300"
      >
        <Twitter />
      </a>
    </div>

    <hr class="border-t border-gray-600 w-11/12 max-w-4xl mx-auto my-6" />

    <div class="text-gray-400 text-sm sm:text-base">
      Workcation &copy; 2025. All rights reserved.
    </div>
  </footer>
</template>

<script>
import logoImage from "../assets/images/workcation.png";
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
    };
  },
};
</script>
