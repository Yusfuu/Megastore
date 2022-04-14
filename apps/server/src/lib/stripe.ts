import { stripe } from "@services/stripe.service";

type ICustomer = {
  email?: string;
  name?: string;
  phone?: string;
};

type IAddress = {
  city: string;
  country: string;
  line1: string;
  postal_code: string;
  state: string;
};

export const createCustomer = async ({
  data,
  ship_address,
  address,
}: {
  data: ICustomer;
  ship_address: IAddress;
  address: IAddress;
}) => {
  return await stripe.customers.create({
    ...data,
    shipping: {
      address: ship_address,
      name: data.name ?? "",
    },
    address,
  });
};

export const subscribeCustomer = async ({
  customerId,
  priceId,
}: {
  customerId: string;
  priceId: string;
}) => {
  const subscription = await stripe.subscriptions.create({
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

// export const
