(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Token = /** @class */ (function () {
        // TODO: new Position(line, column)
        // start: Position
        // end: Position
        function Token(type, value) {
            this.type = type;
            this.value = value;
        }
        return Token;
    }());
    exports.default = Token;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdG9rZW5pemVyL1Rva2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQUE7UUFHRSxtQ0FBbUM7UUFDbkMsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUVoQixlQUFZLElBQVksRUFBRSxLQUFhO1lBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ3BCLENBQUM7UUFDSCxZQUFDO0lBQUQsQ0FBQyxBQVhELElBV0MifQ==