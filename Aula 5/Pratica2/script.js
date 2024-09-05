function adicionarLinhaTotalizadora() {
    const tabela = document.getElementById('tabelaNotas');
    const linhas = tabela.rows;
    const numColunas = linhas[1].cells.length; 
    const novaLinha = tabela.insertRow(); 

    let celula = novaLinha.insertCell(0);
    celula.textContent = 'Média das Notas';
   
    for (let i = 1; i < numColunas - 1; i++) {
        let soma = 0;
        let count = 0;

        for (let j = 2; j < linhas.length; j++) {
            const celulaAtual = linhas[j].cells[i]; 
            if (celulaAtual) { 
                const valorTexto = celulaAtual.textContent ? celulaAtual.textContent.replace(',', '.') : ''; 
                const valor = parseFloat(valorTexto); 

                
                if (!isNaN(valor)) {
                    soma += valor; 
                    count++; 
                }
            }
        }

        celula = novaLinha.insertCell(i);
        celula.textContent = count > 0 ? (soma / count).toFixed(2) : ''; 
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
