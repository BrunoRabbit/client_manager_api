import { ErrorGenerator } from '../../errors/error_generator';
import { IRequestBody } from '../../interfaces/request_body';
import ClientRepository from '../repository/client_repository';

class ClientService {
    private clientRepository: ClientRepository;

    constructor() {
        this.clientRepository = new ClientRepository();
    }

    async getClient(query: string) {
        try {
            return await this.clientRepository.getAndFilter(query);
        } catch (error: any) {
            throw new ErrorGenerator(error.statusCode, error.message);
        }
    }

    async createClient(body: IRequestBody) {
        try {
            return await this.clientRepository.createNewClient(body);
        } catch (error: any) {
            throw new ErrorGenerator(error.statusCode, error.message);
        }
    }

    async deleteClient(idClient: number) {
        try {
            return await this.clientRepository.deleteClient(idClient);
        } catch (error: any) {
            throw new ErrorGenerator(error.statusCode, error.message);
        }
    }

    async updateClient(idClient: number, body: IRequestBody) {
        try {
            return await this.clientRepository.updateExistingClient(idClient, body);
        } catch (error: any) {
            throw new ErrorGenerator(error.statusCode, error.message);
        }
    }
}

export default ClientService;