import type { Resolvers } from "@generated/types";
import { GraphQLUpload } from "graphql-upload";

export const resolvers: Resolvers = {
  Upload: GraphQLUpload,
};
