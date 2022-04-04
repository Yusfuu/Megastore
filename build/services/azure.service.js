"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.azureDoor = void 0;
const storage_blob_1 = require("@azure/storage-blob");
const { AZURE_STR } = process.env;
// Create the BlobServiceClient object which will be used to create a container client
exports.azureDoor = new storage_blob_1.BlobServiceClient(AZURE_STR);
//# sourceMappingURL=azure.service.js.map