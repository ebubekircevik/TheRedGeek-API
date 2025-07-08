import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  lastname: string;
  email: string;
  password: string;
  createdAt: Date;
  interests: string[];
  isActive: boolean;
  role: string;
}

const UserSchema: Schema = new Schema<IUser>(
  {
    name:      { type: String, required: true },
    lastname:  { type: String, required: true },
    email:     { type: String, required: true, unique: true },
    password:  { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    interests: { type: [String], required: true },
    isActive:  { type: Boolean, default: true },
    role:      { type: String, default: 'user' }
  },
  { versionKey: false }
);

export default mongoose.model<IUser>('User', UserSchema);