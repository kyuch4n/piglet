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
    function hasEnumValue(SomeEnum, value) {
        for (var name_1 in SomeEnum) {
            if (SomeEnum[name_1] === value)
                return true;
        }
        return false;
    }
    exports.hasEnumValue = hasEnumValue;
    function getAllEnumValues(SomeEnum) {
        var values = [];
        for (var name_2 in SomeEnum)
            values.push(SomeEnum[name_2]);
        return values;
    }
    exports.getAllEnumValues = getAllEnumValues;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW51bUV4dGVuc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9FbnVtRXh0ZW5zaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQUEsU0FBZ0IsWUFBWSxDQUFDLFFBQWEsRUFBRSxLQUFhO1FBQ3ZELEtBQUssSUFBSSxNQUFJLElBQUksUUFBUSxFQUFFO1lBQ3pCLElBQUksUUFBUSxDQUFDLE1BQUksQ0FBQyxLQUFLLEtBQUs7Z0JBQUUsT0FBTyxJQUFJLENBQUE7U0FDMUM7UUFDRCxPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUM7SUFMRCxvQ0FLQztJQUVELFNBQWdCLGdCQUFnQixDQUFDLFFBQWE7UUFDNUMsSUFBTSxNQUFNLEdBQWtCLEVBQUUsQ0FBQTtRQUNoQyxLQUFLLElBQUksTUFBSSxJQUFJLFFBQVE7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFJLENBQUMsQ0FBQyxDQUFBO1FBQ3RELE9BQU8sTUFBTSxDQUFBO0lBQ2YsQ0FBQztJQUpELDRDQUlDIn0=