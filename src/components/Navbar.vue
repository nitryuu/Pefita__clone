<script setup>
const navbarMenu = [
    {
        name: 'Beranda',
        path: '/'
    },
    {
        name: 'Tentang Kami',
        path: '/about-us'
    },
    {
        name: 'Penawaran',
        path: '/offer'
    },
    {
        name: 'Feature',
        path: '/feature'
    },
    {
        name: 'Activity',
        path: '/activity'
    },
]
</script>

<template>
    <div class="sticky py-6 px-10">
        <div class="flex flex-row items-center">
            <div>
                <img src="logo.png" alt="Pefita" class="w-40 object-cover" />
            </div>
            <div class="flex flex-row w-full justify-center">
                <div v-for="(menu, index) in navbarMenu" :key="index">
                    <router-link
                        :to="menu.path"
                        class="px-4 py-4 text-black font-semibold transition-all hover:text-yellow-500"
                    >{{ menu.name }}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>