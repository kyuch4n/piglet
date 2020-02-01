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
    var Keyword;
    (function (Keyword) {
        Keyword["RETURN"] = "return";
        Keyword["IF"] = "if";
        Keyword["ELSE"] = "else";
        Keyword["DO"] = "do";
        Keyword["WHILE"] = "while";
    })(Keyword = exports.Keyword || (exports.Keyword = {}));
    var Punctuation;
    (function (Punctuation) {
        Punctuation["BRACKET_L"] = "[";
        Punctuation["BRACKET_R"] = "]";
        Punctuation["BRACE_L"] = "{";
        Punctuation["BRACE_R"] = "}";
        Punctuation["PAREN_L"] = "(";
        Punctuation["PAREN_R"] = ")";
        Punctuation["SEMICOLON"] = ";";
    })(Punctuation = exports.Punctuation || (exports.Punctuation = {}));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmaW5pdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdG9rZW5pemVyL0RlZmluaXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQUEsSUFBWSxPQU1YO0lBTkQsV0FBWSxPQUFPO1FBQ2pCLDRCQUFpQixDQUFBO1FBQ2pCLG9CQUFTLENBQUE7UUFDVCx3QkFBYSxDQUFBO1FBQ2Isb0JBQVMsQ0FBQTtRQUNULDBCQUFlLENBQUE7SUFDakIsQ0FBQyxFQU5XLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQU1sQjtJQUVELElBQVksV0FRWDtJQVJELFdBQVksV0FBVztRQUNyQiw4QkFBZSxDQUFBO1FBQ2YsOEJBQWUsQ0FBQTtRQUNmLDRCQUFhLENBQUE7UUFDYiw0QkFBYSxDQUFBO1FBQ2IsNEJBQWEsQ0FBQTtRQUNiLDRCQUFhLENBQUE7UUFDYiw4QkFBZSxDQUFBO0lBQ2pCLENBQUMsRUFSVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQVF0QiJ9