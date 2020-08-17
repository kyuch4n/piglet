import Token from '../tokenizer/Token';
import Tokenizer from '../tokenizer/Tokenizer';
// import { TokenType, Keyword, Punctuation } from '../tokenizer/Definitions';
// import InputStream from './InputStream';
import { Program } from './Statements';

export default class Parser {
  parse(code: string) {
    const tokenizer = new Tokenizer();
    const tokens: Array<Token> = tokenizer.parse(code);

    // TODO: parse 2 AST
    const program = new Program();
    return {
      program,
      tokens
    };
  }
}
