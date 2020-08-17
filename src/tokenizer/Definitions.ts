export enum Keyword {
  IF = 'if',
  ELIF = 'elif',
  ELSE = 'else',
  DO = 'do',
  WHILE = 'while',
  CONTINUE = 'continue',
  BREAK = 'break',
  SWITCH = 'switch',
  CASE = 'case',
  DEFAULT = 'default'
}

export enum Punctuation {
  BRACE_L = '{',
  BRACE_R = '}',
  PAREN_L = '(',
  PAREN_R = ')',
  BRACKET_L = '[',
  BRACKET_R = ']',
  COLON = ':',
  SEMICOLON = ';'
}

export enum TokenType {
  PUNCTUATION = 'punctuation',
  NODE = 'node',
  KEYWORD = 'keyword'
}
