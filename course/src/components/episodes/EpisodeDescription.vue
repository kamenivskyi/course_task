<template>
  <div class="q-pa-md">
    <div v-if="store.selectedLesson">
      <YoutubePlayer />
      <div v-if="hasDescription">
        <h2 class="text-h5">Description</h2>

        <p v-for="(text, idx) in store.selectedLesson.descriptionList" :key="text">{{ idx + 1 }}. {{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLessonsStore } from 'src/stores/lessons';
import { computed, onMounted, watch } from 'vue';
import YoutubePlayer from '../YoutubePlayer.vue';

const store = useLessonsStore();
const hasDescription = computed(
  () => store.selectedLesson?.descriptionList && store.selectedLesson?.descriptionList.length > 0
);

</script>