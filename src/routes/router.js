const router = require('express').Router();
const { welcomeAPI } = require('../controllers/index.js');
const { registerHandler, authLogin } = require('../controllers/Auth/auth');

router.get('/', welcomeAPI);

// Auth and login 
router.post('/register', registerHandler);
router.post('/login', authLogin);

module.exports = router;