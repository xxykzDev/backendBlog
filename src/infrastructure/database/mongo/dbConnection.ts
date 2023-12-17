// src/infrastructure/database/connections/dbConnection.ts

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const databaseUrl = process.env.DB_URL || '';

export const connectToMongoDB = async () => {
    try {
        if (databaseUrl.startsWith('mongodb://')) {
            await mongoose.connect(databaseUrl, {
                maxPoolSize: 10,
                minPoolSize: 1, 
            });
        } else {
            console.error('URL de la base de datos no es de MongoDB');
        }
    } catch (error) {
        console.error('Error al conectar a la base de datos MongoDB:', error);
    }
};

export default connectToMongoDB;
