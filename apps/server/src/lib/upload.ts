import { v4 as uuid } from 'uuid';
// import fs from "fs";
import { Media, IMedia } from '@models/index';
import { azureDoor } from '@services/azure.service';

type IFile = {
  mimetype: string;
  filename: string;
  encoding: string;
  createReadStream: () => Promise<any>;
};

const mimetypeAllowed = [
  'image/png',
  'image/jpeg',
  'image/jpg',
  'application/x-mpegURL',
  'video/MP2T',
  'video/3gpp',
  'video/quicktime',
  'video/x-msvideo',
  'video/x-ms-wmv',
  'image/gif',
  'image/webp',
  'video/mp4',
  'video/x-matroska',
];

const uploadProcessToAzure = async (file: IFile) => {
  let { createReadStream, mimetype, filename, encoding } = await file;
  const myfile = await createReadStream();

  let key = `${uuid()}.${filename.split(' ').join('')}`;

  let container = await azureDoor.getContainerClient('bab');

  const blob = container.getBlockBlobClient(key);
  blob.uploadStream(myfile, undefined, undefined, {
    blobHTTPHeaders: {
      blobContentType: mimetype,
      blobContentEncoding: encoding,
    },
  });

  return {
    success: true,
    filename,
    mimetype,
    encoding,
    key: blob.url,
  };
};

//Mime type check
const typeCheck = async ({ mimetype }: { mimetype: string }) => {
  if (mimetypeAllowed.indexOf(mimetype) > 0) {
    return false;
  } else {
    return true;
  }
};

const getFileStreamAzure = async (fileKey: string) => {
  const blockBlobClient = await azureDoor
    .getContainerClient('bab')
    .getBlockBlobClient(fileKey);
  return blockBlobClient.url;
  // return (await blockBlobClient.download()).readableStreamBody;
};
const getFileStream = async (fileKey: string) => {
  // return getStream(imagesRef);
};

const multiFileUpload = async (files: IFile[]) => {
  files.forEach((file: IFile, idx: number) => {
    let t = typeCheck(file);
    if (!t) {
      throw new Error(`the ${idx + 1} file Type unsupported broo 👴🏿`);
    }
  });
  let res = await Promise.all(
    files.map(async (file: IFile) => {
      let { key, success, mimetype } = await uploadProcessToAzure(file);

      if (!success)
        throw new Error(
          'there is a problem with uploading please try again 👴🏿'
        );
      let addImage = new Media({
        src: key,
        alt: 'first image',
        type: mimetype.split('/')[0],
      });
      await addImage.save();
      return addImage.id;
    })
  );

  return res;
};

export {
  typeCheck,
  uploadProcessToAzure,
  getFileStream,
  multiFileUpload,
  getFileStreamAzure,
};
