const client = require('./config/db').client;

const table = "Scranton";

const params = {
    TableName: table,
    Key:{
       "id":1
    }
};

client.get(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    }
});