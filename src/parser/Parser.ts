import Token from "../tokenizer/Token"
import Tokenizer from "../tokenizer/Tokenizer"
import InputStream from "./InputStream"

import {
  Program,
  // NodeStatement,
  // SwitchStatement,
  // BreakeStatement,
  // ContinueStatement,
  // IfStatement,
  // CaseStatement,
  // WhileStatement,
  // DoWhileStatement
} from "./Statements"

export default class Parser {
  private tokenizer: Tokenizer
  private tokens: Array<Token> = []
  private inputStream: InputStream

  constructor() {
    this.tokenizer = new Tokenizer()
    this.inputStream = new InputStream()
  }

  private parseIf() {
    
  }

  parse(code: string) {
    /** tokenizer */
    this.tokens = this.tokenizer.parse(code)

    /** parser to AST */
    this.inputStream.set(this.tokens)
    const program = new Program()

    while (!this.inputStream.eof()) {
      const token = this.inputStream.next()
    }

    console.log(program)
    return program
  }
}