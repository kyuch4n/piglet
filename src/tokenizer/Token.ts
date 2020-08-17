import { TokenType } from './Definitions';

/**
 * TODO: 标记 line && cloumn
 */
class Position {
  line: number;
  column: number;

  constructor() {
    this.line = -1;
    this.column = -1;
  }
}

export default class Token {
  private type: TokenType;
  private value: string;
  private position: Position | null;

  constructor(type: TokenType, value: string) {
    this.type = type;
    this.value = value;
    this.position = null;
  }

  getType(): TokenType {
    return this.type;
  }

  getValue(): string {
    return this.value;
  }

  getPosition(): Position | null {
    return this.position;
  }
}
