<template>
    <section class="flex items-center">
        <div class="w-1/2 ml-4">
        <img class='h-12 w-auto' :src="logo" alt='workcation' />
        <h1 class="text-2xl text-gray-500">You can work from anywhere.</h1>
        <h2 class='text-indigo-400 font-bold text-5xl mt-2'>Take advantage of it.</h2>
        <p class="mt-4 max-w-md text-xl text-gray-700">Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation.</p>
    </div>
    <div class="w-1/2 mt-4 mb-4 mr-4">
        <img class="w-auto rounded" :src="heroImg" alt='Hero image' />
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