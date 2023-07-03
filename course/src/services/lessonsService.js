import lessons from '../db/data.json';

export const lessonsService = {
  // eslint-ingore
  getData(mockData, time = 0) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, time)
    })
  },
  getLessons() {
    return this.getData(lessons, 1000)
  }
};