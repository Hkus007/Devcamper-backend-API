const express = require('express');
const router = express.Router();

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  deleteBootcamps,
  updateBootcamps,
  getBootcampsInRadius,
} = require('../controllers/bootcamps');

router.get('/', getBootcamps);
router.post('/', createBootcamp);
router.post('/:id', getBootcamp);
router.delete('/:id', deleteBootcamps);
router.put('/:id', updateBootcamps);
router.get('/radius/:zipcode/:distance', getBootcampsInRadius);

module.exports = router;
