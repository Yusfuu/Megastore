"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeAccount = exports.StoreStatus = exports.Sort = exports.Role = exports.CacheControlScope = exports.AccountStatus = void 0;
const enums_1 = require("../ts/enums");
Object.defineProperty(exports, "Role", { enumerable: true, get: function () { return enums_1.Role; } });
const enums_2 = require("../ts/enums");
Object.defineProperty(exports, "StoreStatus", { enumerable: true, get: function () { return enums_2.StoreStatus; } });
const enums_3 = require("../ts/enums");
Object.defineProperty(exports, "Sort", { enumerable: true, get: function () { return enums_3.Sort; } });
const enums_4 = require("../ts/enums");
Object.defineProperty(exports, "AccountStatus", { enumerable: true, get: function () { return enums_4.AccountStatus; } });
const enums_5 = require("../ts/enums");
Object.defineProperty(exports, "TypeAccount", { enumerable: true, get: function () { return enums_5.TypeAccount; } });
var CacheControlScope;
(function (CacheControlScope) {
    CacheControlScope["Private"] = "PRIVATE";
    CacheControlScope["Public"] = "PUBLIC";
})(CacheControlScope = exports.CacheControlScope || (exports.CacheControlScope = {}));
//# sourceMappingURL=types.js.map