import { fisherYatesShuffle } from './utils/shuffle'

export class Grid {
  private static rowNumber: number = 12
  private static columnNumber: number = 16
  private static grids: Array<Grid> = []
  readonly row: number
  readonly column: number
  private isUsed: boolean

  private constructor(n: number, m: number) {
    this.row = n
    this.column = m
    this.isUsed = false
  }

  static setup(): void {
    for(let i = 0; i < Grid.rowNumber; i++){
      for(let j = 0; j < Grid.columnNumber; j++){
        Grid.grids.push(new Grid(i, j))
      }
    }
  }

  static getUnUsedGrid(): Grid | null{
    fisherYatesShuffle(Grid.grids)
    const grid = Grid.grids.filter(grid => !grid.isUsed)[0]
    if(!grid) return null
    grid.isUsed = true
    return grid
  }

  release(): void {
    this.isUsed = false
  }
}