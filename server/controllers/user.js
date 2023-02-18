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

  // static async customerRegister(req, res, next) {
  //   const {username, email, password, phoneNumber, address} = req.body
  //   try{
  //     const addUser = await User.create({username, email, password, phoneNumber, address, role: 'Customer'})
  //     const {id} = addUser
  //     res.status(201).json({id, email})
  //   } catch (error) {
  //     next(error)
  //   }     
  // }

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

  // static async googleSignIn(req, res, next) {
  //   try {
  //     const {token} = req.body 

  //     let CLIENT_ID = process.env.GOOGLE_CLIENT_ID
  //     const client = new OAuth2Client(CLIENT_ID);
  //     const ticket = await client.verifyIdToken({
  //       idToken: token,
  //       audience: CLIENT_ID , 
  //     }); 
  //     const {email, name} = ticket.getPayload() 

  //     let [user, created] = await User.findOrCreate({
  //       where: {
  //         email
  //       },
  //       defaults: {
  //         email,
  //         username: name,
  //         password: '12345',
  //         role:'Staff'
  //       }
  //     }) 

  //     let {id} = user
  //     let access_token = generateToken({ id }) 
  //     let status = (created) ? 201 : 200
  //     res.status(status).json({access_token})    
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  // static async customerGoogleSignIn(req, res, next) { 
  //   try {
  //     const {token} = req.body 

  //     let CLIENT_ID = process.env.GOOGLE_CLIENT_ID
  //     const client = new OAuth2Client(CLIENT_ID);
  //     const ticket = await client.verifyIdToken({
  //         idToken: token,
  //         audience: CLIENT_ID , 
  //       }); 
  //       const {email, name} = ticket.getPayload() 

  //       let [user, created] = await User.findOrCreate({
  //         where: {
  //           email
  //         },
  //         defaults: {
  //           email,
  //           username: name,
  //           password: '12345',
  //           role:'Customer'
  //         }
  //       })  

  //     let {id} = user
  //     let access_token = generateToken({ id }) 
  //     let status = (created) ? 201 : 200
  //     res.status(status).json({access_token})    
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  // static async allUser(req, res, next){
  //   try {
  //     const Users = await User.findAll()
  //     res.status(200).json(Users)
  //   } catch(error) {
  //     next(error)
  //   }
  // }

  // static async addUser(req, res, next){
  //   const {username, email, password, role, phoneNumber, address} = req.body 
  //   try{
  //     const addUser = await User.create({username, email, password, role, phoneNumber, address})
  //     res.status(201).json(addUser)
  //   } catch (error) {
  //       next(error)
  //   } 
  // }

  // static async userByToken(req, res, next) {
  //   try {  
  //     const findUser = await User.findByPk(req.userId)
  //     if(!findUser) throw {code: 401}
  //     res.status(200).json(findUser)
  //   } catch (error) {
  //     next(error)
  //   }    
  // }

  // static async userById(req, res, next){
  //   const { id } = req.params 
  //   try{
  //     const user = await User.findByPk(id)
  //     if (!user) throw {code: 404}  
  //     res.status(200).json(user)
  //   } catch (error) { 
  //      next(error)
  //   } 
  // }

  // static async deleteUserById(req, res, next){
  //   const { id } = req.params 
  //   try{  
  //     const user = await User.findByPk(id) 
  //     if (!user) throw {code: 404}  
  //     await user.destroy()
  //     res.status(200).json(user)
  //   } catch (error) { 
  //     next(error)
  //   } 
  // }
}

module.exports = ControllerUser