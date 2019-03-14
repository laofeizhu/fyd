//Here is where we declare the modules and shit we will need
const express = require('express')
const { Univ } = require('../database/models')

const trunks = require('trunks-log')
const log = new trunks('UNIVS')

//import the controllers and middleware
const { univsController } = require('../controllers/index')
const { catchErrors } = require('../middleware/error-handler')

//set up the router
const router = express.Router()

let univs
Univ.find().exec().then(univsInDb => {
    log.success('Retrieved all {} univs', univsInDb.length)
    univs = univsInDb
}).catch(err => {
  log.error(err, 'Could not retrieve univs: {}', err.message)
})

//get all univs
router.get('/', (req, res) => { res.json({univs})} )

//make a new boy
router.post('/', catchErrors(univsController.store))

//see one boy
router.get('/:id', catchErrors(univsController.show))

//get rid of a boy
router.delete('/:id', catchErrors(univsController.delete))

//update a boy
router.put('/:id', catchErrors(univsController.update))

module.exports = router