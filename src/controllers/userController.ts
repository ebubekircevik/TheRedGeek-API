import { Request, Response } from 'express';
import User from '../models/User';

// Yeni kullanıcı oluştur
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

// Tüm kullanıcıları getir
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Tek kullanıcı getir
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Kullanıcı güncelle
export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

// Kullanıcı sil
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
    res.json({ message: 'Kullanıcı silindi' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
