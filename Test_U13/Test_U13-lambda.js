let AWS = require('aws-sdk');
const sqs = new AWS.SQS();
exports.handler = function (event, context, callback) {

    console.log("Lambda was triggered by API");

    //read from the sqs

    sqs.receiveMessage({
        QueueUrl: 'https://sqs.us-east-1.amazonaws.com/480964559519/test_read',
        AttributeNames: ['All'],
        MaxNumberOfMessages: '1',
        VisibilityTimeout: '30',
        WaitTimeSeconds: '0'
    },
    
     function (err, data) {
        if (err) {
            console.log("Receive Error", err);
        } else if (data.Messages) {
            var message = data.Messages[0]
            // your logic to access this fetched message, should be here
        } else {
            console.log("No messages found in the queue");
        }
    });


}