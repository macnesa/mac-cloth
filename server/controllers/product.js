const { User, Category, Product, Image, sequelize } = require('../models')
// const ControllerLog = require('./log')
const { Op } = require('sequelize')

class Controller {
  static async allProduct(req, res, next) {
    try {
      const movies = await Product.findAll({
        include: [
          {
            model: User,
            attributes: ['email'],
          },
          {
            model: Category,
            attributes: ['name'],
          }
        ]
      })
      if (!movies.length) return res.status(204).json() // there is no body in 204
      res.status(200).json(movies)
    } catch (error) {
      next(error)
    }
  }



  static async addProduct(req, res, next) {
    const { name, description, price, mainImg, CategoryId } = req.body.product

    // const { images } = req.body

    const t = await sequelize.transaction()
    const AuthorId = req.userId

    try {
      const addProduct = await Product.create(
        { name, description, price, mainImg, CategoryId, AuthorId },
        {
          transaction: t
        }
      )

      if (req.body?.images.length) {
        const imagesReady = req.body.images.map(each => {
          each.ProductId = addProduct.id;
          each.createdAt = each.updatedAt = new Date();
          return each
        })
        // res.send(req.body)
        // console.log(imagesReady);
        await sequelize.queryInterface.bulkInsert('Images', imagesReady,
          {
            transaction: t
          }
        )
      }

      
      await t.commit()
      res.status(201).json(addProduct)
    } catch (error) {
      await t.rollback()
      next(error)
    }
  }

  static async productById(req, res, next) {
    const { id } = req.params
    try {
      const data = await Product.findOne(
        {
          where: {
            id
          },
          include: [
            {
              model: Category,
              attributes: ['name'],
            },
            {
              model: Image,
            }
          ]
        }
      )
      res.send(data)
      // if (!data) throw { code: 404 }
      // res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  static async putProductById(req, res, next) { 
    const { id, name, description, price, mainImg, CategoryId } = req.body

    const t = await sequelize.transaction()
    const AuthorId = req.userId

    try {
      const addProduct = await Product.update(
        { name, description, price, mainImg, CategoryId },
        {
          where: {
            id
          },
          transaction: t
        }
      )

      if (req.body?.Images.length) {
        for (const each of req.body.Images) {
          await Image.update({ imgUrl: each.imgUrl }, {
            where: {
              id: each.id
            },
            transaction: t
          });
        }
      } 
      await t.commit()
      res.status(200).json(addProduct)
    } catch (error) {
      await t.rollback()
      next(error)
    }
  }


  static async deleteProductById(req, res, next) {
    const { id } = req.params
    try {
      const data = await Product.findByPk(id)
      if (!data) throw { code: 404 }
      await data.destroy()

      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller