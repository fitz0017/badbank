const { MongoClient } = require("mongodb");

const connectionString = "mongodb://localhost:27017/myproject";

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(connectionString)
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
