<template>
  <div class="bg-yellow-500 w-full rounded-2xl relative overflow-hidden mt-6">
    <div class="absolute z-0 opacity-5 -top-64 -right-80 hidden lg:block">
      <img src="banner-background.png" alt="Pefita" class="w-11/12" />
    </div>
    <div class="absolute z-0 opacity-5 top-60 left-0 hidden lg:block">
      <img
        src="pefita-background.png"
        alt="Pefita"
        class="w-11/12 object-cover"
      />
    </div>
    <div
      class="
        flex flex-col
        gap-4
        justify-between
        items-center
        py-10
        px-2
        relative
        z-10
        md:flex-row md:px-10
        lg:px-11 lg:pb-28 lg:pt-20
      "
    >
      <div class="px-4 w-full">
        <div
          class="
            font-semibold
            text-white
            leading-tight
            mb-4
            text-3xl
            lg:text-6xl
          "
        >
          <span>Solusi Mudah Merawat Hewan Peliharaan</span>
        </div>
        <div
          class="
            font-medium
            text-white text-sm
            lg:text-base lg:w-96
            leading-snug
          "
        >
          <span
            >Chat dokter, grooming, beli makanan hewan dan update informasi
            seputar kesehatan, semua bisa di pefita!</span
          >
        </div>
      </div>
      <div class="md:flex-none md:w-60 lg:w-auto">
        <img
          src="banner.png"
          alt="Pefita Banner"
          class="w-44 mb-4 object-cover md:w-full"
        />
      </div>
    </div>
  </div>
</template>
