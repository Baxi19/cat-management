const { CatSchema, Cat } = require('./cat.model');

function setupModels(sequelize) {
  Cat.init(CatSchema, Cat.config(sequelize));
}

module.exports = setupModels;
