export default (httpClient) => ({
  async getAll() {
    try {
      const response = await httpClient.get('/periodo');
      return {
        data: response.data
      }
    } catch (error) {
      console.error('Erro ao buscar periodos:', error);
      throw error; // Lançar o erro novamente para ser tratado onde a função é chamada
    }
  },
  salvar: async (tipo) => {
    try {
      const response = await httpClient.post('/periodo/salvar', { tipo });
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao salvar periodo:', error);
      throw error; 
    }
  },
  delete: async (id) => {
    try {
      const response = await httpClient.delete('/periodo/deletar/' + id);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao deletar periodo:', error);
      throw error; 
    }
  }
});