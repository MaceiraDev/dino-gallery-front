export default (httpClient) => ({
  getAll: async () => {
    const response = await httpClient.get('/metodo-locomocao');
    return { data: response.data }
  },
  getById: async (id) => {
    const response = await httpClient.get('/metodo-locomocao/' + id);
    return { data: response.data }
  },
  update: async (id, metodoLocomocao) => {
    try {
      const response = await httpClient.put('/metodo-locomocao/atualizar/' + id, metodoLocomocao);
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
      const response = await httpClient.post('/metodo-locomocao/salvar', { tipo });
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao salvar metodo de locomoção:', error);
      throw error;
    }
  },
  delete: async (id) => {
    try {
      const response = await httpClient.delete('/metodo-locomocao/deletar/' + id);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao deletar metodo de locomoção:', error);
      throw error;
    }
  }
});
