"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeCustomer = exports.createCustomer = void 0;
const stripe_service_1 = require("../services/stripe.service");
const createCustomer = async ({ data, ship_address, address, }) => {
    return await stripe_service_1.stripe.customers.create({
        ...data,
        shipping: {
            address: ship_address,
            name: data.name ?? "",
        },
        address,
    });
};
exports.createCustomer = createCustomer;
const subscribeCustomer = async ({ customerId, priceId, }) => {
    const subscription = await stripe_service_1.stripe.subscriptions.create({
        customer: customerId,
        items: [
            {
                price: priceId,
            },
        ],
        payment_behavior: "default_incomplete",
        expand: ["latest_invoice.payment_intent"],
    });
    console.log(subscription);
    const data = {
        subscriptionId: subscription.id,
        //@ts-ignore
        clientSecret: subscription?.latest_invoice?.payment_intent?.client_secret,
    };
    return data;
};
exports.subscribeCustomer = subscribeCustomer;
// export const
//# sourceMappingURL=stripe.js.map