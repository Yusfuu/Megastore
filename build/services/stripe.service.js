"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripe = void 0;
const stripe_1 = __importDefault(require("stripe"));
//init stripe
exports.stripe = new stripe_1.default(process.env.STRIPE_API_KEY, {
    typescript: true,
    apiVersion: "2020-08-27",
});
//# sourceMappingURL=stripe.service.js.map