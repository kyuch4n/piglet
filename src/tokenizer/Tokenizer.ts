import Token from "./Token"
import InputStream from "./InputStream"
import { Keyword, Punctuation } from "./Definitions"
import { hasEnumValue } from "../utils/EnumExtension"

export default class Tokenizer {
  private tokens: Array<Token> = []
  private inputStream: InputStream

  constructor() {
    this.inputStream = new InputStream()
  }

  isWhiteSpace(ch: string): boolean {
    return " \t\n".indexOf(ch) >= 0
  }

  isPunc(ch: string): boolean {
    return hasEnumValue(Punctuation, ch)
  }

  isIdentifierStart(ch: string): boolean {
    return /[a-z0-9\u4e00-\u9fa5]/i.test(ch)
  }

  isEndOfKeyword(ch: string): boolean {
    return this.isWhiteSpace(ch) || this.isPunc(ch)
  }

  isEndOfNode(ch: string): boolean {
    return this.isPunc(ch)
  }

  readWhile(func: Function): string {
    if (this.inputStream.eof()) return ""
    if (func.call(this, this.inputStream.peek())) return ""
    return this.inputStream.next() + this.readWhile(func)
  }

  parse(code: string): Array<Token> {
    this.inputStream.set(code)

    while (!this.inputStream.eof()) {
      const ch = this.inputStream.next()

      /** Whitespace */
      if (this.isWhiteSpace(ch)) continue

      /** Punctuation */
      else if (this.isPunc(ch)) this.tokens.push(new Token("punctuation", ch))

      /** Identifier */
      else if (this.isIdentifierStart(ch)) {
        const maybeKeyword = ch + this.readWhile(this.isEndOfKeyword)

        /** Keyword */
        if (hasEnumValue(Keyword, maybeKeyword)) this.tokens.push(new Token("keyword", maybeKeyword))

        /** Node */
        else {
          const node = (maybeKeyword + this.readWhile(this.isEndOfNode)).trim()
          this.tokens.push(new Token("node", node))
        }
      }

      /** Can't handle */
      else this.inputStream.croak(`Can't handle character: ${ch}`)
    }

    return this.tokens
  }
}