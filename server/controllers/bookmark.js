
const { User, Genre, Movie, History, Bookmark } = require('../models')


class ControllerBookmark {

  static async getBookmarks(req, res, next) {
    const { userId, userRole } = req
    try {
      const customerBookmarks = await Bookmark.findAll({
        where: {
          CustomerId: userId
        },
        include: [
          {
            model: Movie,
            include: {
              model: Genre
            }
          }
        ]
      })
      res.status(200).json(customerBookmarks)
    } catch (error) {
      next(error)
    }
  }

  static async postBookmark(req, res, next) {
    const { userId } = req
    const { movieId } = req.params
    try {
      const movie = await Movie.findByPk(movieId)
      if (!movie) throw { code: 404 }

      const customerBookmarks = await Bookmark.create({
        CustomerId: userId,
        MovieId: movieId
      })
      res.status(201).json(customerBookmarks)
    } catch (error) {
      next(error)
    }
  }

  static async deleteBookmark(req, res, next) {
    const { userId } = req
    const { id } = req.body
    try {
      const data = await Bookmark.findByPk(id)
      if (!data) throw { code: 404 }
      if (data.CustomerId !== userId) throw { code: 403 }

      const final = await data.destroy()

      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = ControllerBookmark