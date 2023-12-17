// userModel.ts

import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from '../../../src/domain/entities/IUser';

const userSchema: Schema = new Schema({
  username: String,
  email: String,
  password: String,
  roles: [String],
});

const UserModel = mongoose.model<IUser & Document>('User', userSchema);

export default UserModel;
