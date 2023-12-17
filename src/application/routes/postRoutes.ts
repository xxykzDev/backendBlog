import express from 'express';
import createPost from '../useCases/createPost';

const router = express.Router();
router.use(express.json());

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Crea un nuevo post.
 *     tags:
 *       - Posts
 *     requestBody:
 *       description: Datos del post a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author:
 *                 type: string
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       '201':
 *         description: Post creado satisfactoriamente.
 *       '500':
 *         description: Error interno del servidor.
 */
router.post('/', async (req, res) => {
  try {
    const postData = req.body;
    console.log(postData);
    const newPost = await createPost(postData);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Hubo un error al crear el post.' });
  }
});

export default router;
