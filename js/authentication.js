
var authEmailPassButton = document.getElementById('authEmailPassButton');
var createUserButton = document.getElementById('createUserButton');

var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');

createUserButton.addEventListener('click', function(){
    firebase
    .auth()
    .createUserWithEmailAndPassword(emailInput.value , passwordInput.value)
    .then(function(){
        alert('Bem vindo' + emailInput.value);
    })
    .catch(function(error){
        console.error(error.code);
        console.error(error.message);
        alert('Falha ao cadastrar, verifique o erro no console.')

    })
});

authEmailPassButton.addEventListener('click', function(){
    firebase
    .auth()
    .signInWithEmailAndPassword (emailInput.value , passwordInput.value)
    .then(function(result){
        console.log(result);
        alert('Autenticado' + emailInput.value);
    })
    .catch(function(error){
        console.error(error.code);
        console.error(error.message);
        alert('Falha ao autenticar, verifique o erro no console.')

    })
});