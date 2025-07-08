import mongoose, { Document, Schema } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string; // İstersen Date de yapabiliriz
  category: string;
  tags: string[];
  readTime: number;
  imageUrl: string;
}

const BlogSchema: Schema = new Schema<IBlog>(
  {
    title:      { type: String, required: true },
    content:    { type: String, required: true },
    excerpt:    { type: String, required: true },
    author:     { type: String, required: true },
    publishedAt:{ type: String, required: true },
    category:   { type: String, required: true },
    tags:       { type: [String], required: true },
    readTime:   { type: Number, required: true },
    imageUrl:   { type: String, required: true }
  },
  { versionKey: false }
);

export default mongoose.model<IBlog>('Blog', BlogSchema);