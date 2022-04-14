import Stripe from "stripe";

//init stripe
export const stripe = new Stripe(process.env.STRIPE_API_KEY as string, {
  typescript: true,
  apiVersion: "2020-08-27",
});
