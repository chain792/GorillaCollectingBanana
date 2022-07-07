import { Fire } from './fire'

export class Dragon {
  private dragon: HTMLElement
  private positionX: number
  private positionY: number
  private speed: number = 0.5
  fires: Array<Fire> = []
  private static intervalIDs: Array<number> = []
  private static readonly size: number = 160
  private static parentElement: HTMLElement

  constructor(parentElement: HTMLElement){
    const dragonImage = document.createElement('img')
    dragonImage.src = '/dragon.png'
    dragonImage.width = Dragon.size
    dragonImage.height = Dragon.size
    dragonImage.style.position = 'absolute'
    dragonImage.style.top = '0px'
    dragonImage.style.left = '0px'
    let x = 800
    let y = 200
  
    dragonImage.style.transform = `matrix(1, 0, 0, 1, ${x}, ${y})`
    parentElement.appendChild(dragonImage)
    this.positionX = x
    this.positionY = y
    this.dragon = dragonImage

    const intervalID = window.setInterval(() => {
      this.breathe()
    }, 1300)
    Dragon.intervalIDs.push(intervalID)
    Dragon.parentElement = parentElement
  }

  move(positions: Array<number>): void{
    const vectorX = positions[0] - ((Dragon.size - 50) / 2) - this.positionX
    const vectorY = positions[1] - ((Dragon.size - 50) / 2) - this.positionY
    const vectorLength = Math.sqrt(vectorX ** 2 + vectorY ** 2)
    const unitVectorX = vectorX / vectorLength
    const unitVectorY = vectorY / vectorLength

    this.dragon.style.transform = `matrix(1, 0, 0, 1, ${this.positionX + unitVectorX * this.speed}, ${this.positionY + unitVectorY * this.speed})`

    this.positionX = this.positionX + unitVectorX * this.speed
    this.positionY = this.positionY + unitVectorY * this.speed
  }

  isCollision(positions: Array<number>): boolean {
    const distance = Math.sqrt((this.positionX + ((Dragon.size - 50) / 2) - positions[0]) ** 2 + (this.positionY + ((Dragon.size - 50) / 2) - positions[1]) ** 2)
    if(distance < (Dragon.size / 2)){
      return true
    }else{
      return false
    }
  }

  breathe(){
    this.fires.push(new Fire(Dragon.parentElement, this.positionX, this.positionY))
  }

  static initialize(): void {
    Dragon.intervalIDs.forEach(intervalID => {
      window.clearInterval(intervalID)
    })
  }
}