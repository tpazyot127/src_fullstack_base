const express = require('express');

const auth = require('../middleware/auth');
const UserCtrl = require('../controllers/user-ctrl');

const router = express.Router();

// // CRUD
router.post('/user', UserCtrl.createUser);
router.put('/user/:id', UserCtrl.updateUser);
router.delete('/user/:id', UserCtrl.deleteUser);
router.get('/user/:id', UserCtrl.getUserById);
router.get('/users', UserCtrl.getUsers);
router.get('/users/me', auth, UserCtrl.getMe);

// // AUTHENTICATE
router.post('/user/login', UserCtrl.userLogin);  
// router.post('/user/logout', UserCtrl.userLogout);
// router.post('/user/logout-all', auth, UserCtrl.userLogoutAll);
// router.get('/user-confirmation/:id', UserCtrl.userConfirmation);
// router.post('/user/forgot-password', UserCtrl.userForgotPassword);

module.exports = router;