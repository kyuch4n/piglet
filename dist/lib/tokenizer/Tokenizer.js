"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Token = _interopRequireDefault(require("./Token"));

var _InputStream = _interopRequireDefault(require("./InputStream"));

var _Definitions = require("./Definitions");

var _EnumExtension = require("../utils/EnumExtension");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tokenizer =
/*#__PURE__*/
function () {
  function Tokenizer() {
    _classCallCheck(this, Tokenizer);

    _defineProperty(this, "tokens", []);

    _defineProperty(this, "inputStream", void 0);

    this.inputStream = new _InputStream["default"]();
  }

  _createClass(Tokenizer, [{
    key: "isCommentStart",
    value: function isCommentStart(ch) {
      return ch === "#";
    }
  }, {
    key: "isWhiteSpace",
    value: function isWhiteSpace(ch) {
      return " \t\n".indexOf(ch) >= 0;
    }
  }, {
    key: "isPunc",
    value: function isPunc(ch) {
      return (0, _EnumExtension.hasEnumValue)(_Definitions.Punctuation, ch);
    }
  }, {
    key: "isIdentifierStart",
    value: function isIdentifierStart(ch) {
      return /[a-z0-9\u4e00-\u9fa5]/i.test(ch);
    }
  }, {
    key: "readWhile",
    value: function readWhile(func) {
      if (this.inputStream.eof()) return "";
      if (func.call(this, this.inputStream.peek())) return "";
      return this.inputStream.next() + this.readWhile(func);
    }
  }, {
    key: "isEndOfComment",
    value: function isEndOfComment(ch) {
      return ch === "\n";
    }
  }, {
    key: "isEndOfKeyword",
    value: function isEndOfKeyword(ch) {
      return this.isCommentStart(ch) || this.isWhiteSpace(ch) || this.isPunc(ch);
    }
  }, {
    key: "isEndOfNode",
    value: function isEndOfNode(ch) {
      return this.isPunc(ch);
    }
  }, {
    key: "parse",
    value: function parse(code) {
      this.inputStream.set(code);

      while (!this.inputStream.eof()) {
        var ch = this.inputStream.next();

        if (this.isCommentStart(ch)) {
          /** skip */
          this.readWhile(this.isEndOfComment);
        }
        /** Whitespace */
        else if (this.isWhiteSpace(ch)) {}
          /** skip */

          /** Punctuation */
          else if (this.isPunc(ch)) this.tokens.push(new _Token["default"](_Definitions.TokenType.PUNCTUATION, ch));
            /** Identifier */
            else if (this.isIdentifierStart(ch)) {
                var maybeKeyword = ch + this.readWhile(this.isEndOfKeyword);
                /** Keyword */

                if ((0, _EnumExtension.hasEnumValue)(_Definitions.Keyword, maybeKeyword)) this.tokens.push(new _Token["default"](_Definitions.TokenType.KEYWORD, maybeKeyword));
                /** Node */
                else {
                    var node = (maybeKeyword + this.readWhile(this.isEndOfNode)).trim();
                    this.tokens.push(new _Token["default"](_Definitions.TokenType.NODE, node));
                  }
              }
              /** Can't handle */
              else this.inputStream.croak("Can't handle character: ".concat(ch));
      }

      return this.tokens;
    }
  }]);

  return Tokenizer;
}();

exports["default"] = Tokenizer;