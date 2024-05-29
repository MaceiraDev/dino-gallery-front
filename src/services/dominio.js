export default (httpClient) => ({
  async getAll() {
    try {
      const response = await httpClient.get('/dominio');
      return {
        data: response.data
      }
    } catch (error) {
<<<<<<< HEAD
      console.error('Erro ao buscar dominio:', error);
=======
      console.error('Erro ao buscar dominios:', error);
>>>>>>> 22af5e2953bcd60ee1298d234348e3ee77fe4447
      throw error; // Lançar o erro novamente para ser tratado onde a função é chamada
    }
  },
  salvar: async (tipo) => {
    try {
      const response = await httpClient.post('/dominio/salvar', { tipo });
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao salvar dominio:', error);
      throw error; 
    }
  },
  delete: async (id) => {
    try {
      const response = await httpClient.delete('/dominio/deletar/' + id);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao deletar dominio:', error);
      throw error; 
    }
  }
});
