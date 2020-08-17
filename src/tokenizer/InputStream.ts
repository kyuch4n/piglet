export default class InputStream {
  private input: string = '';
  private position = 0;

  private line = 1;
  private column = 0;

  set(input: string) {
    this.input = input;
    this.position = 0;
    this.line = 1;
    this.column = 0;
  }

  /**
   * returns the next value and also discards it from the stream
   */
  next(): string {
    const char = this.input.charAt(this.position++);

    if (char === '\n') this.line++, (this.column = 0);
    else this.column++;

    return char;
  }

  /**
   * returns the next value but without removing it from the stream
   */
  peek(): string {
    return this.input.charAt(this.position);
  }

  /**
   * returns true if and only if there are no more values in the stream
   */
  eof(): boolean {
    return this.peek() === '';
  }

  /**
   * does throw new Error(msg)
   */
  croak(msg: string) {
    throw new Error(`${msg} (${this.line}:${this.column})`);
  }
}
