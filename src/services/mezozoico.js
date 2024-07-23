export default (httpClient) => ({
  getTotalIds: async () => {
    const response = await httpClient.get('/mezozoico/contarIds');
    return { data: response.data }
  }
})