import type { Resolvers } from "@generated/types";
import { multiFileUpload } from "@lib/upload";
import { Super, ISuper } from "@models/index";
import { hash } from "bcrypt";

type IFile = {
  mimetype: string;
  filename: string;
  encoding: string;
  createReadStream: () => Promise<any>;
};

export const resolvers: Resolvers = {
  Query: {
    getAll: async (_, __, {}) => {
      const superAdmins: ISuper[] = await Super.find({});
      return superAdmins;
    },
  },
  Mutation: {
    addSuper: async (_, { input }) => {
      const { name, email, password } = input!;

      // hash password
      const passwordHash = await hash(password, 10);

      // save user in database
      const superAdmin: ISuper = await Super.create({
        name,
        email,
        password: passwordHash,
      });

      return superAdmin;
    },
    addImage: async (_, { input }) => {
      const { files } = input!;
      let images = await multiFileUpload(files as IFile[]);
      return images;
    },
  },
};
