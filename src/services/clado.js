export default (httpClient) => ({
   getAll: async () => {
    const response = await httpClient.get('/clado');
    return { data: response.data }
  },
  getById: async (id) => {
    const response = await httpClient.get('/clado/' + id);
    return { data: response.data }
  },
  update: async (id, clado) => {
    try {
      const response = await httpClient.put('/clado/atualizar/' + id, clado);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao atualizar clado:', error);
      throw error;
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
      throw error;
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
      throw error;
    }
  }
});
