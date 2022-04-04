import { BlobServiceClient } from '@azure/storage-blob';

const { AZURE_STR } = process.env;

// Create the BlobServiceClient object which will be used to create a container client
export const azureDoor = new BlobServiceClient(AZURE_STR as string);
