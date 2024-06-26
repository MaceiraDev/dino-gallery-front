export default (httpClient) => ({
  getAll: async () => {
    const response = await httpClient.get('/dominio');
    return { data: response.data }
  },
  getById: async (id) => {
    const response = await httpClient.get('/dominio/' + id);
    return { data: response.data }
  },
  update: async (id, dominio) => {
    try {
      const response = await httpClient.put('/dominio/atualizar/' + id, dominio);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao atualizar dominio:', error);
      throw error;
    }
  },
  salvar: async (tipo) => {
    try {
      const response = await httpClient.post('/dominio/salvar', { tipo });
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao salvar dominio:', error);
      throw error;
    }
  },
  delete: async (id) => {
    try {
      const response = await httpClient.delete('/dominio/deletar/' + id);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao deletar dominio:', error);
      throw error;
    }
  },
  getById: async (id) => {
    const response = await httpClient.get('/dominio/' + id);
    return { data: response.data }
  },
  update: async (id, dominio) => {
    try {
      const response = await httpClient.put('/dominio/atualizar/' + id, dominio);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao atualizar dominio:', error);
      throw error;
    }
  },
});
