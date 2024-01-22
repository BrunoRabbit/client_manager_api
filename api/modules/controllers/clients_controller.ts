import { Request, Response } from 'express';
import { DefaultController } from "../../defaults/controller";
import ClientService from "../services/clients_service";

class ClientsController extends DefaultController {
    private clientService: ClientService;

    constructor() {
        super();
        this.clientService = new ClientService();
    }

    async getClient(req: Request, res: Response) {
        const query = req.query.name ? req.query.name.toString() : "";

        return this.handleRequest(async () => await this.clientService.getClient(query), req, res);
    }

    async createClient(req: Request, res: Response) {
        return this.handleRequest(async () => await this.clientService.createClient(req.body), req, res);
    }

    async deleteClient(req: Request, res: Response) {
        return this.handleRequest(async () => await this.clientService.deleteClient(+req.params.idClient), req, res);
    }

    async updateClient(req: Request, res: Response) {
        return this.handleRequest(async () => await this.clientService.updateClient(+req.params.idClient, req.body), req, res)
    }
}

export default ClientsController;