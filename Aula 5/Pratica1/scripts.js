function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                alert("Divisão por zero não é permitida.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Operação inválida.");
            return;
    }

    const resultElement = document.getElementById('result');
    const resultValueElement = document.getElementById('result-value');
    
    resultValueElement.textContent = result;
    
    if (result > 0) {
        resultElement.className = "result positive";
    } else if (result < 0) {
        resultElement.className = "result negative";
    } else {
        resultElement.className = "result zero";
    }
}