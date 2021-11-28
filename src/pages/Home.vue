<script setup>
import Navbar from '../components/Navbar.vue'
import Banner from '../components/Banner.vue'
import Benefit from '../components/Benefit.vue'
import Service from '../components/Service.vue'
import Activity from '../components/Activity.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <Navbar />
  <div class="lg:max-w-6xl lg:mx-auto px-2">
    <Banner class="anchor__section" id="home" />
    <Benefit />
  </div>
  <Service class="anchor__section" id="service" />
  <div class="lg:max-w-6xl lg:mx-auto px-4">
    <Activity class="anchor__section" id="activity" />
    <Footer />
  </div>
</template>
