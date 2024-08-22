export default (httpClient) => ({
  getAll: async () => {
    const response = await httpClient.get('/filme');
    return { data: response.data }
  },
  getById: async (id) => {
    const response = await httpClient.get('/filme/' + id);
    return { data: response.data }
  },
  update: async (id, filme) => {
    try {
      const response = await httpClient.put('/filme/atualizar/' + id, filme);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao atualizar filme:', error);
      throw error;
    }
  },
  salvar: async (nome, sinopse, dtl, urn, genero) => {
    try {
      const response = await httpClient.post('/filme/salvar', nome, sinopse, dtl, urn, genero);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao salvar filme:', error);
      throw error;
    }
  },
  delete: async (id) => {
    try {
      const response = await httpClient.delete('/filme/deletar/' + id);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao deletar filme:', error);
      throw error;
    }
  }
});
