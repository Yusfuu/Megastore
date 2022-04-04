"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const stripe_1 = require("../../lib/stripe");
exports.resolvers = {
    Query: {},
    Mutation: {
        addCustomer: async (_, { input }) => {
            const { email, name, phone } = input;
            const customer = (await (0, stripe_1.createCustomer)({
                data: { email: email, name: name, phone: phone },
                address: {
                    city: "Brothers",
                    country: "US",
                    line1: "27 Fredrick Ave",
                    postal_code: "97712",
                    state: "CA",
                },
                ship_address: {
                    city: "Brothers",
                    country: "US",
                    line1: "27 Fredrick Ave",
                    postal_code: "97712",
                    state: "CA",
                },
            }));
            return customer;
        },
        subscribeToSub: async (_, { input }) => {
            const { customerId, priceId } = input;
            // const customer = await Store.findOne({ where: { id: customerId } });
            // if (!customer) {
            //   throw new Error("Customer not found");
            // }
            if (customerId && priceId) {
                const subscriptionDone = await (0, stripe_1.subscribeCustomer)({
                    customerId,
                    priceId,
                });
                console.log("test : ", subscriptionDone.clientSecret);
                return subscriptionDone;
            }
            else {
                throw new Error("Customer or price not found");
            }
        },
    },
};
//# sourceMappingURL=resolvers.js.map