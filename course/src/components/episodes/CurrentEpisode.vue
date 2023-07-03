<template>
  <div class="text-h5">
    Episode #{{ store.selectedLesson?.id }}
  </div>
</template>

<script setup lang="ts">
  import { useLessonsStore } from 'src/stores/lessons';

  const store = useLessonsStore();
</script>