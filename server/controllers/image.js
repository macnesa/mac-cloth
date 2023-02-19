const { User, Image } = require('../models')

class Controller { 

  static async allImage(req, res, next) {
    const { productId } = req.params
    try {
      let data = await Image.findAll(
        {
          where: {
            ProductId: productId
          }
        }
      )
      if (!data.length) return res.status(204).json() // there is no body in 204
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller