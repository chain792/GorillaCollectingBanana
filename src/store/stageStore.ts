import { defineStore } from 'pinia'

interface StageState {
  isPlayFinished: boolean
  score: number
}

export const useStageStore = defineStore('app', {
  state: (): StageState => ({
    isPlayFinished: false,
    score: 0,
  }),
  actions: {
    set(score: number): void {
      this.score = score
      this.isPlayFinished = true
    }
  }
})