import { Grid } from './grid'

export class Banana {
  private banana: HTMLElement
  private positionX: number
  private positionY: number
  private grid: Grid

  constructor(parentElement: HTMLElement, grid: Grid){
    this.grid = grid

    const bananaImage = document.createElement('img')
    bananaImage.id = `${grid.row}-${grid.column}`
    bananaImage.src = '/src/assets/banana.png'
    bananaImage.width = 50
    bananaImage.height = 50
    bananaImage.style.position = 'absolute'
    bananaImage.style.top = `${grid.row * 50}px`
    bananaImage.style.left = `${grid.column * 50}px`
    parentElement.appendChild(bananaImage)

    this.positionX = grid.column * 50
    this.positionY = grid.row * 50
    this.banana = bananaImage
  }

  isCollision(positions: Array<number>): boolean {
    const distance = Math.sqrt((this.positionX - positions[0]) ** 2 + (this.positionY - positions[1]) ** 2)
    if(distance < 25){
      return true
    }else{
      return false
    }
  }

  destroy(): void {
    const bananaElement = document.getElementById(`${this.grid.row}-${this.grid.column}`)
    if(!bananaElement) return
    bananaElement.remove()
    this.grid.release()
  }
}