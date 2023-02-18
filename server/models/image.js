'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Image.belongsTo(models.Product, { foreignKey: 'ProductId' })
      // define association here
    }
  }
  Image.init({
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'ProductId is required'
        },
        notEmpty: {
          msg: 'ProductId is required'
        }
      }
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'imgUrl is required'
        },
        notEmpty: {
          msg: 'imgUrl is required'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};