//import the Univ constant explicitly
const { Univ } = require('../database/models')
const trunks = require('trunks-log')
const log = new trunks('UNIVS')

//show all univs
exports.index = async (req, res) => {
  
  //query the DB of all univs
  await Univ.find().exec()
  .then(univs => {
    log.success('Retrieved all {} univs', univs.length)
    res.json({ univs: univs})
  })
  .catch(err => {
    log.error(err, 'Could not retrieve univs: {}', err.message)
    res.json({ error: err, message: "Could not retrieve univs"}).status(500)
  })
}

//Store a new univ
exports.store = async (req, res) => {
  
  let univ = new Univ(req.body)

  //save it in the DB
  await univ.save()
    .then(univ => {
      log.success('Created Univ: {}', univ.email)
      //send a 201 and the new resource
      res.status(201).json({ data: univ })
    })
    .catch(err => {
      log.error(err, 'Error creating univ: {}', univ.email)
      let errStatus = err.name === 'ValidationError' ? 400 : 500
      res.status(errStatus).json({err: err})
    })
}

//this function is for looking at one univ by their mongo id
exports.show = async (req, res) => {

  //find this sneaky boye
  await Univ.findById(req.params.id).exec()
  .then(univ => {
    log.success('Found univ: {}', univ.name)
    res.json({ univ: univ})
  })
  .catch(err => {
    log.error(err, 'Error finding univ: {}', req.params.id)
    res.json({ error: err, message: 'Could not retrieve univ'}).status(500)
  })
}

//ever wanted to make the univs disappear 
exports.delete = async (req, res) => {

  //find the sneaky boye and make him go away
  await Univ.findByIdAndRemove(req.params.id).exec()
  .then(() => {
    log.success('Deleted Univ: {}', req.params.id)
    //let em know there aint no content no mo
    res.status(204).json()
  })
  .catch(err => {
    log.error(err, 'Error finding univ: {}', req.params.id)
    res.status(500).json({err: err})
  })

}

//edit a univ based on ID
exports.update = async (req, res) => {
  await Univ
  .findByIdAndUpdate(req.params.id, req.body, { new: true })
  .exec()
    .then(univ => {
      log.success('Updated univ: {}', req.params.id)
      res.status(200).json({univ: univ})
    })
    .catch(err => {
      log.error(err, "Could not update univ: {}", req.params.id)
      res.status(500).json({err: err})
    })
}
