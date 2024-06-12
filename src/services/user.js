export default (httpClient) => ({
  getAll: async () => {
    const response = await httpClient.get('/user');
    return { data: response.data }
  },
  getById: async (id) => {
    const response = await httpClient.get('/user/' + id);
    return { data: response.data }
  },
  update: async (id, user) => {
    try {
      const response = await httpClient.put('/user/atualizar/' + id, user);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao atualizar user:', error);
      throw error;
    }
  },
  salvar: async (tipo) => {
    try {
      const response = await httpClient.post('/user/salvar', { tipo });
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao salvar user:', error);
      throw error; 
    }
  },
  delete: async (id) => {
    try {
      const response = await httpClient.delete('/user/deletar/' + id);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao deletar user:', error);
      throw error; 
    }
  }
});
