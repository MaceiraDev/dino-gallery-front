export default (httpClient) => ({
  async getAll() {
    try {
      const response = await httpClient.get('/filo');
      return {
        data: response.data
      }
    } catch (error) {
      console.error('Erro ao buscar filos:', error);
      throw error; // Lançar o erro novamente para ser tratado onde a função é chamada
    }
  },
  salvar: async (tipo) => {
    try {
      const response = await httpClient.post('/filo/salvar', { tipo });
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao salvar filo:', error);
      throw error; 
    }
  },
  delete: async (id) => {
    try {
      const response = await httpClient.delete('/filo/deletar/' + id);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao deletar filo:', error);
      throw error; 
    }
  }
});
