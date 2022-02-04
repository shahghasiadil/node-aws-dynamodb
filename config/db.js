const AWS = require("aws-sdk");

AWS.config.update({
    region: "local",
  endpoint: "http://localhost:8000"
});

module.exports.dynamodb = new AWS.DynamoDB();
module.exports.client = new AWS.DynamoDB.DocumentClient();