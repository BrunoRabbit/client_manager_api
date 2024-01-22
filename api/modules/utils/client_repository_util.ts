import { ErrorGenerator } from '../../errors/error_generator';
import { messages } from '../../errors/errors_messages';
import Client from '../model/client_model';


class ClientRepositoryUtil {
    static async checkIfEmailBelongsToDiffClient(email: string, idClient: number, oldEmail: string) {
        if (email) {
            const existingClient = await Client.findOne({ where: { email } });

            if (existingClient && existingClient.id !== idClient) {
                throw new ErrorGenerator(400, messages.emailUsed);
            }
        }
    }

    static async checkIfEmailExists(email: string) {
        const existingClient = await Client.findOne({ where: { email } });

        if (existingClient) {
            throw new ErrorGenerator(400, messages.emailUsed);
        }
    }
}

export default ClientRepositoryUtil;