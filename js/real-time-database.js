// Seleção dos elementos do formulário
var palavrasList = document.getElementById('palavrasList');
var inputPalavra = document.getElementById('palavra');
var inputFrase = document.getElementById('frase');
var form = document.getElementById('addForm');

// Previne o comportamento padrão de envio do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault();
    create(inputPalavra.value, inputFrase.value);
});

// Função para adicionar palavra e frase no banco de dados
function create(palavra, frase) {
    var data = {
        palavra: palavra,
        frase: frase
    };

    firebase.database().ref('Palavras').push(data)
        .then(function () {
            // Exibe mensagem de sucesso
            alert('✅ Palavra e frase adicionadas com sucesso!');
            // Limpa os campos
            inputPalavra.value = '';
            inputFrase.value = '';
            inputPalavra.focus();
        })
        .catch(function (error) {
            console.error('Erro ao adicionar:', error);
            alert('❌ Erro ao adicionar. Verifique o console para mais detalhes.');
        });
}
