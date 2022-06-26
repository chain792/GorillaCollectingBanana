export class Snake {
  private snake: HTMLElement
  private positionX: number
  private positionY: number
  private static snakeNumber: number = 0
  private speed: number = 0.5

  constructor(parentElement: HTMLElement){
    const snakeImage = document.createElement('img')
    snakeImage.src = '/snake.png'
    snakeImage.width=50
    snakeImage.height=50
    snakeImage.style.position = 'absolute'
    snakeImage.style.top = '0px'
    snakeImage.style.left = '0px'
    let x = 0
    let y = 0
    switch (Snake.snakeNumber % 4){
      case 0:
        x = Math.random() * 800
        y = -50
        break
      case 1:
        x = 800
        y = Math.random() * 600
        break
      case 2:
        x = Math.random() * 800
        y = 600
        break
      case 3:
        x = -50
        y = Math.random() * 600
        break
    }
    snakeImage.style.transform = `matrix(1, 0, 0, 1, ${x}, ${y})`
    parentElement.appendChild(snakeImage)
    this.positionX = x
    this.positionY = y
    this.snake = snakeImage
    Snake.snakeNumber++
  }

  move(positions: Array<number>): void{
    const vectorX = positions[0] - this.positionX
    const vectorY = positions[1] - this.positionY
    const vectorLength = Math.sqrt(vectorX ** 2 + vectorY ** 2)
    const unitVectorX = vectorX / vectorLength
    const unitVectorY = vectorY / vectorLength

    this.snake.style.transform = `matrix(1, 0, 0, 1, ${this.positionX + unitVectorX * this.speed}, ${this.positionY + unitVectorY * this.speed})`

    this.positionX = this.positionX + unitVectorX * this.speed
    this.positionY = this.positionY + unitVectorY * this.speed
  }

  isCollision(positions: Array<number>): boolean {
    const distance = Math.sqrt((this.positionX - positions[0]) ** 2 + (this.positionY - positions[1]) ** 2)
    if(distance < 25){
      return true
    }else{
      return false
    }
  }

  static initialize(): void {
    Snake.snakeNumber = 0
  }
}