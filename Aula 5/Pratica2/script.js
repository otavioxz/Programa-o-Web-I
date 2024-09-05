function adicionarLinhaTotalizadora() {
    const tabela = document.getElementById('tabelaNotas');
    const linhas = tabela.rows;
    const numColunas = linhas[1].cells.length; // Número de colunas na tabela (incluindo a célula do aluno)
    const novaLinha = tabela.insertRow(); // Insere uma nova linha no final

    // Cria a célula da linha totalizadora com o texto "Média das Notas"
    let celula = novaLinha.insertCell(0);
    celula.textContent = 'Média das Notas';

    // Loop pelas colunas para calcular a média de cada uma
    for (let i = 1; i < numColunas - 1; i++) {
        let soma = 0;
        let count = 0;

        // Percorre as linhas de dados (a partir da linha 2, que contém os alunos)
        for (let j = 2; j < linhas.length; j++) {
            const celulaAtual = linhas[j].cells[i]; // Acessa a célula atual
            if (celulaAtual) { // Verifica se a célula existe
                const valorTexto = celulaAtual.textContent ? celulaAtual.textContent.replace(',', '.') : ''; // Pega o conteúdo da célula
                const valor = parseFloat(valorTexto); // Tenta converter o texto em número

                // Verifica se o valor é um número válido
                if (!isNaN(valor)) {
                    soma += valor; // Soma o valor à soma total
                    count++; // Conta quantos valores válidos foram somados
                }
            }
        }

        // Adiciona uma célula para a média e calcula a média (se houver valores válidos)
        celula = novaLinha.insertCell(i);
        celula.textContent = count > 0 ? (soma / count).toFixed(2) : ''; // Se count for maior que 0, calcula a média
    }
}


function adicionarColunaTotalizadora() {
    const tabela = document.getElementById('tabelaNotas');
    const linhas = tabela.rows;

    for (let i = 2; i < linhas.length; i++) {
        let soma = 0;
        let count = 0;
        for (let j = 1; j < linhas[i].cells.length - 1; j++) {
            const valor = parseFloat(linhas[i].cells[j].textContent.replace(',', '.'));
            if (!isNaN(valor)) {
                soma += valor;
                count++;
            }
        }
        const media = count > 0 ? (soma / count).toFixed(2) : '';
        linhas[i].insertCell(linhas[i].cells.length).textContent = media;
    }
}
