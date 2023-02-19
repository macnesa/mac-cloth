const { validateToken } = require('../helpers')
const { User, Genre, Movie } = require('../models')

async function authentication(req, res, next) {
  try {
    const { access_token } = req.headers
    if (!access_token) throw { code: 401 }

    const { id } = validateToken(access_token);

    const findUser = await User.findByPk(id)
    if (!findUser) throw { code: 401 }

    req.userId = id
    req.userRole = findUser.role
    next()
  } catch (error) {
    next(error)
  }
}

async function checkPrivilege(req, res, next) {
  // try {
  //   const { id } = req.params

  //   const findUser = await User.findByPk(req.userId) 
  //   if(!findUser) throw {code: 401}

  //   const findMovie = await Movie.findByPk(id) 
  //   if(!findMovie) throw {code: 404}

  //   if(findUser.role == 'Staff') {
  //     if(findMovie.AuthorId !== findUser.id)  throw {code: 403} 
  //   }  

  //   next() 
  // } catch (error) {
  //   next(error) 
  // }

}
async function adminOnly(req, res, next) {
  // try {  
  //   const findUser = await User.findByPk(req.userId) 
  //   if(!findUser) throw {code: 401} 
  //   if(findUser.role !== 'Admin') throw {code: 403}   

  //   next() 
  // } catch (error) {
  //   next(error) 
  // }

}

function customerOnly(req, res, next) {
  // if(req.userRole !== "Customer") throw { code: 401 }; 
  // next() 
}

function reqBodyCheck(req, res, next) {
  if (!Object.keys(req.body).length) throw { code: 400, name: "Provide the required data" }
  next()  
}


function errorHandler(error, req, res, next) {
  let { code, name, errors } = error
  let number = code || 500
  let message = {error: 'Internal server error'}

  switch (name) {
    case 'SequelizeValidationError':
    case 'SequelizeUniqueConstraintError':
      message = { error: errors.map(each => each.message).join(', ') }
      number = 400
      break;
    case 'JsonWebTokenError':
      message = { error: 'Invalid token' }
      number = 401
      break;
  }

  switch (code) {
    case 400:
      message = { error: name || 'Bad Request' }
      break;
    case 401:
      message = { error: name || 'Unrecognized identity' }
      break;
    case 403:
      message = { error: name || 'Forbidden access' }
      break;
    case 404:
      message = { error: name || 'Data not found' }
      break;
  }

  res.status(number).json(message)

}

module.exports = {
  authentication,
  checkPrivilege,
  adminOnly,
  reqBodyCheck,
  customerOnly,
  errorHandler
}