import { TokenType } from './Definitions';
/**
 * TODO: 标记 line && cloumn
 */
declare class Position {
    line: number;
    column: number;
    constructor();
}
export default class Token {
    private type;
    private value;
    private position;
    constructor(type: TokenType, value: string);
    getType(): TokenType;
    getValue(): string;
    getPosition(): Position | null;
}
export {};
