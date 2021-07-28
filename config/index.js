process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

//Here we store env variables and config variables.
module.exports = {
  port: process.env.PORT || 8080,
  mongoDbName: process.env.MONGODB_NAME,
  mongodbConnections: process.env.MONGODB_CONNECTIONS || 'mongodb://localhost:27017',
}
