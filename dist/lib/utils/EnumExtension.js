"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasEnumValue = hasEnumValue;
exports.getAllEnumValues = getAllEnumValues;

function hasEnumValue(SomeEnum, value) {
  for (var name in SomeEnum) {
    if (SomeEnum[name] === value) return true;
  }

  return false;
}

function getAllEnumValues(SomeEnum) {
  var values = [];

  for (var name in SomeEnum) {
    values.push(SomeEnum[name]);
  }

  return values;
}