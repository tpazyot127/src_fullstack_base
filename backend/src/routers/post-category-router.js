const express = require('express');

const PostCategoryCtrl = require('../controllers/post-category-ctrl');
const router = express.Router();

router.post('/post-category', PostCategoryCtrl.createPostCategory);
router.put('/post-category/:id', PostCategoryCtrl.updatePostCategory);
router.delete('/post-category/:id', PostCategoryCtrl.deletePostCategory);
router.get('/post-category/:id', PostCategoryCtrl.getPostCategoryById);
router.get('/post-categories', PostCategoryCtrl.getPostCategories);

module.exports = router;
