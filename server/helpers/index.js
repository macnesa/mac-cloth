const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
// const secret = process.env.JWTSECRET
const secret = "rahasia"

function hashing(password) {
  return bcrypt.hashSync(password, 10);
}
function compareHash(plain, hashed) {
  return bcrypt.compareSync(plain, hashed)
}

function generateToken(payload) {
  return jwt.sign(payload, secret)
}
function validateToken(payload) {
  return jwt.verify(payload, secret)
}

module.exports = {
  hashing,
  compareHash,
  generateToken,
  validateToken
}