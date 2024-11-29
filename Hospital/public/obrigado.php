<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agradecimento</title>
    <link rel="stylesheet" href="css/style.css">
    <style>
        .progress-container {
            width: 100%;
            background-color: #f3f3f3;
            border-radius: 5px;
            overflow: hidden;
            margin-top: 20px;
            height: 20px;
        }
        .progress-bar {
            width: 100%;
            height: 100%;
            background-color: #4caf50;
            transition: width 0.1s linear;
        }
    </style>
    <script>
        let progress = 100; // Progress starts at 100%
        const interval = setInterval(function() {
            progress -= 2; // Decrease progress by 2% every 100ms
            document.getElementById('progress-bar').style.width = progress + '%';

            if (progress <= 0) {
                clearInterval(interval); // Stop the interval when progress reaches 0
                window.location.href = 'index.php'; // Redirect to the page
            }
        }, 100); // Update every 100 milliseconds
    </script>
</head>
<body>
    <div class="container">
        <h1>Obrigado!</h1>
        <p>O Hospital Regional Alto Vale (HRAV) agradece sua resposta e ela é muito importante para nós, pois nos ajuda a melhorar continuamente nossos serviços.</p>
        <p>Você será redirecionado para a página inicial em 5 segundos.</p>
        <div class="progress-container">
            <div id="progress-bar" class="progress-bar"></div>
        </div>
    </div>
</body>
</html>
