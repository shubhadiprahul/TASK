const express = require('express');
const router = express.Router();
const {addCategories,updateCategory,deleteCategory,SendMail} = require('../controller/categories')
const upload = require('../multer')

router.post('/addCategory',upload.single('img_url'),addCategories)
router.put('/updateCategory',updateCategory)
router.delete('/deleteCategory',deleteCategory)
router.post('/SendMail',SendMail)

module.exports = router;