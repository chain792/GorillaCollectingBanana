export class Reaper {
  private reaper: HTMLElement
  private positionX: number
  private positionY: number
  private speed: number = 0.5
  private static intervalID: number

  constructor(parentElement: HTMLElement){
    const reaperImage = document.createElement('img')
    reaperImage.src = '/reaper.png'
    reaperImage.width=50
    reaperImage.height=50
    reaperImage.style.position = 'absolute'
    reaperImage.style.top = '0px'
    reaperImage.style.left = '0px'
    let x = 400
    let y = 300
    reaperImage.style.transform = `matrix(1, 0, 0, 1, ${x}, ${y})`
    parentElement.appendChild(reaperImage)
    this.positionX = x
    this.positionY = y
    this.reaper = reaperImage

    Reaper.intervalID = window.setInterval(() => {
      this.speedUp();
    }, 1000);
  }

  move(positions: Array<number>): void{
    const vectorX = positions[0] - this.positionX
    const vectorY = positions[1] - this.positionY
    const vectorLength = Math.sqrt(vectorX ** 2 + vectorY ** 2)
    const unitVectorX = vectorX / vectorLength
    const unitVectorY = vectorY / vectorLength

    this.positionX += unitVectorX * this.speed
    this.positionY += unitVectorY * this.speed

    this.reaper.style.transform = `matrix(1, 0, 0, 1, ${this.positionX}, ${this.positionY})`
  }

  isCollision(positions: Array<number>): boolean {
    const distance = Math.sqrt((this.positionX - positions[0]) ** 2 + (this.positionY - positions[1]) ** 2)
    if(distance < 25){
      return true
    }else{
      return false
    }
  }

  speedUp(){
    this.speed += 0.1
  }

  static initialize(): void {
    window.clearInterval(Reaper.intervalID)
  }
}