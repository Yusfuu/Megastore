"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductLimit = exports.TypeAccount = exports.Mimetype = exports.DeliveryStatus = exports.DeliveryType = exports.Sort = exports.AccountStatus = exports.StoreStatus = exports.Role = void 0;
var Role;
(function (Role) {
    Role["USER"] = "USER";
    Role["SELLER"] = "SELLER";
    Role["ADMIN"] = "ADMIN";
    Role["SUPER_ADMIN"] = "SUPER_ADMIN";
})(Role = exports.Role || (exports.Role = {}));
var StoreStatus;
(function (StoreStatus) {
    StoreStatus["ACTIVE"] = "ACTIVE";
    StoreStatus["INACTIVE"] = "INACTIVE";
})(StoreStatus = exports.StoreStatus || (exports.StoreStatus = {}));
var AccountStatus;
(function (AccountStatus) {
    AccountStatus["ACTIVE"] = "ACTIVE";
    AccountStatus["INACTIVE"] = "INACTIVE";
})(AccountStatus = exports.AccountStatus || (exports.AccountStatus = {}));
var Sort;
(function (Sort) {
    Sort["ascending"] = "ascending";
    Sort["descending"] = "descending";
})(Sort = exports.Sort || (exports.Sort = {}));
var DeliveryType;
(function (DeliveryType) {
    DeliveryType["STANDARD"] = "STANDARD";
    DeliveryType["EXPRESS"] = "EXPRESS";
})(DeliveryType = exports.DeliveryType || (exports.DeliveryType = {}));
var DeliveryStatus;
(function (DeliveryStatus) {
    DeliveryStatus["PENDING"] = "PENDING";
    DeliveryStatus["DELIVERED"] = "DELIVERED";
    DeliveryStatus["CANCELED"] = "CANCELED";
})(DeliveryStatus = exports.DeliveryStatus || (exports.DeliveryStatus = {}));
var Mimetype;
(function (Mimetype) {
    Mimetype["JPEG"] = "image/jpeg";
    Mimetype["PNG"] = "image/png";
    Mimetype["GIF"] = "image/gif";
    Mimetype["WEBP"] = "image/webp";
})(Mimetype = exports.Mimetype || (exports.Mimetype = {}));
var TypeAccount;
(function (TypeAccount) {
    TypeAccount["BASIC"] = "BASIC";
    TypeAccount["STARTER"] = "STARTER";
    TypeAccount["PRO"] = "PRO";
    TypeAccount["EXPERT"] = "Expert";
})(TypeAccount = exports.TypeAccount || (exports.TypeAccount = {}));
var ProductLimit;
(function (ProductLimit) {
    ProductLimit[ProductLimit["STARTER"] = 10] = "STARTER";
    ProductLimit[ProductLimit["PRO"] = 50] = "PRO";
    ProductLimit[ProductLimit["EXPERT"] = -1] = "EXPERT";
})(ProductLimit = exports.ProductLimit || (exports.ProductLimit = {}));
//# sourceMappingURL=enums.js.map