export default (httpClient) => ({
  getAll: async () => {
    const response = await httpClient.get('/info-trivia');
    return { data: response.data }
  },
  getById: async (id) => {
    const response = await httpClient.get('/info-trivia/' + id);
    return { data: response.data }
  },
  update: async (id, periodo) => {
    try {
      const response = await httpClient.put('/info-trivia/atualizar/' + id, periodo);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao atualizar periodo:', error);
      throw error;
    }
  },
  salvar: async ({ pergunta, resposta }) => {
    try {
      const response = await httpClient.post('/info-trivia/salvar', { pergunta, resposta });
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
      const response = await httpClient.delete('/info-trivia/deletar/' + id);
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
