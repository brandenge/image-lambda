const AWS = require('aws-sdk');
const S3 = new AWS.S3();

exports.handler = async (event) => {
  const bucketName = event.Records[0].s3.bucket.name;
  const key = event.Records[0].s3.object.key;
  const size = event.Records[0].s3.object.size;

  const responseObject = await S3.getObject({Bucket: bucketName, Key: key}).promise();
  const stringifiedImages = JSON.stringify(responseObject.Body);
  const parsedImages = JSON.parse(stringifiedImages);

  const response = {
    statusCode: 200,
    body: JSON.stringify(parsedImages),
  };
  return response;
};
