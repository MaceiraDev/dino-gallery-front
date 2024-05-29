export default (httpClient) => ({
  async getAll() {
    try {
      const response = await httpClient.get('/genero');
      return {
        data: response.data
      }
    } catch (error) {
      console.error('Erro ao buscar generos:', error);
      throw error; // Lançar o erro novamente para ser tratado onde a função é chamada
    }
  },
  salvar: async (tipo) => {
    try {
      const response = await httpClient.post('/genero/salvar', { tipo });
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao salvar genero:', error);
      throw error; 
    }
  },
  delete: async (id) => {
    try {
      const response = await httpClient.delete('/genero/deletar/' + id);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao deletar genero:', error);
      throw error; 
    }
  }
});
