const { getMongoConnection } = require('../data/mongoConnector');
const config = require('../config');

//***************************************** Helper functions ************************************************//
let client;

async function getConnection() {
  try {
    if (!client) {
      client = await getMongoConnection();
    }
    return { db: client.db(config.mongoDbName).collection('records') };
  } catch (err) {
    console.log('MongoDb connection error', err);
    return false;
  }
}

//********************************************* Exports ****************************************************//
module.exports.getConnection = getConnection;
