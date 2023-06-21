const AWS = require('@aws-sdk/client-kms');

const kmsClient = new AWS.KMS();

const keyId = '<keyID starting with arn:aws:kms>';
const key = '<key>';
const params = {
    KeyId: keyId,
    Plaintext: new Buffer(key)
};

kmsClient.encrypt(params, (err, data) => {
  if (err) {
    console.log(err, err.stack);
   } else {
    const { CiphertextBlob } = data;
    console.log(Buffer.from(CiphertextBlob).toString('base64'));
  }
});