const express = require('express');
const router = express.Router();

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  deleteBootcamps,
  updateBootcamps,
} = require('../controllers/bootcamps');

router.get('/', getBootcamps);
router.post('/', createBootcamp);
router.post('/:id', getBootcamp);
router.delete('/:id', deleteBootcamps);
router.put('/:id', updateBootcamps);

module.exports = router;
