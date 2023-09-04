const express = require('express');
const imageController = require('/controllers/imageController');

const router = express.Router();

const express = require('express');
const { generateImage } = require('../controllers/imageGenerationService'); // Importez la fonction ici

router.post('/generateImage', async (req, res) => {
  const userId = req.body.userId;
  const userInput = req.body.userInput;
  
  const imageUrl = await generateImage(userId, userInput);
  
  res.json({ imageUrl });
});

module.exports = router;
