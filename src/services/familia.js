export default (httpClient) => ({
  async getAll() {
    try {
      const response = await httpClient.get('/familia');
      return {
        data: response.data
      }
    } catch (error) {
<<<<<<< HEAD
      console.error('Erro ao buscar familia:', error);
=======
      console.error('Erro ao buscar familias:', error);
>>>>>>> 22af5e2953bcd60ee1298d234348e3ee77fe4447
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
<<<<<<< HEAD
      throw error;
=======
      throw error; 
>>>>>>> 22af5e2953bcd60ee1298d234348e3ee77fe4447
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
<<<<<<< HEAD
      throw error;
=======
      throw error; 
>>>>>>> 22af5e2953bcd60ee1298d234348e3ee77fe4447
    }
  }
});
