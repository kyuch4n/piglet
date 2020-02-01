var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Token", "./InputStream", "./Definitions", "../utils/EnumExtension"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Token_1 = __importDefault(require("./Token"));
    var InputStream_1 = __importDefault(require("./InputStream"));
    var Definitions_1 = require("./Definitions");
    var EnumExtension_1 = require("../utils/EnumExtension");
    var Tokenizer = /** @class */ (function () {
        function Tokenizer() {
            this.tokens = [];
            this.inputStream = new InputStream_1.default();
        }
        Tokenizer.prototype.isWhiteSpace = function (ch) {
            return " \t\n".indexOf(ch) >= 0;
        };
        Tokenizer.prototype.isCommentStart = function (ch) {
            return ch === "#";
        };
        Tokenizer.prototype.isPunc = function (ch) {
            return EnumExtension_1.hasEnumValue(Definitions_1.Punctuation, ch);
        };
        Tokenizer.prototype.isIdentifierStart = function (ch) {
            return /[$_a-z\u4e00-\u9fa5]/i.test(ch);
        };
        Tokenizer.prototype.isEndOfComment = function (ch) {
            return ch === "\n";
        };
        Tokenizer.prototype.isEndOfKeyword = function (ch) {
            return /[^a-z]/.test(ch);
        };
        Tokenizer.prototype.isEndOfNode = function (ch) {
            return this.isPunc(ch);
        };
        Tokenizer.prototype.readWhile = function (func) {
            if (this.inputStream.eof())
                return "";
            if (func.call(this, this.inputStream.peek()))
                return "";
            return this.inputStream.next() + this.readWhile(func);
        };
        Tokenizer.prototype.parse = function (code) {
            this.inputStream.set(code);
            while (!this.inputStream.eof()) {
                var ch = this.inputStream.next();
                /** skip Whitespace */
                if (this.isWhiteSpace(ch))
                    continue;
                /** Comment */
                else if (this.isCommentStart(ch)) {
                    var comment = this.readWhile(this.isEndOfComment).trim();
                    this.tokens.push(new Token_1.default("comment", comment));
                }
                /** Punctuation */
                else if (this.isPunc(ch)) {
                    if (ch !== Definitions_1.Punctuation.SEMICOLON)
                        this.tokens.push(new Token_1.default("punctuation", ch));
                }
                /** Identifier */
                else if (this.isIdentifierStart(ch)) {
                    var maybeKeyword = ch + this.readWhile(this.isEndOfKeyword);
                    /** Keyword */
                    if (EnumExtension_1.hasEnumValue(Definitions_1.Keyword, maybeKeyword))
                        this.tokens.push(new Token_1.default("keyword", maybeKeyword));
                    /** Node */
                    else {
                        var node = (maybeKeyword + this.readWhile(this.isEndOfNode)).trim();
                        this.tokens.push(new Token_1.default("node", node));
                    }
                }
                /** Can't handle */
                else
                    this.inputStream.croak("Can't handle character: " + ch);
            }
            return this.tokens;
        };
        return Tokenizer;
    }());
    exports.default = Tokenizer;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5pemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Rva2VuaXplci9Ub2tlbml6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBQSxrREFBMkI7SUFDM0IsOERBQXVDO0lBQ3ZDLDZDQUFvRDtJQUNwRCx3REFBcUQ7SUFFckQ7UUFJRTtZQUhRLFdBQU0sR0FBaUIsRUFBRSxDQUFBO1lBSS9CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxxQkFBVyxFQUFFLENBQUE7UUFDdEMsQ0FBQztRQUVELGdDQUFZLEdBQVosVUFBYSxFQUFVO1lBQ3JCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDakMsQ0FBQztRQUVELGtDQUFjLEdBQWQsVUFBZSxFQUFVO1lBQ3ZCLE9BQU8sRUFBRSxLQUFLLEdBQUcsQ0FBQTtRQUNuQixDQUFDO1FBRUQsMEJBQU0sR0FBTixVQUFPLEVBQVU7WUFDZixPQUFPLDRCQUFZLENBQUMseUJBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUN0QyxDQUFDO1FBRUQscUNBQWlCLEdBQWpCLFVBQWtCLEVBQVU7WUFDMUIsT0FBTyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDekMsQ0FBQztRQUVELGtDQUFjLEdBQWQsVUFBZSxFQUFVO1lBQ3ZCLE9BQU8sRUFBRSxLQUFLLElBQUksQ0FBQTtRQUNwQixDQUFDO1FBRUQsa0NBQWMsR0FBZCxVQUFlLEVBQVU7WUFDdkIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQzFCLENBQUM7UUFFRCwrQkFBVyxHQUFYLFVBQVksRUFBVTtZQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDeEIsQ0FBQztRQUVELDZCQUFTLEdBQVQsVUFBVSxJQUFjO1lBQ3RCLElBQUksSUFBSSxDQUFDLFdBQVcs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