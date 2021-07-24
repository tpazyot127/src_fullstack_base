const express = require('express');

const ProductCategoryCtrl = require('../controllers/product-category-ctrl');

const router = express.Router();

router.post('/product-category', ProductCategoryCtrl.createProductCategory);
router.put('/product-category/:id', ProductCategoryCtrl.updateProductCategory);
router.delete('/product-category/:id', ProductCategoryCtrl.deleteProductCategory);
router.get('/product-category/:id', ProductCategoryCtrl.getProductCategoryById);
router.get('/product-categories', ProductCategoryCtrl.getProductCategories);

module.exports = router;
