    // Função para inserir números e operadores no visor
    function insert(num) {
        let numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
    }

    // Função para limpar o visor
    function clean() {
        document.getElementById('resultado').innerHTML = "";
    }

    // Função para apagar o último caractere do visor
    function back() {
        let resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);        
    }

    // Função para calcular o resultado da expressão
    function calcular() {
        let calcular = document.getElementById('resultado').innerHTML;
        try {
            // Avalia a expressão e exibe o resultado
            document.getElementById('resultado').innerHTML = eval(calcular);
        } catch (e) {
            document.getElementById('resultado').innerHTML = 'Erro';
        }
    }

    // Captura eventos de teclas pressionadas
    document.addEventListener('keydown', function(event) {
        const key = event.key;

        // Ignora outras teclas se o visor estiver em foco
        if (event.target.id === 'resultado') {
            return;
        }

        // Se pressionar números ou operadores, insere no visor
        if (key >= '0' && key <= '9' || ['+', '-', '*', '/'].includes(key)) {
            insert(key);
        }

        // Se pressionar "Enter", calcula o resultado
        if (key === 'Enter') {
            event.preventDefault();  // Impede o comportamento padrão da tecla Enter
            calcular();
        }

        // Se pressionar "Backspace", apaga o último caractere
        if (key === 'Backspace') {
            event.preventDefault(); // Impede o comportamento padrão
            back();
        }

        // Se pressionar "Escape", limpa o visor
        if (key === 'Escape') {
            clean();
        }
    });