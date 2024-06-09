export default (httpClient) => ({
  getAll: async () => {
    const response = await httpClient.get('/dieta');
    return { data: response.data }
  },
  getById: async (id) => {
    const response = await httpClient.get('/dieta/' + id);
    return { data: response.data }
  },
  update: async (id, dieta) => {
    try {
      const response = await httpClient.put('/dieta/atualizar/' + id, dieta);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao atualizar dieta:', error);
      throw error;
    }
  },
  salvar: async (tipo) => {
    try {
      const response = await httpClient.post('/dieta/salvar', { tipo });
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao salvar dieta:', error);
      throw error;
    }
  },
  
  delete: async (id) => {
    try {
      const response = await httpClient.delete('/dieta/deletar/' + id);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao deletar dieta:', error);
      throw error;
    }
  }
});
