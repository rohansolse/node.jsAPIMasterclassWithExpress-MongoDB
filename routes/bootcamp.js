const express = require('express');
const router = express.Router()
const bootcamp = require('../controller/bootcamp')

router
    .route('/')
    .get(bootcamp.getAllBootcamp)
    .post(bootcamp.createBootcamp)

router
    .route('/:id')
    .get(bootcamp.getSingleBootcamp)
    .put(bootcamp.updateBootcamp)
    .delete(bootcamp.deleteBootcamp)

module.exports = router