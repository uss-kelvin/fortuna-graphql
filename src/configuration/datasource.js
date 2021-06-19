import { RESTDataSource } from 'apollo-datasource-rest';

export class FortunaAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.DATASOURCE;
  }

  async getUser(username) {
    return this.get(`user/${username}`);
  }

  async postUser(user) {
    return this.post('user', user);
  }

  async putUser(user) {
    const { username } = user;
    return this.put(`user/${username}`, user);
  }

  async getTransactions(user, asset) {
    return this.get(`transaction?user=${user}&asset=${asset}`);
  }

  async postTransaction(transactionInput) {
    return this.post('transaction', transactionInput);
  }

  async getAssets() {
    return this.get('asset');
  }
}
