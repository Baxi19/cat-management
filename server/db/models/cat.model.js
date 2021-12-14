const { Model, DataTypes } = require("sequelize");

const CAT_TABLE = 'cats';

const CatSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
      allowNull: false,
      type: DataTypes.STRING,
  },
  breed: {
      allowNull: false,
      type: DataTypes.STRING,
  },
  description: {
      allowNull: false,
      type: DataTypes.STRING,
  },
  latitude: {
      allowNull: false,
      type: DataTypes.DECIMAL(10, 6),
  },
  longitude: {
      allowNull: false,
      type: DataTypes.DECIMAL(10, 6),
  },
  image: {
      allowNull: false,
      type: DataTypes.TEXT,
  }
};

class Cat extends Model {
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: CAT_TABLE,
      modelName: 'Cat',
      timestamps: false,
    };
  }
}
module.exports = { CAT_TABLE, CatSchema, Cat };
