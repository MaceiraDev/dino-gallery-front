export default (httpClient) => ({
  getAll: async () => {
    const response = await httpClient.get('/reino');
    return { data: response.data }
  },
  getById: async (id) => {
    const response = await httpClient.get('/reino/' + id);
    return { data: response.data }
  },
  update: async (id, reino) => {
    try {
      const response = await httpClient.put('/reino/atualizar/' + id, reino);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao atualizar reino:', error);
      throw error;
    }
  },
  salvar: async ({tipo}) => {
    try {
      const response = await httpClient.post('/reino/salvar', { tipo });
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao salvar reino:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const response = await httpClient.delete('/reino/deletar/' + id);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao deletar reino:', error);
      throw error;
    }
  }
});
