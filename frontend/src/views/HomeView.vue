<script setup>
    import AudioPlayer from "@/components/audio-player/AudioPlayer.vue";
</script>

<template>
  <main class="mx-auto px-[350px] h-full">
      <h1 class="my-4 text-xl font-bold">
          Welcome back to Mix Station!
      </h1>

      <AudioPlayer :src="'/audio/sample.mp3'" class="mt-8" title="Test Audio MP3" />

      <AudioPlayer :src="'/audio/sample.wav'" class="mt-8" title="Test Audio WAV" />
  </main>
</template>
