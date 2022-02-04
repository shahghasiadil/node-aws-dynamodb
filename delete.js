
const docClient = require('./config/db').client;

const table = "Scranton";

const params = {
    TableName:table,
    Key: {
        "id":1
     }
};

console.log("Attempting a conditional delete...");
docClient.delete(params, function(err, data) {
    if (err) {
        console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
    }
});