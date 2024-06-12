export default (httpClient) => ({
  getAll: async () => {
    const response = await httpClient.get('/genero');
    return { data: response.data }
  },
  getById: async (id) => {
    const response = await httpClient.get('/genero/' + id);
    return { data: response.data }
  },
  update: async (id, genero) => {
    try {
      const response = await httpClient.put('/genero/atualizar/' + id, genero);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao atualizar genero:', error);
      throw error;
    }
  },
  salvar: async (tipo) => {
    try {
      const response = await httpClient.post('/genero/salvar', { tipo });
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao salvar genero:', error);
      throw error; 
    }
  },
  delete: async (id) => {
    try {
      const response = await httpClient.delete('/genero/deletar/' + id);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao deletar genero:', error);
      throw error; 
    }
  }
});
