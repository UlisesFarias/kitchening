const express = require('express');
const { login, register, processRegister, processLogin } = require('../controllers/usersController');
const router = express.Router();

/* /usuarios */
router
  .get('/ingreso',login)
  .get('/registro',register)
  .post('/ingreso',processLogin)
  .post('/registro',processRegister)

module.exports = router;