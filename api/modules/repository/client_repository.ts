import { Op } from 'sequelize';
import { IRequestBody } from '../../interfaces/request_body';
import Client from '../model/client_model';
import { ErrorGenerator } from '../../errors/error_generator';
import { messages } from '../../errors/errors_messages';
import ClientRepositoryUtil from '../utils/client_repository_util';

class ClientRepository {
  async getAndFilter(query: string) {
    const shouldFilter = {
      [Op.or]: [
        { name: { [Op.like]: `%${query}%` } },
        { email: { [Op.like]: `%${query}%` } },
        { tags: { [Op.like]: `%${query}%` } }
      ]
    };

    return await Client.findAll({
      where: shouldFilter
    });
  }

  async createNewClient({ name, email, tags }: IRequestBody) {
    await ClientRepositoryUtil.checkIfEmailExists(email);

    const client = new Client();
    client.name = name;
    client.email = email;
    client.tagsArray = tags;

    return await client.save();
  }

  async deleteClient(idClient: number) {
    return await Client.destroy({ where: { id: idClient } });
  }

  async updateExistingClient(idClient: number, body: IRequestBody) {
    const client = await this.findOne(idClient);

    if (!client) {
      throw new ErrorGenerator(400, messages.clientNotFound);
    }

    await ClientRepositoryUtil.checkIfEmailBelongsToDiffClient(
      body.email,
      idClient,
      client.email,
    );
    await Client.update(body, { where: { id: idClient } });

    return this.findOne(idClient);
  }

  async findOne(id: number) {
    return await Client.findOne({ where: { id } });
  }
}

export default ClientRepository;