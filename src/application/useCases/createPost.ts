import { Document } from 'mongoose';
import { IPost } from '../../domain/entities/IPost';
import PostModel from '../../infrastructure/models/postModel';

async function createPost(postData: IPost): Promise<Document<IPost>> {
  try {
    console.log('Received postData:', postData); // Log the received data
    const newPost = new PostModel(postData);
    console.log('New post object:', newPost); // Log the new post object before saving
    const savedPost = await newPost.save(); // Save the post to the database
    console.log('Saved post object:', savedPost); // Log the saved post object
    return savedPost;
  } catch (error) {
    throw new Error('No se pudo crear el post.');
  }
}

export default createPost;
