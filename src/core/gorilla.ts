export class Gorilla {
  private gorilla: HTMLElement
  private positionX: number = 0
  private positionY: number = 0
  //ゴリラが移動中かどうか
  private isMoving: boolean = false

  constructor(element: HTMLElement){
    this.gorilla = element
  }

  move(toX: number, toY: number): void{
    //ゴリラが移動中の場合、他の地点へ移動させない
    if(this.isMoving) return
    this.isMoving = true

    //移動先がゴリラの中心となるよう調整する
    toX = toX - 25
    toY = toY - 25

    //ゴリラ移動アニメーション
    this.gorilla.animate(
      [
        {
          transform: `translate(${this.positionX}px, ${this.positionY}px)`,
        },
        {
          transform: `translate(${toX}px, ${toY}px)`,
        },
      ],
      {
        duration: 2000,
        fill: 'forwards'
      }
      )
    this.positionX = toX
    this.positionY = toY
    
    //アニメーション終了時ゴリラを移動完了状態にする
    window.setTimeout(()=> {
      this.isMoving = false
    }, 2000)
  }
  gorillaCoordinates(): string | null {
    const matrix = getComputedStyle(this.gorilla).getPropertyValue('transform')
    const a = matrix.split(', ')
    if(a.length === 6){
      const positionX = Math.floor( ((Number(a[4])) + 25) / 50 )
      const positionY = Math.floor( (Number(a[5].replace(')', '')) + 25) / 50)
      return `${positionX}-${positionY}`
    }
    return null
  }
}