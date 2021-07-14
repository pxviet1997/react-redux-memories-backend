import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/post.js';

const app = express();

// app.use(bodyParser.json());
app.use('/posts', postRoutes);

app.use(cors());

const CONNECTION_URL = "mongodb://localhost:27017/react-redux";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => { app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); })
  .catch((err) => { console.log(err); });

mongoose.set('useFindAndModify', false);
