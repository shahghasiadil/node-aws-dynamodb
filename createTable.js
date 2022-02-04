
const dynamodb = require('./config/db').dynamodb;

var params = {
    TableName : "Scranton",
    KeySchema: [
        { AttributeName: "id", KeyType: "HASH"},  //Partition key
],
    AttributeDefinitions: [
        { AttributeName: "id", AttributeType: "N" },
],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
};

dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.error("Error JSON.", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table.", JSON.stringify(data, null, 2));
    }
});