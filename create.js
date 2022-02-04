
const client = require('./config/db').client;
const fs = require('fs')

console.log("Importing Scranton into DynamoDB. Please wait.");

let scranton = JSON.parse(fs.readFileSync('scrantonData.json', 'utf8'));

scranton.forEach(function(scran) {
  console.log(scran)
    const params = {
        TableName: "Scranton",
        Item: {
            "id": scran.id,
            "type": scran.type,
            "name": scran.name,
            "description": scran.description
        }
    };
    client.put(params, function(err, data) {
       if (err) {
           console.error(err);
       } else {
           console.log("PutItem succeeded:", scran.name);
       }
    });
});