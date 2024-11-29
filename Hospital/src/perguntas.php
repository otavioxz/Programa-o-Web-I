<?php
require_once 'db.php';
require_once 'funcoes.php';

// Função para obter perguntas ativas
function obterPerguntas() {
    $conexao = conectarBD();
    $query = "SELECT id, texto, ordem FROM perguntas WHERE status = TRUE ORDER BY ordem ASC";
    $resultado = pg_query($conexao, $query);
    return pg_fetch_all($resultado);
}

// Função para cadastrar nova pergunta
if (isset($_POST['cadastrar_pergunta'])) {
    $texto = sanitizarEntrada($_POST['texto_pergunta']);
    if ($texto) {
        $conexao = conectarBD();

        // Determina o próximo número de ordem
        $queryOrdem = "SELECT COALESCE(MAX(ordem), 0) + 1 AS nova_ordem FROM perguntas";
        $resultadoOrdem = pg_query($conexao, $queryOrdem);
        $novaOrdem = (int)pg_fetch_result($resultadoOrdem, 0, 'nova_ordem');

        $query = "INSERT INTO perguntas (texto, ordem) VALUES ($1, $2)";
        pg_query_params($conexao, $query, [$texto, $novaOrdem]);

        pg_close($conexao);
    }
    header('Location: ../public/admin.php');
    exit();
}

// Função para remover pergunta
if (isset($_GET['remover'])) {
    $id = (int)$_GET['remover'];
    $conexao = conectarBD();

    // Verifica se a pergunta existe antes de marcar como inativa
    $queryVerificar = "SELECT id FROM perguntas WHERE id = $1";
    $resultadoVerificar = pg_query_params($conexao, $queryVerificar, [$id]);

    if (pg_num_rows($resultadoVerificar) > 0) {
        $query = "UPDATE perguntas SET status = FALSE WHERE id = $1";
        pg_query_params($conexao, $query, [$id]);
    }

    pg_close($conexao);
    header('Location: ../public/admin.php');
    exit();
}
?>
