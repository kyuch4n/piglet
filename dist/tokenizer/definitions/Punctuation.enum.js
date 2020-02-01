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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHVuY3R1YXRpb24uZW51bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbml6ZXIvZGVmaW5pdGlvbnMvUHVuY3R1YXRpb24uZW51bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFBLElBQVksV0FRWDtJQVJELFdBQVksV0FBVztRQUNyQiw4QkFBZSxDQUFBO1FBQ2YsOEJBQWUsQ0FBQTtRQUNmLDRCQUFhLENBQUE7UUFDYiw0QkFBYSxDQUFBO1FBQ2IsNEJBQWEsQ0FBQTtRQUNiLDRCQUFhLENBQUE7UUFDYiw4QkFBZSxDQUFBO0lBQ2pCLENBQUMsRUFSVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQVF0QiJ9