{
    // ... autres champs
    subscription: {
      type: String,
      enum: ['free', 'premium'],
      default: 'free'
    },
    imagesGeneratedToday: {
      type: Number,
      default: 0
    }
  }
  