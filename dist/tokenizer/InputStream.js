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
    var InputStream = /** @class */ (function () {
        function InputStream() {
            this.input = "";
            this.position = 0;
            this.line = 1;
            this.column = 0;
        }
        InputStream.prototype.set = function (input) {
            this.input = input;
            this.position = 0;
            this.line = 1;
            this.column = 0;
        };
        /**
         * returns the next value and also discards it from the stream
         */
        InputStream.prototype.next = function () {
            var char = this.input.charAt(this.position++);
            if (char === "\n")
                this.line++, this.column = 0;
            else
                this.column++;
            return char;
        };
        /**
         * returns the next value but without removing it from the stream
         */
        InputStream.prototype.peek = function () {
            return this.input.charAt(this.position);
        };
        /**
         * returns true if and only if there are no more values in the stream
         */
        InputStream.prototype.eof = function () {
            return this.peek() === "";
        };
        /**
         * does throw new Error(msg)
         */
        InputStream.prototype.croak = function (msg) {
            throw new Error(msg + " (" + this.line + ":" + this.column + ")");
        };
        return InputStream;
    }());
    exports.default = InputStream;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5wdXRTdHJlYW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdG9rZW5pemVyL0lucHV0U3RyZWFtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQUE7UUFBQTtZQUNVLFVBQUssR0FBVyxFQUFFLENBQUE7WUFDbEIsYUFBUSxHQUFHLENBQUMsQ0FBQTtZQUVwQixTQUFJLEdBQUcsQ0FBQyxDQUFBO1lBQ1IsV0FBTSxHQUFHLENBQUMsQ0FBQTtRQTJDWixDQUFDO1FBekNDLHlCQUFHLEdBQUgsVUFBSSxLQUFhO1lBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUE7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUE7WUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNqQixDQUFDO1FBRUQ7O1dBRUc7UUFDSCwwQkFBSSxHQUFKO1lBQ0UsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFFaEQsSUFBSSxJQUFJLEtBQUssSUFBSTtnQkFDZixJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7O2dCQUU3QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7WUFFZixPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFFRDs7V0FFRztRQUNILDBCQUFJLEdBQUo7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBRUQ7O1dBRUc7UUFDSCx5QkFBRyxHQUFIO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQzVCLENBQUM7UUFFRDs7V0FFRztRQUNILDJCQUFLLEdBQUwsVUFBTSxHQUFXO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBSSxHQUFHLFVBQUssSUFBSSxDQUFDLElBQUksU0FBSSxJQUFJLENBQUMsTUFBTSxNQUFHLENBQUMsQ0FBQztRQUMxRCxDQUFDO1FBQ0gsa0JBQUM7SUFBRCxDQUFDLEFBaERELElBZ0RDIn0=