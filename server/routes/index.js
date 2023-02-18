const router = require('express').Router()

const adminEnpoints = require('./admin-routes')
// const CustomersEndpoints = require('./customer')

const {
  errorHandler
} = require('../middlewares')

router.use('/admin', adminEnpoints)

// router.use('/', staffAndAdminEndpoints)




router.use(errorHandler)

module.exports = router