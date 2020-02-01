import Token from "./Token";
export default class Tokenizer {
    private tokens;
    private inputStream;
    constructor();
    isWhiteSpace(ch: string): boolean;
    isCommentStart(ch: string): boolean;
    isPunc(ch: string): boolean;
    isIdentifierStart(ch: string): boolean;
    isEndOfComment(ch: string): boolean;
    isEndOfKeyword(ch: string): boolean;
    isEndOfNode(ch: string): boolean;
    readWhile(func: Function): string;
    parse(code: string): Array<Token>;
}
