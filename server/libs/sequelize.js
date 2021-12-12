// const { Sequelize } = require('sequelize');
// const { config } = require('../config/config');
// const setupModels = require('./../db/models');

// const options = {
//   dialect: 'postgres',
//   logging: config.isProd ? false : true,
// }

// if(config.isProd){
//   options.dialectOptions = {
//     ssl: {
//       rejectUnauthorized: false
//     }
//   }
// }
// const sequelize = new Sequelize(config.dbUrl, options);
// setupModels(sequelize);
// //sequelize.sync();

// module.exports = sequelize;

const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setupModels = require('./../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

setupModels(sequelize);
sequelize.sync();

module.exports = sequelize;
