export default (httpClient) => ({
  getAll: async () => {
    const response = await httpClient.get('/sub-familia');
    return { data: response.data }
  },
  getById: async (id) => {
    const response = await httpClient.get('/sub-familia/' + id);
    return { data: response.data }
  },
  update: async (id, subFamilia) => {
    try {
      const response = await httpClient.put('/sub-familia/atualizar/' + id, subFamilia);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao atualizar sub-familia:', error);
      throw error;
    }
  },
  salvar: async (tipo) => {
    try {
      const response = await httpClient.post('/sub-familia/salvar', { tipo });
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao salvar sub-familia:', error);
      throw error;
    }
  },
  delete: async (id) => {
    try {
      const response = await httpClient.delete('/sub-familia/deletar/' + id);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao deletar sub-familia:', error);
      throw error;
    }
  }
});
