<script setup>
const companyLinks = ['Home', 'Offer', 'Feature', 'Team']
const contactUs = [
  {
    text: 'Gedung alopet, kemang 10 Kav. B33-34, Jakarta Selatan 1289',
    svg: 'location.svg',
    iconID: 'icon-location',
  },
  {
    text: 'supportconbiz@gmail.com',
    svg: 'mail.svg',
    iconID: 'icon-envelop',
  },
  {
    text: '089 - 8829 - 7224',
    svg: 'phone.svg',
    iconID: 'icon-phone',
  },
]
const mediaSocial = [
  {
    svg: 'twitter.svg',
    iconID: 'icon-twitter',
  },
  {
    svg: 'facebook.svg',
    iconID: 'icon-facebook2',
  },
  {
    svg: 'instagram.svg',
    iconID: 'icon-instagram',
  },
  {
    svg: 'tiktok.svg',
    iconID: 'icon-tiktok',
  },
]
</script>
<template>
  <div class="px-6 pt-20 bg-yellow-500 rounded-t-lg">
    <div
      class="
        grid grid-cols-1
        gap-6
        text-white
        pb-20
        md:grid-cols-2
        lg:grid-cols-4
      "
    >
      <div class="flex items-center">
        <img src="big-logo.png" alt="Pefita" class="w-full h-40 object-cover" />
      </div>
      <div>
        <div class="font-medium mb-4">
          <span> Company </span>
        </div>
        <div class="flex flex-col gap-4">
          <div v-for="(link, index) in companyLinks" :key="index">
            <span> >> {{ link }} </span>
          </div>
        </div>
      </div>
      <div>
        <div class="font-medium mb-4">
          <span> Contact Us </span>
        </div>
        <div class="flex flex-col gap-4">
          <div v-for="(list, index) in contactUs" :key="index" class="flex">
            <svg :class="['icon flex-none mt-1 ' + list.iconID]">
              <use :xlink:href="[list.svg + '#' + list.iconID]"></use>
            </svg>
            <span class="ml-3">
              {{ list.text }}
            </span>
          </div>
        </div>
      </div>
      <div class="justify-self-center">
        <div class="font-medium mb-4 text-center">
          <span> Social Media </span>
        </div>
        <div class="flex flex-row gap-6">
          <div
            v-for="(list, index) in mediaSocial"
            :key="index"
            class="text-lg"
          >
            <a href="javascript:void(0)">
              <svg :class="['icon flex-none mt-1 ' + list.iconID]">
                <use :xlink:href="[list.svg + '#' + list.iconID]"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        bg-gray-200
        text-center
        p-4
        text-sm text-gray-500
        rounded-t-lg
        lg:py-6 lg:max-w-4xl lg:mx-auto
      "
    >
      <span> ©2021 Pefita. All Rights Reserved, Design By Nitryuu </span>
    </div>
  </div>
</template>

<style scoped>
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
</style>
