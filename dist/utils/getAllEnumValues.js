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
    function getAllEnumValues(SomeEnum) {
        var values = [];
        for (var name_1 in SomeEnum)
            values.push(SomeEnum[name_1]);
        return values;
    }
    exports.default = getAllEnumValues;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWxsRW51bVZhbHVlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9nZXRBbGxFbnVtVmFsdWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQUEsU0FBd0IsZ0JBQWdCLENBQUMsUUFBYTtRQUNwRCxJQUFNLE1BQU0sR0FBa0IsRUFBRSxDQUFBO1FBQ2hDLEtBQUssSUFBSSxNQUFJLElBQUksUUFBUTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQUksQ0FBQyxDQUFDLENBQUE7UUFDdEQsT0FBTyxNQUFNLENBQUE7SUFDZixDQUFDO0lBSkQsbUNBSUMifQ==