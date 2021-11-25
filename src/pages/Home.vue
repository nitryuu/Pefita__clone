<script setup>
import Navbar from '../components/Navbar.vue'
import Banner from '../components/Banner.vue'
import Benefit from '../components/Benefit.vue'
import Service from '../components/Service.vue'
import Activity from '../components/Activity.vue'
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <Navbar />
    <Banner />
    <Benefit />
  </div>
  <div class="relative">
    <Service />
  </div>
  <div class="max-w-6xl mx-auto">
    <Activity />
  </div>
</template>
