"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreStatus = exports.Sort = exports.Role = exports.CacheControlScope = void 0;
const enums_1 = require("../ts/enums");
Object.defineProperty(exports, "Role", { enumerable: true, get: function () { return enums_1.Role; } });
const enums_2 = require("../ts/enums");
Object.defineProperty(exports, "StoreStatus", { enumerable: true, get: function () { return enums_2.StoreStatus; } });
var CacheControlScope;
(function (CacheControlScope) {
    CacheControlScope["Private"] = "PRIVATE";
    CacheControlScope["Public"] = "PUBLIC";
})(CacheControlScope = exports.CacheControlScope || (exports.CacheControlScope = {}));
var Sort;
(function (Sort) {
    Sort["Asc"] = "asc";
    Sort["Desc"] = "desc";
})(Sort = exports.Sort || (exports.Sort = {}));
//# sourceMappingURL=types.js.map