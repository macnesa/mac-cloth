const { Type } = require('../models')

class Controller {

  static async allType(req, res, next) {
    try {
      const data = await Type.findAll()
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  static async addType(req, res, next) {
    const { name } = req.body
    try {
      const data = await Type.create({ name })
      res.status(201).json(data)
    } catch (error) {
      next(error)
    }
  }


  static async deleteTypeById(req, res, next) {
    const { id } = req.params
    try {
      const data = await Type.findByPk(id)
      if (!data) throw { code: 404 }
      await data.destroy()
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

}

module.exports = Controller