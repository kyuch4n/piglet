import { TokenType } from "./Definitions"

export default class Token {
  private type: TokenType
  private value: string
  /**
   * TODO: start and end
   * @class Position(line, column) 
   */

  constructor(type: TokenType, value: string) {
    this.type = type
    this.value = value
  }

  getType(): TokenType {
    return this.type
  }

  getValue(): string {
    return this.value
  }
}