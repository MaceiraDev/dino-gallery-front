export default (httpClient) => ({
  getAll: async () => {
    const response = await httpClient.get('/periodo');
    return { data: response.data }
  },
  getById: async (id) => {
    const response = await httpClient.get('/periodo/' + id);
    return { data: response.data }
  },
  update: async (id, periodo) => {
    try {
      const response = await httpClient.put('/periodo/atualizar/' + id, periodo);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao atualizar metodo de locomoção:', error);
      throw error;
    }
  },
  salvar: async (tipo) => {
    try {
      const response = await httpClient.post('/periodo/salvar', { tipo });
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao salvar periodo:', error);
      throw error; 
    }
  },
  delete: async (id) => {
    try {
      const response = await httpClient.delete('/periodo/deletar/' + id);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao deletar periodo:', error);
      throw error; 
    }
  }
});
