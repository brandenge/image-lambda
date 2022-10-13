const AWS = require('aws-sdk');
const S3 = new AWS.S3();

exports.handler = async (event) => {
  const bucketName = event.Records[0].s3.bucket.name;
  const fileName = event.Records[0].s3.object.key;
  const size = event.Records[0].s3.object.size;
  let parsedImages = [];
  try {
    const responseObject = await S3.getObject({Bucket: bucketName, Key: 'images.json'}).promise();
    const stringifiedImages = responseObject.Body.toString();
    parsedImages = JSON.parse(stringifiedImages);
  } catch (e) {
    console.log('ERROR: the file does not exist yet - it will be created', e);
  }

  const newImage = {
    name: fileName,
    size: size,
    type: 'jpg',
  };

  const foundIndex = parsedImages.findIndex(image => image.name === fileName);
  if (foundIndex === -1) parsedImages.push(newImage);
  else parsedImages[foundIndex] = newImage;

  const params = {
    Bucket: bucketName,
    Key: 'images.json',
    Body: JSON.stringify(parsedImages),
    ContentType: 'application/json',
  };
  await S3.putObject(params).promise();
};
