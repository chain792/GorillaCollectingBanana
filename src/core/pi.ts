import { useVolumeStore } from "../store/volumeStore";
const audioPi = new Audio("/pi.mp3")

export function pi(): void {
  const volumeStore = useVolumeStore()
  audioPi.volume = volumeStore.effectVolume / 100
  audioPi.currentTime = 0
  audioPi.play()
}