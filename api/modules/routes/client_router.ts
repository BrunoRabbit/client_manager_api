import express from 'express';
import ClientsController from '../controllers/clients_controller';

const router = express.Router();
const clientsController = new ClientsController();

router.get('', async (req, res) => {
    await clientsController.getClient(req, res);
});

router.post('', async (req, res, next) => {
    await clientsController.createClient(req, res);
});

router.delete('/:idClient', async (req, res, next) => {
    await clientsController.deleteClient(req, res);
});

router.put('/:idClient', async (req, res, next) => {
    await clientsController.updateClient(req, res);
});

export default router;