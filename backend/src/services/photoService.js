const azure = require("azure-storage");
const blobService = azure.createBlobService();

exports.uploadPhoto = (containerName, blobName, stream, streamLength) => {
  return new Promise((resolve, reject) => {
    blobService.createBlockBlobFromStream(
      containerName,
      blobName,
      stream,
      streamLength,
      (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      }
    );
  });
};
