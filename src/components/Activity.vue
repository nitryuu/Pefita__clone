<script setup>
const activities = [
  {
    title: 'Bergabung Menjadi Mitra Pefita',
    description:
      'Dapatkan penghasilan tambahan. Jangkau pelanggan lebih luas. Pelatihan soft skill dan hard skill yang berguna.',
    image: 'mitra.png',
    buttonText: 'Selengkapnya',
  },
  {
    title: 'Mengenal Pefita Lebih Jauh',
    description:
      'Ayo menjadi agen perubahan dalam kesehatan hewan meallui perawatan hewan dengan tepat bersama Pefita.',
    image: 'activity.png',
    buttonText: 'Lihat Video',
  },
  {
    title: 'Apa Kata Mereka?',
    description:
      'Lihat review mereka yang telah bergabung menjadi mitra dari Pefita.',
    image: 'review.png',
    buttonText: 'Selengkapnya',
  },
]
</script>
<template>
  <div
    :class="['px-11 py-16 relative mt-24 text-center lg:py-20 ' + $attrs.class]"
    :id="$attrs.id"
  >
    <div class="text-sm text-yellow-600 font-semibold mb-2">
      <span> Our Activity </span>
    </div>
    <div class="font-semibold text-4xl">
      <span> Join Our Activities </span>
    </div>
  </div>
  <div class="grid grid-cols-1 gap-8 my-20 md:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="(activity, index) in activities"
      :key="index"
      class="
        px-6
        py-12
        rounded-lg
        bg-white
        shadow-md
        group
        transform
        transition-all
        duration-300
        cursor-pointer
        hover:scale-110 hover:shadow-xl
      "
    >
      <div class="h-60">
        <img
          :src="activity.image"
          :alt="activity.title"
          class="w-full h-full object-contain"
        />
      </div>
      <div class="mt-4 text-center">
        <div class="font-medium text-lg">
          <span>
            {{ activity.title }}
          </span>
        </div>
        <div
          class="
            text-sm text-gray-500
            h-20
            flex
            items-center
            leading-relaxed
            mt-2
          "
        >
          <span>
            {{ activity.description }}
          </span>
        </div>
        <div class="mt-8">
          <button class="rounded-md bg-yellow-500 px-8 py-2 text-white">
            {{ activity.buttonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
