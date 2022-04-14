import { gql } from "apollo-server-express";
// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  input inputCustomer {
    email: String
    name: String
    phone: String
  }
  type InvoiceSettings {
    custom_fields: String
    default_payment_method: String
    footer: String
  }

  type Address {
    city: String
    country: String
    line1: String
    line2: String
    postal_code: String
    state: String
  }

  type Customer {
    id: String
    object: String
    address: Address
    balance: Int
    created: Int
    currency: String
    default_source: String
    delinquent: Boolean
    description: String
    discount: String
    email: String
    invoice_prefix: String
    livemode: Boolean
    name: String
    next_invoice_sequence: Int
    phone: String
    shipping: String
    tax_exempt: String
    test_clock: String
    preferred_locales: [String]
    invoice_settings: InvoiceSettings
  }

  input inputSubscribe {
    customerId: String
    priceId: String
  }

  type responseSub {
    clientSecret: String
    subscription: String
  }

  type Query {
    getCustomers: [Customer]!
  }

  type Mutation {
    addCustomer(input: inputCustomer): Customer
    subscribeToSub(input: inputSubscribe): responseSub
  }
`;
