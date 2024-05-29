export default (httpClient) => ({
  async getAll() {
    try {
      const response = await httpClient.get('/clado');
      return {
        data: response.data
      }
    } catch (error) {
<<<<<<< HEAD
      console.error('Erro ao buscar clado:', error);
=======
      console.error('Erro ao buscar clados:', error);
>>>>>>> 22af5e2953bcd60ee1298d234348e3ee77fe4447
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
<<<<<<< HEAD
      throw error;
=======
      throw error; 
>>>>>>> 22af5e2953bcd60ee1298d234348e3ee77fe4447
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
<<<<<<< HEAD
      throw error;
=======
      throw error; 
>>>>>>> 22af5e2953bcd60ee1298d234348e3ee77fe4447
    }
  }
});
