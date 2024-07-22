export default (httpClient) => ({
  getTotalIds: async () => {
    const response = await httpClient.get('/mezozoico/contar-ids');
    return { data: response.data }
  }
})