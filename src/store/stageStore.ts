import { defineStore } from 'pinia'

interface StageState {
  isPlayFinished: boolean
  score: number
  isRegistered: boolean
  tweetPreMessage: string
  collectionName: string
  gameMode: string
  ogpType: string
}

export const useStageStore = defineStore('app', {
  state: (): StageState => ({
    isPlayFinished: false,
    score: 0,
    isRegistered: false,
    tweetPreMessage: '',
    collectionName: '',
    gameMode: '',
    ogpType: ''
  }),
  actions: {
    setScore(score: number): void {
      this.score = score
      this.isPlayFinished = true
    },
    registered(): void {
      this.isRegistered = true
    },
    normalMode(): void {
      this.tweetPreMessage = 'ヘビと戯れながら'
      this.collectionName = 'normalRanking'
      this.gameMode = 'ノーマルモード'
      this.ogpType = '1'
    },
    hardMode(): void {
      this.tweetPreMessage = '死神に追いかけられながら'
      this.collectionName = 'hardRanking'
      this.gameMode = 'ハードモード'
      this.ogpType = '2'
    },
    extraMode(): void {
      this.tweetPreMessage = 'ドラゴンに攻撃されながら'
      this.collectionName = 'extraRanking'
      this.gameMode = 'エクストラモード'
      this.ogpType = '3'
    }

  }
})