const { User, Category, Movie, History } = require('../models')
const { compareHash, generateToken, validateToken } = require('../helpers')

class Controller {

  static async allCategory(req, res, next) {
    try {
      const data = await Category.findAll()
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  static async addCategory(req, res, next) {
    const { name } = req.body
    try {
      const data = await Category.create({ name })
      res.status(201).json(data)
    } catch (error) {
      next(error)
    }
  }
 

  static async deleteCategoryById(req, res, next){
    const { id } = req.params 
    try{  
      const data = await Category.findByPk(id) 
      if(!data) throw { code: 404 } 
      await data.destroy()
      res.status(200).json(data)
    } catch (error) { 
      next(error)
    } 
  }

}

module.exports = Controller