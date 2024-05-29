export default (httpClient) => ({
  async getAll() {
    try {
      const response = await httpClient.get('/clado');
      return {
        data: response.data
      }
    } catch (error) {
      console.error('Erro ao buscar clado:', error);
      throw error; // Lançar o erro novamente para ser tratado onde a função é chamada
    }
  },
  salvar: async (tipo) => {
    try {
      const response = await httpClient.post('/clado/salvar', { tipo });
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao salvar clado:', error);
      throw error;
    }
  },
  delete: async (id) => {
    try {
      const response = await httpClient.delete('/clado/deletar/' + id);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao deletar clado:', error);
      throw error;
    }
  }
});
