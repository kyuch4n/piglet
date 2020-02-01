import Token from "../tokenizer/Token"
import Tokenizer from "../tokenizer/Tokenizer"

export default class Parser {
  private tokenizer: Tokenizer
  private tokens: Array<Token> = []

  constructor() {
    this.tokenizer = new Tokenizer()
  }

  parse(code: string) {
    this.tokens = this.tokenizer.parse(code)
    return { tokens: this.tokens }
  }
}