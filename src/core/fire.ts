export class Fire {
  private fire: HTMLElement
  private positionX: number
  private positionY: number
  private speedX: number
  private speedY: number

  constructor(parentElement: HTMLElement, x: number, y: number){
    const fireImage = document.createElement('img')
    fireImage.src = '/fire.png'
    fireImage.width = 50
    fireImage.height = 50
    fireImage.style.position = 'absolute'
    fireImage.style.top = '0px'
    fireImage.style.left = '0px'
    
    const arg = Math.random() * 2 * Math.PI
    const speed = Math.random() * 2 + 2
    this.speedX = Math.sin(arg) * speed
    this.speedY = Math.cos(arg) * speed

    fireImage.style.transform = `matrix(1, 0, 0, 1, ${x}, ${y})`
    parentElement.appendChild(fireImage)
    this.positionX = x
    this.positionY = y
    this.fire = fireImage
  }

  move(): void{
    this.positionX += this.speedX
    this.positionY += this.speedY

    this.fire.style.transform = `matrix(1, 0, 0, 1, ${this.positionX}, ${this.positionY})`
  }

  isCollision(positions: Array<number>): boolean {
    const distance = Math.sqrt((this.positionX - positions[0]) ** 2 + (this.positionY - positions[1]) ** 2)
    if(distance < 25){
      return true
    }else{
      return false
    }
  }

  isOutStage(): boolean {
    if(this.positionX < -50 || this.positionX > 800 || this.positionY < -50 || this.positionY > 600){
      return true
    }else{
      return false
    }
  }
}