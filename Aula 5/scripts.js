function getValor(id) {
    return parseFloat(document.getElementById(id).value) || 0;
}

function performOperation(operation) {
    const valor1 = getValor("valor1");
    const valor2 = getValor("valor2");
    let resultado;

    switch (operation) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            resultado = valor2 !== 0 ? valor1 / valor2 : 'Div/0';
            break;
        default:
            resultado = 'Erro';
    }

    displayResult(resultado);
}

function displayResult(valor) {
    const resultadoField = document.getElementById("resultado");
    resultadoField.value = valor;

    if (valor === 'Div/0') {
        resultadoField.style.backgroundColor = 'orange';
    } else if (valor < 0) {
        resultadoField.style.backgroundColor = 'red';
    } else if (valor > 0) {
        resultadoField.style.backgroundColor = 'green';
    } else {
        resultadoField.style.backgroundColor = 'gray';
    }
}
