import Token from "../tokenizer/Token"

export default class InputStream {
  private tokens: Array<Token> = []
  private position = 0

  set(tokens: Array<Token>) {
    this.tokens = tokens
    this.position = 0
  }

  /**
   * returns the next value and also discards it from the stream
   */
  next(): Token {
    return this.tokens[this.position++]
  }

  /** 
   * returns the next value but without removing it from the stream
   */
  peek(): Token | null {
    if (this.position === this.tokens.length) {
      return null
    }

    return this.tokens[this.position]
  }

  /**
   * returns true if and only if there are no more values in the stream
   */
  eof(): boolean {
    return !this.peek()
  }

  /**
   * does throw new Error(msg)
   */
  croak(msg: string, token: Token) {
    throw new Error(`${msg}, token: ${token}`)
  }
}