const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');

const { register, login, getUser } = require('../controllers/auth');

router.get('/getuser', protect, getUser);
router.post('/register', register);
router.post('/login', login);

module.exports = router;
