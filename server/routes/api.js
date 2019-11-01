/*
 * This file is used to build the API routes, we may have 
 * different routes for views and the like
 */

const express = require('express')

const univRoutes = require('./univs') //use the univ route

const router = express.Router() //make a new router

router.use('/univs', univRoutes) //tell it to use the univRoutes

module.exports = router