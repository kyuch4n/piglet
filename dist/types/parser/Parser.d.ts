import Token from "../tokenizer/Token";
import { Program, BaseStatement } from "./Statements";
export default class Parser {
    private parseKeywords;
    parse(code: string): Program;
    parse(tokens: Array<Token>): Array<BaseStatement>;
}
