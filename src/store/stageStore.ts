import { defineStore } from 'pinia'

interface StageState {
  isPlayFinished: boolean
  score: number
  isRegistered: boolean
}

export const useStageStore = defineStore('app', {
  state: (): StageState => ({
    isPlayFinished: false,
    score: 0,
    isRegistered: false,
  }),
  actions: {
    setScore(score: number): void {
      this.score = score
      this.isPlayFinished = true
    },
    registered(): void {
      this.isRegistered = true
    }
  }
})