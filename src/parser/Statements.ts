export class BaseStatement {
  private type: string;

  constructor(type: string) {
    this.type = type;
  }

  getType(): string {
    return this.type;
  }
}

export class Program extends BaseStatement {
  private consequent: Array<BaseStatement> = [];

  constructor() {
    super('prog');
  }

  setConsequent(consequent: Array<BaseStatement>) {
    this.consequent = consequent;
  }

  getConsequent(): Array<BaseStatement> {
    return this.consequent;
  }
}
