export default (httpClient) => ({
  async getAll() {
    try {
      const response = await httpClient.get('/dieta');
      return {
        data: response.data
      }
    } catch (error) {
      console.error('Erro ao buscar dietas:', error);
      throw error; // Lançar o erro novamente para ser tratado onde a função é chamada
    }
  },
  salvar: async (tipo) => {
    try {
      const response = await httpClient.post('/dieta/salvar', { tipo });
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao salvar dieta:', error);
      throw error; 
    }
  },
  delete: async (id) => {
    try {
      const response = await httpClient.delete('/dieta/deletar/' + id);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao deletar dieta:', error);
      throw error; 
    }
  }
});
