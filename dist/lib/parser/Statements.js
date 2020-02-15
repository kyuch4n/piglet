"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DoWhileStatement = exports.WhileStatement = exports.CaseStatement = exports.IfStatement = exports.SwitchStatement = exports.ContinueStatement = exports.BreakStatement = exports.NodeStatement = exports.Program = exports.ConditionStatement = exports.BaseStatement = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BaseStatement = function BaseStatement(type) {
  _classCallCheck(this, BaseStatement);

  _defineProperty(this, "type", void 0);

  this.type = type;
};

exports.BaseStatement = BaseStatement;

var ConditionStatement =
/*#__PURE__*/
function (_BaseStatement) {
  _inherits(ConditionStatement, _BaseStatement);

  function ConditionStatement(type) {
    var _this;

    _classCallCheck(this, ConditionStatement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConditionStatement).call(this, type));

    _defineProperty(_assertThisInitialized(_this), "test", "");

    _defineProperty(_assertThisInitialized(_this), "consequent", []);

    return _this;
  }

  _createClass(ConditionStatement, [{
    key: "setTest",
    value: function setTest(test) {
      this.test = test;
    }
  }, {
    key: "setConsequent",
    value: function setConsequent(consequent) {
      this.consequent = consequent;
    }
  }]);

  return ConditionStatement;
}(BaseStatement);

exports.ConditionStatement = ConditionStatement;

var Program =
/*#__PURE__*/
function (_BaseStatement2) {
  _inherits(Program, _BaseStatement2);

  function Program() {
    var _this2;

    _classCallCheck(this, Program);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Program).call(this, "prog"));

    _defineProperty(_assertThisInitialized(_this2), "consequent", []);

    return _this2;
  }

  _createClass(Program, [{
    key: "setConsequent",
    value: function setConsequent(consequent) {
      this.consequent = consequent;
    }
  }, {
    key: "getConsequent",
    value: function getConsequent() {
      return this.consequent;
    }
  }]);

  return Program;
}(BaseStatement);

exports.Program = Program;

var NodeStatement =
/*#__PURE__*/
function (_BaseStatement3) {
  _inherits(NodeStatement, _BaseStatement3);

  function NodeStatement(value) {
    var _this3;

    _classCallCheck(this, NodeStatement);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(NodeStatement).call(this, "node"));

    _defineProperty(_assertThisInitialized(_this3), "value", void 0);

    _this3.value = value;
    return _this3;
  }

  _createClass(NodeStatement, [{
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }]);

  return NodeStatement;
}(BaseStatement);

exports.NodeStatement = NodeStatement;

var BreakStatement =
/*#__PURE__*/
function (_BaseStatement4) {
  _inherits(BreakStatement, _BaseStatement4);

  function BreakStatement() {
    _classCallCheck(this, BreakStatement);

    return _possibleConstructorReturn(this, _getPrototypeOf(BreakStatement).call(this, "break"));
  }

  return BreakStatement;
}(BaseStatement);

exports.BreakStatement = BreakStatement;

var ContinueStatement =
/*#__PURE__*/
function (_BaseStatement5) {
  _inherits(ContinueStatement, _BaseStatement5);

  function ContinueStatement() {
    _classCallCheck(this, ContinueStatement);

    return _possibleConstructorReturn(this, _getPrototypeOf(ContinueStatement).call(this, "continue"));
  }

  return ContinueStatement;
}(BaseStatement);

exports.ContinueStatement = ContinueStatement;

var SwitchStatement =
/*#__PURE__*/
function (_BaseStatement6) {
  _inherits(SwitchStatement, _BaseStatement6);

  function SwitchStatement() {
    _classCallCheck(this, SwitchStatement);

    return _possibleConstructorReturn(this, _getPrototypeOf(SwitchStatement).call(this, "switch"));
  }

  return SwitchStatement;
}(BaseStatement);

exports.SwitchStatement = SwitchStatement;

var IfStatement =
/*#__PURE__*/
function (_ConditionStatement) {
  _inherits(IfStatement, _ConditionStatement);

  function IfStatement() {
    _classCallCheck(this, IfStatement);

    return _possibleConstructorReturn(this, _getPrototypeOf(IfStatement).call(this, "if"));
  }

  return IfStatement;
}(ConditionStatement);

exports.IfStatement = IfStatement;

var CaseStatement =
/*#__PURE__*/
function (_ConditionStatement2) {
  _inherits(CaseStatement, _ConditionStatement2);

  function CaseStatement() {
    _classCallCheck(this, CaseStatement);

    return _possibleConstructorReturn(this, _getPrototypeOf(CaseStatement).call(this, "case"));
  }

  return CaseStatement;
}(ConditionStatement);

exports.CaseStatement = CaseStatement;

var WhileStatement =
/*#__PURE__*/
function (_ConditionStatement3) {
  _inherits(WhileStatement, _ConditionStatement3);

  function WhileStatement() {
    _classCallCheck(this, WhileStatement);

    return _possibleConstructorReturn(this, _getPrototypeOf(WhileStatement).call(this, "while"));
  }

  return WhileStatement;
}(ConditionStatement);

exports.WhileStatement = WhileStatement;

var DoWhileStatement =
/*#__PURE__*/
function (_ConditionStatement4) {
  _inherits(DoWhileStatement, _ConditionStatement4);

  function DoWhileStatement() {
    _classCallCheck(this, DoWhileStatement);

    return _possibleConstructorReturn(this, _getPrototypeOf(DoWhileStatement).call(this, "do-while"));
  }

  return DoWhileStatement;
}(ConditionStatement);

exports.DoWhileStatement = DoWhileStatement;