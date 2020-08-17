export declare class BaseStatement {
    private type;
    constructor(type: string);
    getType(): string;
}
export declare class Program extends BaseStatement {
    private consequent;
    constructor();
    setConsequent(consequent: Array<BaseStatement>): void;
    getConsequent(): Array<BaseStatement>;
}
