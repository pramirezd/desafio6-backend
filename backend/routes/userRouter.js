import { Router } from 'express';
import { userController } from '../controllers/userController.js';
import { validateToken, validateCredentials } from '../middleware/userMiddleware.js';

const userRouter = Router();

userRouter.get('/usuarios', validateToken, userController.getUser);

userRouter.post('/usuarios', userController.registerUser);

userRouter.post('/login', validateCredentials, userController.loginUser);

userRouter.all('*', (req, res) => {
    res.status(404).json({ message: 'Not found' });
});

export default userRouter;