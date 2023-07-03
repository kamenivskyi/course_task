<template>
  <div class="q-pa-md">
    <div v-if="store.selectedLesson">
      <iframe
        width="560"
        height="315"
        :src="store.selectedLesson.video_url" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen
      ></iframe>
      <div v-if="hasDescription">
        <h2 class="text-h5">Description</h2>

        <p v-for="(text, idx) in store.selectedLesson.descriptionList" :key="text">{{ idx + 1 }}. {{ text }}</p>
      </div>
      <!-- <q-video
        :ratio="16/9"
        :src="store.selectedLesson.video_url"
      /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLessonsStore } from 'src/stores/lessons';
import { computed } from 'vue';

const store = useLessonsStore();
const hasDescription = computed(
  () => store.selectedLesson?.descriptionList && store.selectedLesson?.descriptionList.length > 0
);
</script>