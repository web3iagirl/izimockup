import { MongoClient } from 'mongodb';
import { MidjourneyApi } from '../../shared/utils/midjourney.api';

// Initialize MongoDB client
const client = new MongoClient(process.env.MONGO_URI || 'default-mongo-uri');
;
 
// Supposons que vous ayez une configuration MJConfig
const mjConfig: MJConfig = {
    // Votre configuration ici
  };

// Initialize MidjourneyApi avec la configuration
const midjourneyApi = new MidjourneyApi(mjConfig);

// Function to check user limitations
async function checkUserLimit(userId: string): Promise<boolean> {
  // Logic to check if the user has reached the daily limit for free accounts
  // Return true if the user can generate more images, false otherwise
  return true;
}

// Function to generate image
async function generateImage(userId: string, userInput: string): Promise<string> {
  if (!(await checkUserLimit(userId))) {
    return 'Daily limit reached for free account.';
  }
  try {
    // Generate image using MidjourneyApi
    const imageUrl = await midjourneyApi.generateImage(userInput);
    
    // Connect to MongoDB
    await client.connect();
    const database = client.db('izimockup');
    const imagesCollection = database.collection('generated_images');
    
    // Save generated image URL to MongoDB
    await imagesCollection.insertOne({ userId, imageUrl });
    
    return imageUrl;
  } catch (error) {
    console.error('Error generating image:', error);
    return '';
  } finally {
    // Close MongoDB connection
    await client.close();
  }
}

// Example usage
(async () => {
  const userId = 'someUserId';
  const userInput = 'A beautiful sunset';
  const imageUrl = await generateImage(userId, userInput);
  console.log('Generated image URL:', imageUrl);
})();
