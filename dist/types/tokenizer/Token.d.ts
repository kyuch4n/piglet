import { TokenType } from './Definitions';
export default class Token {
    private type;
    private value;
    /**
     * TODO: start and end
     * @class Position(line, column)
     */
    constructor(type: TokenType, value: string);
    getType(): TokenType;
    getValue(): string;
}
