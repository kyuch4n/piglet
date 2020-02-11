export default class Token {
  private type: string
  private value: string
  /**
   * TODO: start and end
   * @class Position(line, column) 
   */

  constructor(type: string, value: string) {
    this.type = type
    this.value = value
  }

  getType(): string {
    return this.type
  }

  getValue(): string {
    return this.value
  }
}