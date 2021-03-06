import Token from './Token';
import InputStream from './InputStream';
import { Keyword, Punctuation, TokenType } from './Definitions';
import { hasEnumValue } from '../utils/EnumExtension';

export default class Tokenizer {
  private tokens: Array<Token> = [];
  private inputStream: InputStream;

  constructor() {
    this.inputStream = new InputStream();
  }

  private isCommentStart(ch: string): boolean {
    return ch === '#';
  }

  private isWhiteSpace(ch: string): boolean {
    return ' \t\n'.indexOf(ch) >= 0;
  }

  private isPunc(ch: string): boolean {
    return hasEnumValue(Punctuation, ch);
  }

  private isIdentifierStart(ch: string): boolean {
    return /[a-z0-9\u4e00-\u9fa5]/i.test(ch);
  }

  private readWhile(func: Function): string {
    if (this.inputStream.eof()) return '';
    if (func.call(this, this.inputStream.peek())) return '';
    return this.inputStream.next() + this.readWhile(func);
  }

  private isEndOfComment(ch: string): boolean {
    return ch === '\n';
  }

  private isEndOfKeyword(ch: string): boolean {
    return this.isCommentStart(ch) || this.isWhiteSpace(ch) || this.isPunc(ch);
  }

  private isEndOfNode(ch: string): boolean {
    return this.isPunc(ch);
  }

  parse(code: string): Array<Token> {
    this.inputStream.set(code);

    while (!this.inputStream.eof()) {
      const ch = this.inputStream.next();

      if (this.isWhiteSpace(ch)) {
        continue;
      }

      if (this.isCommentStart(ch)) {
        this.readWhile(this.isEndOfComment);
        continue;
      }

      if (this.isPunc(ch)) {
        this.tokens.push(new Token(TokenType.PUNCTUATION, ch));
        continue;
      }

      if (this.isIdentifierStart(ch)) {
        const maybeKeyword = ch + this.readWhile(this.isEndOfKeyword);

        // Keyword
        if (hasEnumValue(Keyword, maybeKeyword)) {
          this.tokens.push(new Token(TokenType.KEYWORD, maybeKeyword));
          continue;
        }

        // Node
        const node = (maybeKeyword + this.readWhile(this.isEndOfNode)).trim();
        this.tokens.push(new Token(TokenType.NODE, node));
        continue;
      }

      // Default: Unable to handle
      this.inputStream.croak(`Can't handle character: ${ch}`);
    }

    return this.tokens;
  }
}
