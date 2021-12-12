'use strict';
const { CAT_TABLE, CatSchema } = require("../models/cat.model");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CAT_TABLE, CatSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(CAT_TABLE);
  }
};
