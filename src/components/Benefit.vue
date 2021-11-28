<script setup>
const benefits = [
  {
    name: 'Peralatan Steril',
    image: 'tools2.png',
  },
  {
    name: 'Professional Groomers',
    image: 'tools.png',
  },
  {
    name: 'Bahan Aman',
    image: 'food.png',
  },
]
</script>

<template>
  <div
    class="
      flex flex-col
      max-w-4xl
      mx-auto
      gap-3
      mt-6
      relative
      z-10
      lg:-mt-14 lg:flex-row
    "
  >
    <div
      class="
        px-10
        py-8
        bg-white
        flex flex-row
        items-center
        rounded-lg
        shadow-md
        gap-8
        lg:w-80
      "
      v-for="(benefit, index) in benefits"
      :key="index"
    >
      <img :src="benefit.image" alt="Pefita" class="w-10" />
      <span class="font-semibold text-sm">{{ benefit.name }}</span>
    </div>
  </div>
</template>
