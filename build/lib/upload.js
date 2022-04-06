"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileStreamAzure = exports.multiFileUpload = exports.getFileStream = exports.uploadProcessToAzure = exports.typeCheck = void 0;
const uuid_1 = require("uuid");
// import fs from "fs";
const index_1 = require("../models/index");
const azure_service_1 = require("../services/azure.service");
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
const uploadProcessToAzure = async (file) => {
    let { createReadStream, mimetype, filename, encoding } = await file;
    const myfile = await createReadStream();
    let key = `${(0, uuid_1.v4)()}.${filename.split(' ').join('')}`;
    let container = await azure_service_1.azureDoor.getContainerClient('bab');
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
exports.uploadProcessToAzure = uploadProcessToAzure;
//Mime type check
const typeCheck = async ({ mimetype }) => {
    if (mimetypeAllowed.indexOf(mimetype) > 0) {
        return false;
    }
    else {
        return true;
    }
};
exports.typeCheck = typeCheck;
const getFileStreamAzure = async (fileKey) => {
    const blockBlobClient = await azure_service_1.azureDoor
        .getContainerClient('bab')
        .getBlockBlobClient(fileKey);
    return blockBlobClient.url;
    // return (await blockBlobClient.download()).readableStreamBody;
};
exports.getFileStreamAzure = getFileStreamAzure;
const getFileStream = async (fileKey) => {
    // return getStream(imagesRef);
};
exports.getFileStream = getFileStream;
const multiFileUpload = async (files) => {
    files.forEach((file, idx) => {
        let t = typeCheck(file);
        if (!t) {
            throw new Error(`the ${idx + 1} file Type unsupported broo 👴🏿`);
        }
    });
    let res = await Promise.all(files.map(async (file) => {
        let { key, success, mimetype } = await uploadProcessToAzure(file);
        if (!success)
            throw new Error('there is a problem with uploading please try again 👴🏿');
        let addImage = new index_1.Media({
            src: key,
            alt: 'first image',
            type: mimetype.split('/')[0],
        });
        await addImage.save();
        return addImage.id;
    }));
    return res;
};
exports.multiFileUpload = multiFileUpload;
//# sourceMappingURL=upload.js.map