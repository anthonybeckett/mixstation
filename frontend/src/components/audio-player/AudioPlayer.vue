<script setup>
import { AVWaveform } from 'vue-audio-visual';
import {computed, onMounted, ref} from 'vue';
import AudioOptionsAndStats from "@/components/audio-player/AudioOptionsAndStats.vue";

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
    <section class="border-b p-4">
        <div class="flex gap-4">
            <div>
                <Image src="/images/blank-artwork.png" alt="Image" width="180" />
            </div>
            <div class="w-full">
                <div class="flex items-center">
                    <Button
                        rounded
                        @click="playAudio"
                        :outlined="true"
                        class="mr-4"
                        :icon="isPlaying ? 'pi pi-pause' : 'pi pi-play'"
                        severity="info"
                    ></Button>

                    <div class="flex flex-col">
                        <span class="text-xl pb-2 font-bold">{{ props.title }}</span>
                        <span class="text-sm pb-2 text-blue-500">Test User</span>
                    </div>

                </div>


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

                <AudioOptionsAndStats />
            </div>
        </div>

        <div>

        </div>
    </section>
</template>