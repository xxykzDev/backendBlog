// postModel.ts

import mongoose, { Schema, Document } from 'mongoose';
import { IPost } from '../../domain/entities/IPost';

const postSchema: Schema = new Schema({
  title: String,
  content: String,
  author: String, // Puede ser el ID del autor
  tags: [String],
  date: { type: Date, default: Date.now },
});

const PostModel = mongoose.model<IPost & Document>('Post', postSchema);

export default PostModel;
