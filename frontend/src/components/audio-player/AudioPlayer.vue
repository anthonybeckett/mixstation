<script setup>
import {AVWaveform} from 'vue-audio-visual';
import {ref} from 'vue';

const props = defineProps({
    src: String,
    title: String,
});

const audioTest = ref(null);
const isPlaying = ref(false);

const playAudio = () => {
    const audioPlayer = audioTest.value.$el.nextSibling;

    if (audioPlayer.paused) {
        audioPlayer.play();
        isPlaying.value = true;
    } else {
        audioPlayer.pause();
        isPlaying.value = false;
    }
}
</script>

<template>
    <section class="border-2 p-4">
        <h1 class="text-2xl pb-2">{{ props.title }}</h1>

        <div class="flex">
            <Button @click="playAudio" :outlined="true">{{ isPlaying ? 'Pause' : 'Play' }}</Button>

            <AVWaveform
                ref="audioTest"
                :src="props.src"
                :audio-controls="false"
                :noplayed-line-color="'#B3B3B3'"
                :played-line-color="'#0EA5E9'"
                :playtime-slider="false"
                :playtime-with-ms="false"
                :playtime-slider-color="'#fff'"
            />
        </div>
    </section>
</template>