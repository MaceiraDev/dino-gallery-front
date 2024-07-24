export default (httpClient) => ({
  getAll: async () => {
    const response = await httpClient.get('/dinossauro');
    return { data: response.data }
  },

  getById: async (id) => {
    const response = await httpClient.get('/dinossauro/' + id);
    return { data: response.data }
  },

  update: async (id, dino) => {
    try {
      const response = await httpClient.put('/dinossauro/atualizar/' + id, dino);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao atualizar dino:', error);
      throw error;
    }
  },

  salvar: async (dino) => {
    try {
      const response = await httpClient.post('/dinossauro/salvar', dino);
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
  },

  saveImage: async (formImagem) => {
    let headers = { "Content-Type": "multipart/form-data" }
    const response = httpClient.post('/images/save', formImagem, { headers })
    return {
      data: response.data,
    };
    
  },
});
