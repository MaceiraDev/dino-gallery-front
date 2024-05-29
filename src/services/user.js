export default (httpClient) => ({
  async getAll() {
    try {
      const response = await httpClient.get('/user');
      return {
        data: response.data
      }
    } catch (error) {
      console.error('Erro ao buscar users:', error);
      throw error; // Lançar o erro novamente para ser tratado onde a função é chamada
    }
  },
  salvar: async (tipo) => {
    try {
      const response = await httpClient.post('/user/salvar', { tipo });
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao salvar user:', error);
      throw error; 
    }
  },
  delete: async (id) => {
    try {
      const response = await httpClient.delete('/user/deletar/' + id);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao deletar user:', error);
      throw error; 
    }
  }
});
