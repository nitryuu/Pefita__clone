<script setup>
const services = [
  {
    name: 'Alo Pet',
    description:
      'Konsultasikan perkembangan hewan kesayangan dengan live chat bersama dokter hewan terpercaya dan berpengalaman secara cepat dan tersedia setiap saat',
    image: 'chat.png',
    backgroundImage: 'service1-background.png',
  },
  {
    name: 'Doctor On Demand',
    description:
      'Layanan yang tepat dan cepat untuk segera melayani kebutuhan tindakan ringan oleh dokter hewan profesional di rumah anda langsung',
    image: 'tools2.png',
    backgroundImage: 'service2-background.png',
  },
  {
    name: 'Grooming On Demand',
    description:
      'Dapatkan pengalaman grooming tanpa keluar rumah. Ditangani oleh groomers professional, peralatan yang steril serta sabun yang aman bagi kulit dan rambut hewan peliharaan anda',
    image: 'tools.png',
    backgroundImage: 'service3-background.png',
  },
  {
    name: 'Pet Catering',
    description:
      'Penuhi kebutuhan gizi hewan kesayangan dengan takaran gizi yang sesuai dan berkualitas sesuai rekomendasi dokter hewan terpercaya',
    image: 'food.png',
    backgroundImage: 'service4-background.png',
  },
]
</script>

<template>
  <div class="px-11 py-20 relative mt-24">
    <div class="absolute z-0 top-0 left-0 bottom-0 w-full h-full">
      <img
        src="service-background.png"
        alt="Pefita Services"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-6 relative z-10">
        <div class="text-sm text-yellow-600 font-semibold mb-2">
          <span>Our Services</span>
        </div>
        <div class="font-semibold text-4xl">
          <span>We Make Your Pet Healthy</span>
        </div>
      </div>
      <div
        class="
          grid grid-cols-1
          gap-4
          mt-20
          relative
          z-10
          lg:grid-cols-2
          xl:grid-cols-4
        "
      >
        <div
          class="
            group
            px-8
            py-12
            relative
            rounded-lg
            bg-white
            shadow-md
            transition-all
            duration-300
            cursor-pointer
            hover:shadow-2xl hover:bg-gray-800
          "
          v-for="(service, index) in services"
          :key="index"
        >
          <div class="absolute bottom-0 left-0 z-0 h-full w-full">
            <img
              :src="service.backgroundImage"
              :alt="service.name"
              class="
                h-full
                w-full
                object-cover
                opacity-0
                transition-all
                group-hover:opacity-10
              "
            />
          </div>
          <div class="relative z-10">
            <img
              :src="service.image"
              alt="Pefita"
              class="mx-auto mb-6 w-16 h-16 object-cover"
            />
          </div>
          <div class="relative z-10">
            <div
              class="
                font-semibold
                text-lg text-center
                mb-4
                h-12
                inline-flex
                items-center
                w-full
                justify-center
                transition-all
                group-hover:text-white
              "
            >
              {{ service.name }}
            </div>
            <div
              class="
                text-justify text-sm
                leading-loose
                text-gray-500
                transition-all
                group-hover:text-white
              "
            >
              <span>{{ service.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
