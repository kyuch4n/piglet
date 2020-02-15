import Token from "./Token";
export default class Tokenizer {
    private tokens;
    private inputStream;
    constructor();
    private isCommentStart;
    private isWhiteSpace;
    private isPunc;
    private isIdentifierStart;
    private readWhile;
    private isEndOfComment;
    private isEndOfKeyword;
    private isEndOfNode;
    parse(code: string): Array<Token>;
}
