<template>
  <div id="youtube-player"></div>
</template>

<script setup lang="ts">
  import YouTubePlayer from 'youtube-player';
  import { useLessonsStore } from 'src/stores/lessons';
  import { computed, onMounted, watch } from 'vue';

  let player;

  const IS_PLAYING_CODE = 1;
  const IS_PAUSED_CODE = 2;

  const store = useLessonsStore();

  watch(() => store.selectedLesson, (newValue) => {
    if (newValue && newValue.video_url) { 
      setTimeout(() => {
        initPlayer();
      }, 100);
    }
  }, { immediate: true, })

function initPlayer() {
  if (store.selectedLesson?.video_url) {
    if (player) {
      player.loadVideoById(store.selectedLesson?.video_url);
      player.stopVideo().then(() => {
        console.log('stop');
      }); 
    } else { 
      player = YouTubePlayer('youtube-player');
      player.loadVideoById(store.selectedLesson?.video_url);
      player.stopVideo().then(() => {
        console.log('stop');
      });
    }
    player.on('stateChange', onPlayerStateChange);
  }
}

function onPlayerStateChange(event) {
  if (event.data === IS_PLAYING_CODE) {
    console.log('Користувач натиснув кнопку "Відтворити"');
  } else if (event.data === IS_PAUSED_CODE) {
    console.log('Користувач натиснув кнопку "Зупинити"');
  }
}
</script>