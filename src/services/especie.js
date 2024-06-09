export default (httpClient) => ({
  async getAll() {
    try {
      const response = await httpClient.get('/especie');
      return {
        data: response.data
      }
    } catch (error) {
      console.error('Erro ao buscar especies:', error);
      throw error;
    }
  },
  getById: async (id) => {
    const response = await httpClient.get('/especie/' + id);
    return { data: response.data }
  },
  salvar: async (tipo) => {
    try {
      const response = await httpClient.post('/especie/salvar', { tipo });
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao salvar dieta:', error);
      throw error;
    }
  },
  update: async (id, especie) => {
    try {
      const response = await httpClient.put('/especie/atualizar/' + id, especie);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao atualizar especie:', error);
      throw error;
    }
  },
  delete: async (id) => {
    try {
      const response = await httpClient.delete('/especie/deletar/' + id);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao deletar especie:', error);
      throw error;
    }
  }
})