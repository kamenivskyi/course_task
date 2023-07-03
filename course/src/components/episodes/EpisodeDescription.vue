<template>
  <div>
    <div v-if="store.selectedLesson">
      {{ store.selectedLesson.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLessonsStore } from 'src/stores/lessons';

const store = useLessonsStore();
</script>