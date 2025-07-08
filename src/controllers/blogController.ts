import { Request, Response } from 'express';
import Blog from '../models/Blog';

// Yeni kullanıcı oluştur
export const createBlog = async (req: Request, res: Response) => {
  try {
    const blog = new Blog(req.body);
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

// Tüm blogları getir veya kategoriye göre filtrele
export const getBlogs = async (req: Request, res: Response) => {
  try {
    const { category } = req.query;
    let filter = {};
    if (category) {
      filter = { category };
    }
    const blogs = await Blog.find(filter);
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Tek kullanıcı getir
export const getBlogById = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Kullanıcı güncelle
export const updateBlog = async (req: Request, res: Response) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBlog) return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
    res.json(updatedBlog);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

// Kullanıcı sil
export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
    res.json({ message: 'Kullanıcı silindi' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
