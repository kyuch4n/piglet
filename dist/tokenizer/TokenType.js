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
    var TokenType;
    (function (TokenType) {
        TokenType["BRACKET_L"] = "[";
        TokenType["BRACKET_R"] = "]";
        TokenType["BRACE_L"] = "{";
        TokenType["BRACE_R"] = "}";
        TokenType["PAREN_L"] = "(";
        TokenType["PAREN_R"] = ")";
        TokenType["SEMICOLON"] = ";";
        TokenType["HASH"] = "#";
        TokenType["RETURN"] = "return";
        TokenType["IF"] = "if";
        TokenType["ELSE"] = "else";
        TokenType["DO"] = "do";
        TokenType["WHILE"] = "while";
    })(TokenType || (TokenType = {}));
    exports.default = TokenType;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5UeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Rva2VuaXplci9Ub2tlblR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFBQSxJQUFLLFNBY0o7SUFkRCxXQUFLLFNBQVM7UUFDWiw0QkFBZSxDQUFBO1FBQ2YsNEJBQWUsQ0FBQTtRQUNmLDBCQUFhLENBQUE7UUFDYiwwQkFBYSxDQUFBO1FBQ2IsMEJBQWEsQ0FBQTtRQUNiLDBCQUFhLENBQUE7UUFDYiw0QkFBZSxDQUFBO1FBQ2YsdUJBQVUsQ0FBQTtRQUNWLDhCQUFpQixDQUFBO1FBQ2pCLHNCQUFTLENBQUE7UUFDVCwwQkFBYSxDQUFBO1FBQ2Isc0JBQVMsQ0FBQTtRQUNULDRCQUFlLENBQUE7SUFDakIsQ0FBQyxFQWRJLFNBQVMsS0FBVCxTQUFTLFFBY2I7SUFFRCxrQkFBZSxTQUFTLENBQUEifQ==