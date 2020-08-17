"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * TODO: 标记 line && cloumn
 */
var Position = function Position() {
  _classCallCheck(this, Position);

  _defineProperty(this, "line", void 0);

  _defineProperty(this, "column", void 0);

  this.line = -1;
  this.column = -1;
};

var Token = /*#__PURE__*/function () {
  function Token(type, value) {
    _classCallCheck(this, Token);

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "value", void 0);

    _defineProperty(this, "position", void 0);

    this.type = type;
    this.value = value;
    this.position = null;
  }

  _createClass(Token, [{
    key: "getType",
    value: function getType() {
      return this.type;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
  }]);

  return Token;
}();

exports["default"] = Token;