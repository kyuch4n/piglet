"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Tokenizer = _interopRequireDefault(require("../tokenizer/Tokenizer"));

var _Definitions = require("../tokenizer/Definitions");

var _InputStream = _interopRequireDefault(require("./InputStream"));

var _Statements = require("./Statements");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Parser =
/*#__PURE__*/
function () {
  function Parser() {
    _classCallCheck(this, Parser);
  }

  _createClass(Parser, [{
    key: "parseKeywords",
    value: function parseKeywords(keyword) {
      switch (keyword) {
        case _Definitions.Keyword.BREAK:
          return new _Statements.BreakStatement();

        case _Definitions.Keyword.CONTINUE:
          return new _Statements.ContinueStatement();

        default:
          throw new Error("unknown keyword: ".concat(keyword));
      }
    }
  }, {
    key: "parse",
    value: function parse(source) {
      if (typeof source === "string") {
        var tokenizer = new _Tokenizer["default"]();

        var _tokens = tokenizer.parse(source);

        var program = new _Statements.Program();
        program.setConsequent(this.parse(_tokens));
        return program;
      }

      var inputStream = new _InputStream["default"](source);
      var ret = [];

      while (!inputStream.eof()) {
        var token = inputStream.next();

        switch (token.getType()) {
          case _Definitions.TokenType.NODE:
            ret.push(new _Statements.NodeStatement(token.getValue()));
            break;

          case _Definitions.TokenType.KEYWORD:
            ret.push(this.parseKeywords(token.getValue()));
            break;

          default:
            /** skip */
            break;
        }
      }

      return ret;
    }
  }]);

  return Parser;
}();

exports["default"] = Parser;