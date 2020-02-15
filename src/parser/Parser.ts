import Token from "../tokenizer/Token"
import Tokenizer from "../tokenizer/Tokenizer"
import { TokenType, Keyword } from "../tokenizer/Definitions"
import InputStream from "./InputStream"

import {
  Program,
  BaseStatement,
  NodeStatement,
  BreakStatement,
  ContinueStatement,
  // SwitchStatement,
  // IfStatement,
  // CaseStatement,
  // WhileStatement,
  // DoWhileStatement
} from "./Statements"

export default class Parser {
  private parseKeywords(keyword: string /**, inputStream: InputStream */): BaseStatement {
    switch (keyword) {
      case Keyword.BREAK:
        return new BreakStatement()
      case Keyword.CONTINUE:
        return new ContinueStatement()
      default:
        throw new Error(`unknown keyword: ${keyword}`)
    }
  }

  parse(code: string): Program
  parse(tokens: Array<Token>): Array<BaseStatement>
  parse(source: Array<Token> | string): Array<BaseStatement> | Program {
    if (typeof source === "string") {
      const tokenizer = new Tokenizer()
      const tokens = tokenizer.parse(source)

      const program = new Program()
      program.setConsequent(this.parse(tokens))
      return program
    }

    const inputStream = new InputStream(source)
    const ret: Array<BaseStatement> = []
    while (!inputStream.eof()) {
      const token = inputStream.next()

      switch (token.getType()) {
        case TokenType.NODE:
          ret.push(new NodeStatement(token.getValue()))
          break
        case TokenType.KEYWORD:
          ret.push(this.parseKeywords(token.getValue()))
          break;
        default:
          /** skip */
          break
      }
    }
    return ret
  }
}