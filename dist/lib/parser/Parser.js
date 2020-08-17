"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Tokenizer = _interopRequireDefault(require("../tokenizer/Tokenizer"));

var _Statements = require("./Statements");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Parser = /*#__PURE__*/function () {
  function Parser() {
    _classCallCheck(this, Parser);
  }

  _createClass(Parser, [{
    key: "parse",
    value: function parse(code) {
      var tokenizer = new _Tokenizer["default"]();
      var tokens = tokenizer.parse(code);
      var program = new _Statements.Program();
      return program;
    }
  }]);

  return Parser;
}();

exports["default"] = Parser;