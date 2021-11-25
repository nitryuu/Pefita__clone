<script setup>
const benefits = [
    {
        name: 'Peralatan Steril',
        image: 'tools2.png'
    },
    {
        name: 'Professional Groomers',
        image: 'tools.png'
    },
    {
        name: 'Bahan Aman',
        image: 'food.png'
    },
]
</script>

<template>
    <div class="flex flex-row max-w-4xl mx-auto gap-2 -mt-14 relative z-10">
        <div
            class="px-10 py-8 bg-white flex flex-row items-center rounded-lg shadow-md w-80 gap-8"
            v-for="(benefit, index) in benefits"
            :key="index"
        >
            <img :src="benefit.image" alt="Pefita" class="w-10" />
            <span class="font-semibold text-sm">{{ benefit.name }}</span>
        </div>
    </div>
</template>