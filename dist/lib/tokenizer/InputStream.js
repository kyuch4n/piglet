"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputStream =
/*#__PURE__*/
function () {
  function InputStream() {
    _classCallCheck(this, InputStream);

    _defineProperty(this, "input", "");

    _defineProperty(this, "position", 0);

    _defineProperty(this, "line", 1);

    _defineProperty(this, "column", 0);
  }

  _createClass(InputStream, [{
    key: "set",
    value: function set(input) {
      this.input = input;
      this.position = 0;
      this.line = 1;
      this.column = 0;
    }
    /**
     * returns the next value and also discards it from the stream
     */

  }, {
    key: "next",
    value: function next() {
      var _char = this.input.charAt(this.position++);

      if (_char === "\n") this.line++, this.column = 0;else this.column++;
      return _char;
    }
    /** 
     * returns the next value but without removing it from the stream
     */

  }, {
    key: "peek",
    value: function peek() {
      return this.input.charAt(this.position);
    }
    /**
     * returns true if and only if there are no more values in the stream
     */

  }, {
    key: "eof",
    value: function eof() {
      return this.peek() === "";
    }
    /**
     * does throw new Error(msg)
     */

  }, {
    key: "croak",
    value: function croak(msg) {
      throw new Error("".concat(msg, " (").concat(this.line, ":").concat(this.column, ")"));
    }
  }]);

  return InputStream;
}();

exports["default"] = InputStream;