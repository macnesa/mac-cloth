const router = require('express').Router()

const adminEnpoints = require('./admin-routes')
const customerEndpoints = require('./customer-routes')

const {
  errorHandler
} = require('../middlewares')

router.use('/admin', adminEnpoints)

router.use('/customer', customerEndpoints)




router.use(errorHandler)

module.exports = router