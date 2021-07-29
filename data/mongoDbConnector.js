const { MongoClient } = require('mongodb');
const config = require('../config');

let connection = null;

//Initialize connection once and reuse the connection if it already exists.
async function getMongoConnection () {
  if (connection && connection?.constructor.name === 'MongoClient') {
    return connection;
  }
  try {
    connection = await MongoClient.connect(
      config.mongodbConnections, 
    )
    return connection;
  } catch(err) {
      console.log('Error in establishing a connection to Mongo server', err);
  }
}

async function closeMongoConnection () {
  if (connection && connection?.constructor.name === 'MongoClient') {
    await connection.close();
  }
  connection = null;
}

//********************************************* Exports ****************************************************//
module.exports.getMongoConnection   = getMongoConnection;
module.exports.closeMongoConnection = closeMongoConnection;