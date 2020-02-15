export class BaseStatement {
  protected type: string

  constructor(type: string) {
    this.type = type
  }
}

export class ConditionStatement extends BaseStatement {
  protected test: string = ""
  protected consequent: Array<BaseStatement> = []

  constructor(type: string) {
    super(type)
  }

  setTest(test: string) {
    this.test = test
  }

  setConsequent(consequent: Array<BaseStatement>) {
    this.consequent = consequent
  }
}


export class Program extends BaseStatement {
  private consequent: Array<BaseStatement> = []

  constructor() {
    super("prog")
  }

  setConsequent(consequent: Array<BaseStatement>) {
    this.consequent = consequent
  }

  getConsequent(): Array<BaseStatement> {
    return this.consequent
  }
}

export class NodeStatement extends BaseStatement {
  private value: string

  constructor(value: string) {
    super("node")
    this.value = value
  }

  getValue(): string {
    return this.value
  }
}

export class BreakStatement extends BaseStatement {
  constructor() {
    super("break")
  }
}

export class ContinueStatement extends BaseStatement {
  constructor() {
    super("continue")
  }
}

export class SwitchStatement extends BaseStatement {
  constructor() {
    super("switch")
  }
}

export class IfStatement extends ConditionStatement {
  constructor() {
    super("if")
  }
}

export class CaseStatement extends ConditionStatement {
  constructor() {
    super("case")
  }
}

export class WhileStatement extends ConditionStatement {
  constructor() {
    super("while")
  }
}

export class DoWhileStatement extends ConditionStatement {
  constructor() {
    super("do-while")
  }
}