const router = require('express').Router()

const {
  authentication,
  checkPrivilege,
  adminOnly,
  reqBodyCheck,
  errorHandler
} = require('../middlewares')

const {
  ControllerCategories,
  ControllerImage,
  ControllerProduct,
  ControllerUser,
  ControllerType
} = require('../controllers')



router.post('/login', reqBodyCheck, ControllerUser.login) 

router.post('/register', ControllerUser.register)

router.use('/categories',
  require('express').Router()
    .get('/', ControllerCategories.allCategory) 
)

router.use('/types',
  require('express').Router()
    .get('/', ControllerType.allType) 
)

router.use('/products',
  require('express').Router()
    .get('/', ControllerProduct.allProduct) 
    .get('/:id', ControllerProduct.productById) 
)

router.get('/images/:productId', ControllerImage.allImage)

module.exports = router