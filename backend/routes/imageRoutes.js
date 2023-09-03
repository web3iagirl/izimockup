const express = require('express');
const imageController = require('/controllers/imageController');

const router = express.Router();

router.post('/generate', imageController.generateImage);

module.exports = router;
