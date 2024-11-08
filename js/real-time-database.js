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
    return firebase.database().ref('Palavras').push(data);
}


//firebase.database().ref('Palavras').on('value', function(snapshot) {
  //  palavrasList.innerHTML = '';
    //snapshot.forEach(function(item) {
      //  var li = document.createElement('li');
        //li.appendChild(document.createTextNode(item.val().palavra + ': ' + item.val().frase));
      //  palavrasList.appendChild(li);
//    });
//});
