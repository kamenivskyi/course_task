<template>
  <div>
    <CurrentEpisode />
    <q-page class="row">
      <EpisodeDescription />
      <EpisodesTabs />
    </q-page>
  </div>
</template>

<script setup lang="ts">
import CurrentEpisode from 'components/episodes/CurrentEpisode.vue';
import EpisodesTabs from 'components/episodes/EpisodesTabs.vue';
import EpisodeDescription from 'components/episodes/EpisodeDescription.vue';
// import { lessonsService } from '../services/lessonsService';
import { onMounted } from 'vue';
import { useLessonsStore } from '../stores/lessons';

const store = useLessonsStore();

onMounted(() => {
  // console.log('lessonsService: ', lessonsService);
  store.fetchLessons(); 
})
</script>