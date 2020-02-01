var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../tokenizer/Tokenizer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Tokenizer_1 = __importDefault(require("../tokenizer/Tokenizer"));
    var Parser = /** @class */ (function () {
        function Parser() {
            this.tokens = [];
            this.tokenizer = new Tokenizer_1.default();
        }
        Parser.prototype.parse = function (code) {
            this.tokens = this.tokenizer.parse(code);
            return { tokens: this.tokens };
        };
        return Parser;
    }());
    exports.default = Parser;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BhcnNlci9QYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBQSxxRUFBOEM7SUFFOUM7UUFJRTtZQUZRLFdBQU0sR0FBaUIsRUFBRSxDQUFBO1lBRy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBUyxFQUFFLENBQUE7UUFDbEMsQ0FBQztRQUVELHNCQUFLLEdBQUwsVUFBTSxJQUFZO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDeEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7UUFDaEMsQ0FBQztRQUNILGFBQUM7SUFBRCxDQUFDLEFBWkQsSUFZQyJ9