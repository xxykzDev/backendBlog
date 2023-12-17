// commentModel.ts

import mongoose, { Schema, Document } from 'mongoose';
import { IComment } from '../../domain/entities/IComment'; // Importa la entidad CommentEntity

const commentSchema: Schema = new Schema({
  content: String,
  author: String, // Puede ser el ID del autor del comentario
  post: String, // Puede ser el ID del post al que se refiere el comentario
  date: { type: Date, default: Date.now },
});

const CommentModel = mongoose.model<IComment & Document>('Comment', commentSchema);

export default CommentModel;
