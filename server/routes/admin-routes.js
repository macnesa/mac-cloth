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
  ControllerUser
} = require('../controllers')



router.post('/login', reqBodyCheck, ControllerUser.login)
// router.post('/google-sign-in', ControllerUser.googleSignIn)

router.use(authentication)

router.post('/register', ControllerUser.register)
 

router.use('/categories',
  require('express').Router()
    .get('/', ControllerCategories.allCategory)
    .post('/', ControllerCategories.addCategory)
    // .get('/:id', ControllerGenre.genreById)
    .delete('/:id', ControllerCategories.deleteCategoryById)
)
 
router.use('/products',
  require('express').Router()
    .get('/', ControllerProduct.allProduct)
    .post('/', reqBodyCheck, ControllerProduct.addProduct)
    .get('/:id', ControllerProduct.productById)
    .put('/', reqBodyCheck, ControllerProduct.putProductById)
    // .patch('/', adminOnly, ControllerMovie.patchMovieStatus)
    .delete('/:id', ControllerProduct.deleteProductById)
)

router.get('/images/:productId', ControllerImage.allImage)

module.exports = router