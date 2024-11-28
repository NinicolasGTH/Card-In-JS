document.addEventListener("DOMContentLoaded", async function() {
    // Exemplo de API para teste
    const apiUrl = 'https://api.exemplo.com/card';

    try {
        // Buscar os dados da API
        const response = await fetch(apiUrl);

        // Verificar se a resposta da API foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro na resposta da API: ' + response.status);
        }

        // Converter a resposta para JSON
        const data = await response.json();

        // Verificar se os dados possuem todas as propriedades necessárias
        if (!data.title || !data.description || !data.imageUrl || !data.link) {
            throw new Error('Dados incompletos recebidos da API');
        }

        // Preencher os elementos com os dados da API
        const cardTitle = document.getElementById('card-title');
        const cardDescription = document.getElementById('card-description');
        const cardImage = document.getElementById('card-img');
        const cardLink = document.getElementById('card-link');

        cardTitle.textContent = data.title;
        cardDescription.textContent = data.description;
        cardImage.src = data.imageUrl;
        cardLink.href = data.link;

    } catch (error) {
        console.error('Erro ao carregar os dados:', error);
        // Exibir uma mensagem amigável para o usuário
        alert("Ocorreu um erro ao carregar os dados. Tente novamente mais tarde.");
    }
});
