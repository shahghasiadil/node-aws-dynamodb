
const dynamodb = require('./config/db').dynamodb;

const params = {

};

dynamodb.listTables(params, function(err, data) {
    if (err) {
        console.error("Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("All Tables", data);
    }
});
