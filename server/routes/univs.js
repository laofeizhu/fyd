//Here is where we declare the modules and shit we will need
const express = require('express')
const { Univ } = require('../database/models')

const trunks = require('trunks-log')
const log = new trunks('UNIVS')

//import the controllers and middleware
const { univsController } = require('../controllers/index')
const { catchErrors } = require('../middleware/error-handler')

const { parseUnivInfo } = require('../util/parse-univs-info')

const fs = require("fs")

//set up the router
const router = express.Router()

var univs
var parsedUnivs
const readFromCache = true
if (readFromCache) {
  fs.readFile('univCache', (err, data) => {
    univs = JSON.parse(data)
    univs.sort((a, b) => a.rank - b.rank)
    univs = univs.slice(0, 50)
    parsedUnivs = univs.map(parseUnivInfo)
  })
} else {
  Univ.find().exec().then(univsInDb => {
    log.success('Retrieved all {} univs', univsInDb.length)
    univs = univsInDb
    fs.writeFile('univCache', JSON.stringify(univsInDb), err => {
      if (err) throw err;
      log.info("univs cached!")
    })
  }).catch(err => {
    log.error(err, 'Could not retrieve univs: {}', err.message)
  })
}

//get all univs
router.get('/', (req, res) => {
  res.json({univs: parsedUnivs})
})

//make a new boy
router.post('/', catchErrors(univsController.store))

//see one boy
router.get('/:id', catchErrors(univsController.show))

//get rid of a boy
router.delete('/:id', catchErrors(univsController.delete))

//update a boy
router.put('/:id', catchErrors(univsController.update))

module.exports = router