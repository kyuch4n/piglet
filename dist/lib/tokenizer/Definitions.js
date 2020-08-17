"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenType = exports.Punctuation = exports.Keyword = void 0;
var Keyword;
exports.Keyword = Keyword;

(function (Keyword) {
  Keyword["IF"] = "if";
  Keyword["ELIF"] = "elif";
  Keyword["ELSE"] = "else";
  Keyword["DO"] = "do";
  Keyword["WHILE"] = "while";
  Keyword["CONTINUE"] = "continue";
  Keyword["BREAK"] = "break";
  Keyword["SWITCH"] = "switch";
  Keyword["CASE"] = "case";
  Keyword["DEFAULT"] = "default";
})(Keyword || (exports.Keyword = Keyword = {}));

var Punctuation;
exports.Punctuation = Punctuation;

(function (Punctuation) {
  Punctuation["BRACE_L"] = "{";
  Punctuation["BRACE_R"] = "}";
  Punctuation["PAREN_L"] = "(";
  Punctuation["PAREN_R"] = ")";
  Punctuation["BRACKET_L"] = "[";
  Punctuation["BRACKET_R"] = "]";
  Punctuation["COLON"] = ":";
  Punctuation["SEMICOLON"] = ";";
})(Punctuation || (exports.Punctuation = Punctuation = {}));

var TokenType;
exports.TokenType = TokenType;

(function (TokenType) {
  TokenType["PUNCTUATION"] = "punctuation";
  TokenType["NODE"] = "node";
  TokenType["KEYWORD"] = "keyword";
})(TokenType || (exports.TokenType = TokenType = {}));