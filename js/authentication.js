var authEmailPassButton = document.getElementById('authEmailPassButton');
var createUserButton = document.getElementById('createUserButton');

var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');

// Criar nova conta
createUserButton.addEventListener('click', function () {
    firebase
        .auth()
        .createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function (userCredential) {
            const user = userCredential.user;

            // Envia o e-mail de verificação
            user.sendEmailVerification()
                .then(function () {
                    alert('✅ Conta criada com sucesso!\nFoi enviado um e-mail para verificação: ' + emailInput.value);
                    // Redireciona para a tela de adicionar palavras
                    window.location.href = "real-time-database.html";
                })
                .catch(function (error) {
                    console.error('Erro ao enviar e-mail de verificação:', error);
                    alert('⚠️ Conta criada, mas não foi possível enviar o e-mail de verificação.');
                });
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
            const user = result.user;

            // Verifica se o e-mail foi confirmado
            if (user.emailVerified) {
                alert('✅ Autenticado com sucesso: ' + emailInput.value);
                // Redireciona para a tela de adicionar palavras
                window.location.href = "real-time-database.html";
            } else {
                alert('⚠️ E-mail ainda não verificado. Por favor, verifique sua caixa de entrada.');
                firebase.auth().signOut();
            }
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('❌ Falha ao autenticar. Verifique o erro no console.');
        });
});
