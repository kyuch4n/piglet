import Token from '../tokenizer/Token';
export default class InputStream {
    private tokens;
    private position;
    constructor(tokens: Array<Token>);
    /**
     * returns the next value and also discards it from the stream
     */
    next(): Token;
    /**
     * returns the next value but without removing it from the stream
     */
    peek(): Token | null;
    /**
     * returns true if and only if there are no more values in the stream
     */
    eof(): boolean;
}
