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
const { protect } = require('../middleware/auth');

router.get('/', advancedResults(Bootcamp, 'courses'), getBootcamps);
router.post('/', protect, createBootcamp);
router.post('/:id', getBootcamp);
router.delete('/:id', protect, deleteBootcamps);
router.put('/:id', protect, updateBootcamps);
router.get('/radius/:zipcode/:distance', getBootcampsInRadius);
router.put('/:id/photo', protect, bootcampPhotoUpload);

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

module.exports = router;
