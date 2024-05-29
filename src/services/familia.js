export default (httpClient) => ({
  async getAll() {
    try {
      const response = await httpClient.get('/familia');
      return {
        data: response.data
      }
    } catch (error) {
      console.error('Erro ao buscar familia:', error);
      throw error; // Lançar o erro novamente para ser tratado onde a função é chamada
    }
  },
  salvar: async (tipo) => {
    try {
      const response = await httpClient.post('/familia/salvar', { tipo });
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao salvar familia:', error);
      throw error;
    }
  },
  delete: async (id) => {
    try {
      const response = await httpClient.delete('/familia/deletar/' + id);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao deletar familia:', error);
      throw error;
    }
  }
});
