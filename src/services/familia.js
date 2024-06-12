export default (httpClient) => ({
  getAll: async () => {
    const response = await httpClient.get('/familia');
    return { data: response.data }
  },
  getById: async (id) => {
    const response = await httpClient.get('/familia/' + id);
    return { data: response.data }
  },
  update: async (id, familia) => {
    try {
      const response = await httpClient.put('/familia/atualizar/' + id, familia);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao atualizar familia:', error);
      throw error;
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
      throw error;
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
      throw error;
    }
  }
});
