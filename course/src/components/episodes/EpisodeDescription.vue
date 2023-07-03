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
      <p>{{ store.selectedLesson.description }}</p>
      <!-- <q-video
        :ratio="16/9"
        :src="store.selectedLesson.video_url"
      /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLessonsStore } from 'src/stores/lessons';

const store = useLessonsStore();
</script>