const client = require('./config/db').client;

const params = {
        TableName: "Scranton",
};

client.scan(params, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data)
    }
});