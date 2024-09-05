<script setup>
const props = defineProps({
    size: Number
});
</script>

<template>
    <Image src="/images/mixstation-logo-no-bg.png" alt="Image" :width="props.size" />
</template>

<style scoped>

</style>