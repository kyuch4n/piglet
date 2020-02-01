export default class Token {
  type: string
  value: string
  // TODO: new Position(line, column)
  // start: Position
  // end: Position

  constructor(type: string, value: string) {
    this.type = type
    this.value = value
  }
}