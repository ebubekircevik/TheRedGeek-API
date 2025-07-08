import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import blogRoutes from './routes/blogRoutes';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api/blogs', blogRoutes);
app.use('/api/users', userRoutes);
// MongoDB bağlantısı
mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("MongoDB bağlantısı başarılı!"))
  .catch((err) => console.error("MongoDB bağlantı hatası:", err));

// Basit test endpointi
app.get("/", (req: Request, res: Response) => {
  res.send("TheRedGeek API çalışıyor!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
