import express, { Request, Response, Express } from 'express';
import { connectToMongoDB } from '../database/mongo/dbConnection';
import postRoutes from '../../application/routes/postRoutes';
import swaggerUi from 'swagger-ui-express'; // Import swagger-ui-express
import swaggerSpec from '../../../swaggerConfig'; // Assuming this is the path to your swagger.js file


const app: Express = express();

connectToMongoDB()
  .then(() => {
    console.log('Conectado a MongoDB exitosamente');
  })
  .catch((err) => {
    console.error('Error al conectar con MongoDB', err);
  });

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req: Request, res: Response) => {
  res.send('live from NY falpa mucha');
});

// Usa las rutas relacionadas con los posts
app.use('/posts', postRoutes); // Ajusta la ruta base '/api' según tus necesidades


app.listen(3000, '0.0.0.0', () => {
  console.log(`Server is running on port 3000`);
});
