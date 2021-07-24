const express = require('express');
const router = express.Router();

// // ADD ROUTER

// router.use;
router.use(require('./post-router'));
router.use(require('./post-category-router'));

router.use(require('./user-router'));
router.use(require('./user-category-router'));

router.use(require('./cart-router'));

router.use(require('./product-router'));
router.use(require('./product-category-router'));
module.exports = router;
