export default (httpClient) => ({
  async getAll() {
    try {
      const response = await httpClient.get('/sub-familia');
      return {
        data: response.data
      }
    } catch (error) {
      console.error('Erro ao buscar sub-familias:', error);
      throw error; // Lançar o erro novamente para ser tratado onde a função é chamada
    }
  },
  salvar: async (tipo) => {
    try {
      const response = await httpClient.post('/sub-familia/salvar', { tipo });
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao salvar sub-familia:', error);
      throw error;
    }
  },
  delete: async (id) => {
    try {
      const response = await httpClient.delete('/sub-familia/deletar/' + id);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao deletar sub-familia:', error);
      throw error;
    }
  }
});
