import { defineStore } from 'pinia'

interface VolumeState {
  bgmVolume: number
  bgmVolumeBeforeMute: number
  effectVolume: number
  effectVolumeBeforeMute: number
}

export const useVolumeStore = defineStore('volume', {
  state: (): VolumeState => ({
    bgmVolume: 50,
    bgmVolumeBeforeMute: 50,
    effectVolume: 50,
    effectVolumeBeforeMute: 50,
  }),
  actions: {
    setBgmVolume(bgmVolume: number): void {
      this.bgmVolume = bgmVolume
    },
    setEffectVolume(effectVolume: number): void {
      this.effectVolume = effectVolume
    },
    muteBgmVolume(): void {
      this.bgmVolumeBeforeMute = this.bgmVolume
      this.bgmVolume = 0
    },
    unmuteBgmVolume(): void {
      this.bgmVolume = this.bgmVolumeBeforeMute
    },
    muteEffectVolume(): void {
      this.effectVolumeBeforeMute = this.effectVolume
      this.effectVolume = 0
    },
    unmuteEffectVolume(): void {
      this.effectVolume = this.effectVolumeBeforeMute
    },
  }
})