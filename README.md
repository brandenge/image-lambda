# LAB - Class 17

## Project: AWS Cloud Servers

### Author: Branden Ge

### Problem Domain

This lab demonstrates how to use AWS Lambda, triggered by an AWS S3 event. The S3 event is a user uploading a new image, which triggers the AWS Lambda function to download an image.json from the S3 bucket, and append the newly uploaded image to the json file.

[images.json file](https://cf-lab17-demo.s3.us-east-2.amazonaws.com/images.json)

### How to use the lambda

1) Upload an image to S3 in the AWS console to trigger the lambda
2) Wait for the lambda to finish working
3) Check the S3 bucket to see if the image was added to the images.json

#### Issues

- Getting used to all the different parts of the AWS console - S3, Lambda, CloudWatch, etc.

#### Process

1) Create an S3 bucket
2) Create the AWS Lambda function which will retrieve the bucket, collect all the .jpg files, and then write to an images.json file with all of the metadata for those images.
3) Add the trigger for the AWS lambda function, which will be when something is uploaded to the S3 bucket

#### Credits: [Demo code from Ryan Gallaway at Code Fellows](https://github.com/codefellows/seattle-code-javascript-401d48/tree/main/class-17/inclass-demo)
