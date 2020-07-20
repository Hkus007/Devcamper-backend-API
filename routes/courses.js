const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courses');

const Course = require('../models/Coures');
const advancedResults = require('../middleware/advancedResults');
const { protect } = require('../middleware/auth');

router.get(
  '/',
  advancedResults(Course, {
    path: 'bootcamp',
    select: 'name description',
  }),
  getCourses
);
router.get('/:id', getCourse);
router.post('/', protect, addCourse);
router.put('/:id', protect, updateCourse);
router.delete('/:id', protect, deleteCourse);
module.exports = router;
