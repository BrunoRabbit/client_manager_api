import express from 'express';
import clientRouter from './modules/index';

const router = express.Router();

router.use('/api/client', clientRouter);

export default router;