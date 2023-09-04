const jwt = require('jsonwebtoken');
const User = require('/models/User'); // Assurez-vous que ce chemin est correct
const { generateImage } = require('midjourney-api'); // Remplacez par le bon package ou méthode
import { generateImage } from './imageGenerationService';


exports.generateImage = async (req, res) => {
  const { userId } = jwt.decode(req.headers.authorization);
  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }

  // Vérifier les limites d'abonnement
  if (user.subscription === 'free' && user.imagesGeneratedToday >= 3) {
    return res.status(403).json({ message: "Limite atteinte pour les utilisateurs gratuits" });
  }

  const { phrase } = req.body;
  const generatedImage = await generateImage(phrase); // Remplacez par la méthode réelle

  // Stocker l'image dans MongoDB (à implémenter)
  // ...

  // Mettre à jour le compteur d'images générées
  user.imagesGeneratedToday += 1;
  await user.save();

  res.json({ image: generatedImage });
};
