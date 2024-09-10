const express = require('express');
const authMidleware = require('../middleware/auth');

const router = express.Router();

const { login, dashboard } = require('../controllers/main');

router.route('/dashboard').get(authMidleware, dashboard);
router.route('/login').post(login);

module.exports = router;
