export default (httpClient) => ({
  getAll: async () => {
    const response = await httpClient.get('/dinossauro');
    return { data: response.data }
  },

  getById: async (id) => {
    const response = await httpClient.get('/dinossauro/' + id);
    return { data: response.data }
  },

  update: async (id, dieta) => {
    try {
      const response = await httpClient.put('/dinossauro/atualizar/' + id, dieta);
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
      const response = await httpClient.post('/dinossauro/salvar', { tipo });
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
      const response = await httpClient.delete('/dinossauro/deletar/' + id);
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
