import { Mimetype } from './enums';

export type IFile = {
  mimetype: Mimetype;
  filename: string;
  encoding: string;
  createReadStream: () => Promise<any>;
};
