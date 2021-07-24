const express = require('express');

const UserCategoryCtrl = require('../controllers/user-category-ctrl');

const router = express.Router();

router.post('/user-category', UserCategoryCtrl.createUserCategory);
router.put('/user-category/:id', UserCategoryCtrl.updateUserCategory);
router.delete('/user-category/:id', UserCategoryCtrl.deleteUserCategory);
router.get('/user-category/:id', UserCategoryCtrl.getUserCategoryById);
router.get('/user-categories', UserCategoryCtrl.getUserCategories);

module.exports = router;
