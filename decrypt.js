const AWS = require('@aws-sdk/client-kms');

const kmsClient = new AWS.KMS();

const keyId = '<keyId without arn:aws:kms>';
const keyToDecrypt = '<Key to decrypt>';

const decryptParams = {
    KeyId: keyId,
    CiphertextBlob: new Buffer.from(keyToDecrypt, 'base64')
};

kmsClient.decrypt(decryptParams, (err, data) => {
    if (err) {
        console.log(err, err.stack);
       } else {
        const { Plaintext } = data;
        console.log(data);
        console.log(Buffer.from(Plaintext).toString());
       }
});
