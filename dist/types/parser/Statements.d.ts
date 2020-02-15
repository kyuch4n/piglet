export declare class BaseStatement {
    protected type: string;
    constructor(type: string);
}
export declare class ConditionStatement extends BaseStatement {
    protected test: string;
    protected consequent: Array<BaseStatement>;
    constructor(type: string);
    setTest(test: string): void;
    setConsequent(consequent: Array<BaseStatement>): void;
}
export declare class Program extends BaseStatement {
    private consequent;
    constructor();
    setConsequent(consequent: Array<BaseStatement>): void;
    getConsequent(): Array<BaseStatement>;
}
export declare class NodeStatement extends BaseStatement {
    private value;
    constructor(value: string);
    getValue(): string;
}
export declare class BreakStatement extends BaseStatement {
    constructor();
}
export declare class ContinueStatement extends BaseStatement {
    constructor();
}
export declare class SwitchStatement extends BaseStatement {
    constructor();
}
export declare class IfStatement extends ConditionStatement {
    constructor();
}
export declare class CaseStatement extends ConditionStatement {
    constructor();
}
export declare class WhileStatement extends ConditionStatement {
    constructor();
}
export declare class DoWhileStatement extends ConditionStatement {
    constructor();
}
