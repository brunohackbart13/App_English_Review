var authEmailPassButton = document.getElementById('authEmailPassButton');
var createUserButton = document.getElementById('createUserButton');

var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');

// Criar nova conta
createUserButton.addEventListener('click', function () {
    firebase
        .auth()
        .createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function () {
            alert('Conta criada com sucesso!\nBem-vindo, ' + emailInput.value);
            // Redireciona para a tela de adicionar palavras
            window.location.href = "adicionar.html";
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('❌ Falha ao cadastrar. Verifique o erro no console.');
        });
});

// Login com e-mail e senha
authEmailPassButton.addEventListener('click', function () {
    firebase
        .auth()
        .signInWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function (result) {
            console.log(result);
            alert('✅ Autenticado com sucesso: ' + emailInput.value);
            // Redireciona para a tela de adicionar palavras
            window.location.href = "adicionar.html";
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('❌ Falha ao autenticar. Verifique o erro no console.');
        });
});
