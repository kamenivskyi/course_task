import { defineStore } from 'pinia';
import { lessonsService } from '../services/lessonsService';
import { Lesson } from 'src/models';

export const useLessonsStore = defineStore('lessons', {
  state: () => ({
    data: [] as Lesson[],
    selected: 1,
  }),
  getters: {
    list: (state) => state.data,
    selectedLesson: (state) => state.selected ? state.data.find(item => item.id === state.selected) : null,
  },
  actions: {
    async fetchLessons() {
      try {
        const lessons = await lessonsService.getLessons() as Lesson[];
        console.log('fetched: ', lessons);
  
        this.data = lessons;
      } catch (error) {
        console.log('error fetch lessons: ', error);
      }
    },
    selectLesson(id: number) {
      this.selected = id;
    }
    
  },
});

export interface StoreData {
  data: Lesson[], fetchLessons: () => void
}