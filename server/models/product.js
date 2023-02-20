'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.Image, { foreignKey: 'ProductId' })
      Product.belongsTo(models.User, { foreignKey: 'AuthorId' })
      Product.belongsTo(models.Category, { foreignKey: 'CategoryId' })
      // define association here
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Product name is required'
        },
        notEmpty: {
          msg: 'Product name is required'
        }
      }
    },
    slug: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Description is required'
        },
        notEmpty: {
          msg: 'Description is required'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Price is required'
        },
        notEmpty: {
          msg: 'Price is required'
        },
        min: {
          args: 15_000,
          msg: 'Minimum price is 15.000'
        },
      }
    },
    mainImg: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Main img is required'
        },
        notEmpty: {
          msg: 'Main img is required'
        }
      }
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'CategoryId is required'
        },
        notEmpty: {
          msg: 'CategoryId is required'
        }
      }
    },
    AuthorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'AuthorId is required'
        },
        notEmpty: {
          msg: 'AuthorId is required'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Product',
    hooks: {
      beforeCreate(Product) {
        Product.slug = Product.name.toLowerCase().replace(/\s+/g, '-')
      },
    }
  });
  return Product;
};