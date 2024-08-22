export default (httpClient) => ({
  getAll: async () => {
    const response = await httpClient.get('/filo');
    return { data: response.data }
  },
  getById: async (id) => {
    const response = await httpClient.get('/filo/' + id);
    return { data: response.data }
  },
  update: async (id, filo) => {
    try {
      const response = await httpClient.put('/filo/atualizar/' + id, filo);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao atualizar filo:', error);
      throw error;
    }
  },
  salvar: async (tipo) => {
    try {
      const response = await httpClient.post('/filo/salvar', { tipo });
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao salvar filo:', error);
      throw error;
    }
  },
  delete: async (id) => {
    try {
      const response = await httpClient.delete('/filo/deletar/' + id);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao deletar filo:', error);
      throw error;
    }
  }
});
