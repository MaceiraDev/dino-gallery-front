function getImageUrl(imagePath) {
  if (!imagePath) return ''; // Verifica se o caminho da imagem é válido
  const baseUrl = 'http://localhost:8070/uploads/';
  const cleanedPath = imagePath.replace(/\\/g, '/').split('/').pop(); // Substitui as barras invertidas por barras normais e obtém o nome do arquivo
  const finalUrl = baseUrl + cleanedPath; // Concatena a URL base com o nome do arquivo
  return finalUrl;
}

async function testImageUrl(url) {
  try {
    const response = await fetch(url); // Faz uma requisição para a URL da imagem
    return response.ok; // Retorna true se a resposta for bem-sucedida
  } catch (error) {
    console.error('Error fetching image:', error); // Loga um erro se a requisição falhar
    return false; // Retorna false se houver um erro
  }
}

export default (httpClient) => ({
  getAll: async () => {
    const response = await httpClient.get('/dinossauro'); // Busca todos os dinossauros do backend
    const dataWithImageUrls = await Promise.all(response.data.map(async dino => { // Processa cada dinossauro
      const imagesWithUrls = await Promise.all(dino.images.map(async imgObj => { // Processa cada imagem do dinossauro
        const imageUrl = getImageUrl(imgObj.image); // Gera a URL da imagem
        const isValid = await testImageUrl(imageUrl); // Testa se a URL da imagem é válida
        return {
          ...imgObj, // Mantém todas as propriedades originais do objeto de imagem
          imageUrl: isValid ? imageUrl : 'URL invalida ou imagem não encontrada' // Adiciona a URL da imagem ou uma mensagem de erro se a URL não for válida
        };
      }));
      return {
        ...dino, // Mantém todas as propriedades originais do dinossauro
        images: imagesWithUrls // Substitui o array de imagens pelo array com URLs processadas
      };
    }));
    return { data: dataWithImageUrls }; // Retorna os dados processados
  },

  getById: async (id) => {
    const response = await httpClient.get('/dinossauro/' + id); // Busca o dinossauro pelo ID
    const dino = response.data; // Obtém os dados do dinossauro
    const imagesWithUrls = await Promise.all(dino.images.map(async imgObj => { // Processa cada imagem do dinossauro
      const imageUrl = getImageUrl(imgObj.image); // Gera a URL da imagem
      const isValid = await testImageUrl(imageUrl); // Testa se a URL da imagem é válida
      return {
        ...imgObj, // Mantém todas as propriedades originais do objeto de imagem
        imageUrl: isValid ? imageUrl : 'URL invalida ou imagem não encontrada' // Adiciona a URL da imagem ou uma mensagem de erro se a URL não for válida
      };
    }));
    const dinoWithImages = {
      ...dino, // Mantém todas as propriedades originais do dinossauro
      images: imagesWithUrls // Substitui o array de imagens pelo array com URLs processadas
    };
    return { data: dinoWithImages }; // Retorna o objeto do dinossauro com as imagens processadas
  },

  update: async (id, dino) => {
    try {
      const response = await httpClient.put('/dinossauro/atualizar/' + id, dino);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao atualizar dino:', error);
      throw error;
    }
  },

  salvar: async (dino) => {
    try {
      const response = await httpClient.post('/dinossauro/salvar', dino);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao salvar dieta:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const response = await httpClient.delete('/dinossauro/deletar/' + id);
      return {
        data: response.data
      }
    }
    catch (error) {
      console.error('Erro ao deletar dieta:', error);
      throw error;
    }
  },

  saveImage: async (formImagem) => {
    let headers = { "Content-Type": "multipart/form-data" }
    const response = httpClient.post('/images/save', formImagem, { headers })
    return {
      data: response.data,
    };

  },
});
