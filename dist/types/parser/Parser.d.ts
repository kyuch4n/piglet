import Token from '../tokenizer/Token';
import { Program } from './Statements';
export default class Parser {
    parse(code: string): {
        program: Program;
        tokens: Token[];
    };
}
