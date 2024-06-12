export default (httpClient) => ({
  getAll: async () => {
    const response = await httpClient.get('/metodoLocomocao');
    return { data: response.data }
  },
  getById: async (id) => {
    const response = await httpClient.get('/metodoLocomocao/' + id);
    return { data: response.data }
  },
  update: async (id, metodoLocomocao) => {
    try {
      const response = await httpClient.put('/metodoLocomocao/atualizar/' + id, metodoLocomocao);
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
      const response = await httpClient.post('/metodoLocomocao/salvar', { tipo });
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
      const response = await httpClient.delete('/metodoLocomocao/deletar/' + id);
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
