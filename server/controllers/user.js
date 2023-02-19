const { User, Genre, Movie, History } = require('../models')
const { compareHash, generateToken, validateToken } = require('../helpers')
const { OAuth2Client } = require('google-auth-library')

class ControllerUser {

  static async register(req, res, next) {
    const {username, email, password, phoneNumber, address} = req.body 
    try{
      const addUser = await User.create({username, email, password, phoneNumber, address, role: 'Admin'})
      const {id} = addUser
      res.status(201).json({id, email})
    } catch (error) { 
      next(error)
    }     
  }

  static async login(req, res, next) {
    const { email, password } = req.body
    try {
      const checkUser = await User.findOne({
        where: {
          email
        }
      })
      if (!checkUser) throw { code: 401, name: 'Email or Password is wrong' }

      const checkPass = compareHash(password, checkUser.password)
      if (!checkPass) throw { code: 401, name: 'Email or Password is wrong' }

      const access_token = generateToken({
        id: checkUser.id,
      })

      // console.log(access_token);
      res.status(200).json({ access_token })

    } catch (error) {
      next(error)
    }
  }

 
}

module.exports = ControllerUser