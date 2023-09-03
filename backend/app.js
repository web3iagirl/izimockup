const authRoutes = require('./routes/authRoutes');
const imageRoutes = require('./routes/imageRoutes');
const mongoose = require('mongoose');
const username = process.env.MONGO_ID;
const password = process.env.MONGO_PASSWORD;
const cluster = "cluster0.e307i.mongodb.net";
const dbName = "iziquiz";

const uri = `mongodb+srv://${username}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});



// ... (autre code)

app.use('/auth', authRoutes);
app.use('/images', imageRoutes);
