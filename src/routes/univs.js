//Here is where we declare the modules and shit we will need
const express = require('express')

//import the controllers and middleware
const { univsController } = require('../controllers/index')
const { catchErrors } = require('../middleware/error-handler')

//set up the router
const router = express.Router()

//get all univs
router.get('/', catchErrors(univsController.index))

//make a new boy
router.post('/', catchErrors(univsController.store))

//see one boy
router.get('/:id', catchErrors(univsController.show))

//get rid of a boy
router.delete('/:id', catchErrors(univsController.delete))

//update a boy
router.put('/:id', catchErrors(univsController.update))

module.exports = router