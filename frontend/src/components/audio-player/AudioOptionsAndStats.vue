<script setup>

import StatsBarIcon from "@/components/audio-player/StatsBarIcon.vue";
</script>

<template>
    <section class="flex justify-between">
        <div class="space-x-4">
            <StatsBarIcon class="pi pi-heart"></StatsBarIcon>
            <StatsBarIcon class="pi pi-download"></StatsBarIcon>
        </div>

        <div class="space-x-4">
            <StatsBarIcon class="pi pi-play"> 1,000</StatsBarIcon>
            <StatsBarIcon class="pi pi-heart-fill"> 25</StatsBarIcon>
        </div>
    </section>
</template>

<style scoped>

</style>