const express = require('express');
const router = express.Router();

// Include other resource router
const courseRouter = require('./courses');

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  deleteBootcamps,
  updateBootcamps,
  getBootcampsInRadius,
  bootcampPhotoUpload,
} = require('../controllers/bootcamps');

const Bootcamp = require('../models/Bootcamp');
const advancedResults = require('../middleware/advancedResults');

router.get('/', advancedResults(Bootcamp, 'courses'), getBootcamps);
router.post('/', createBootcamp);
router.post('/:id', getBootcamp);
router.delete('/:id', deleteBootcamps);
router.put('/:id', updateBootcamps);
router.get('/radius/:zipcode/:distance', getBootcampsInRadius);
router.put('/:id/photo', bootcampPhotoUpload);

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

module.exports = router;
