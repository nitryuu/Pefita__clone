<script setup>
import { onMounted, nextTick, ref } from 'vue'
import { useRoute } from 'vue-router'

const navbarMenu = [
  {
    name: 'Beranda',
    path: 'home',
  },
  {
    name: 'Service',
    path: 'service',
  },
  {
    name: 'Activity',
    path: 'activity',
  },
]

const route = useRoute()

const currentRoute = ref()

const onScroll = () => {
  let section = document.querySelectorAll('.anchor__section')
  section.forEach((list) => {
    let top = window.scrollY
    let distance = top - list.offsetTop
    let bottom = list.getBoundingClientRect().bottom
    let hash = list.getAttribute('id')

    let href = location.href
    let splitter = href.split('/')
    let length = splitter.length
    currentRoute.value = href.split('/')[length - 1]

    if (top == 0) {
      history.replaceState([], null, route.path)
    }

    if ((distance < 30 && distance > -30) || (bottom < 30 && bottom > -30)) {
      history.replaceState([], null, route.path + '#' + hash)
    }
  })
}

onMounted(() => {
  nextTick(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
  })
})
</script>

<template>
  <div class="sticky top-0 z-20 bg-white">
    <div class="lg:max-w-6xl lg:mx-auto py-5 px-6">
      <div class="flex flex-row items-center">
        <div>
          <img src="logo.png" alt="Pefita" class="w-40 object-cover" />
        </div>
        <div class="w-full justify-center gap-2 hidden lg:flex lg:flex-row">
          <div v-for="(menu, index) in navbarMenu" :key="index">
            <router-link
              :to="{ name: 'Home', hash: `#${menu.path}` }"
              class="
                px-4
                py-4
                text-black
                font-semibold
                transition-all
                duration-500
                border-b border-transparent
                relative
                hover:text-yellow-500 hover:after:w-full hover:after:left-0
                after:transition-all
                after:duration-500
                after:absolute
                after:-bottom-1
                after:right-0
                after:w-0
                after:h-1
                after:rounded-lg
                after:bg-yellow-500
                after:block
              "
              :class="[currentRoute == `#${menu.path}` && 'active__exact']"
              >{{ menu.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.active__exact {
  @apply text-yellow-500 border-b-[.25rem] border-yellow-500;
}
</style>
