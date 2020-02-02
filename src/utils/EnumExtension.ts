export function hasEnumValue(SomeEnum: any, value: string): boolean {
  for (let name in SomeEnum) {
    if (SomeEnum[name] === value) return true
  }
  return false
}

export function getAllEnumValues(SomeEnum: any): Array<string> {
  const values: Array<string> = []
  for (let name in SomeEnum) values.push(SomeEnum[name])
  return values
}