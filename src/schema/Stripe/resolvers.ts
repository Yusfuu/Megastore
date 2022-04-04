import type { Resolvers } from "@generated/types";
import paginate from "@lib/pagination";
import { createCustomer, subscribeCustomer } from "@lib/stripe";
import { Store, IStore } from "@models/index";

export interface ICustomer {
  id: string;
  object: string;
  address: any;
  balance: number;
  created: number;
  currency: string;
  default_source: string;
  delinquent: boolean;
  description: string;
  discount: any;
  email: string;
  invoice_prefix: string;
  invoice_settings: InvoiceSettings;
  livemode: boolean;
  metadata: Metadata;
  name: string;
  next_invoice_sequence: number;
  phone: any;
  preferred_locales: any[];
  shipping: any;
  tax_exempt: string;
  test_clock: any;
}

export interface InvoiceSettings {
  custom_fields: any;
  default_payment_method: any;
  footer: any;
}

export interface Metadata {}

export const resolvers: Resolvers = {
  Query: {},
  Mutation: {
    addCustomer: async (_, { input }) => {
      const { email, name, phone } = input!;
      const customer = (await createCustomer({
        data: { email: email!, name: name!, phone: phone! },
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
      })) as ICustomer;
      return customer;
    },
    subscribeToSub: async (_, { input }) => {
      const { customerId, priceId } = input!;
      // const customer = await Store.findOne({ where: { id: customerId } });
      // if (!customer) {
      //   throw new Error("Customer not found");
      // }
      if (customerId && priceId) {
        const subscriptionDone = await subscribeCustomer({
          customerId,
          priceId,
        });
        console.log("test : ", subscriptionDone.clientSecret);
        return subscriptionDone;
      }else{
        throw new Error("Customer or price not found");
      }
    },
  },
};
