export default class InputStream {
    private input;
    private position;
    line: number;
    column: number;
    set(input: string): void;
    /**
     * returns the next value and also discards it from the stream
     */
    next(): string;
    /**
     * returns the next value but without removing it from the stream
     */
    peek(): string;
    /**
     * returns true if and only if there are no more values in the stream
     */
    eof(): boolean;
    /**
     * does throw new Error(msg)
     */
    croak(msg: string): void;
}
