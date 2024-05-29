export default (httpClient) => ({
  async getAll() {
    try {
      const response = await httpClient.get('/especie');
      return {
        data: response.data
      }
    } catch (error) {
      console.error('Erro ao buscar especies:', error);
      throw error; 
    }
  },
  salvar: async (tipo) => {
    try {
      const response = await httpClient.post('/especie/salvar', { tipo });
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
      const response = await httpClient.delete('/especie/deletar/' + id);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao deletar especie:', error);
      throw error;
    }
  }
})