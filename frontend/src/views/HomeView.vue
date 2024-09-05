<script setup>
    import AudioPlayer from "@/components/audio-player/AudioPlayer.vue";
</script>

<template>
  <main class="mx-auto px-8 bg-gray">
      <h1>
          Welcome back!
      </h1>

      <AudioPlayer :src="'/audio/sample.mp3'" />
  </main>
</template>
