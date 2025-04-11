var authEmailPassButton = document.getElementById('authEmailPassButton');
var createUserButton = document.getElementById('createUserButton');

var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');

// Criar nova conta
createUserButton.addEventListener('click', function () {
    firebase.auth()
        .createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function (userCredential) {
            var user = userCredential.user;

            user.sendEmailVerification()
                .then(function () {
                    alert('✅ Conta criada com sucesso!\nEnviamos um e-mail de verificação para: ' + emailInput.value + '\n\nVerifique seu e-mail antes de fazer login.');
                    // Desloga o usuário para evitar acesso antes da verificação
                    firebase.auth().signOut();
                })
                .catch(function (error) {
                    console.error('Erro ao enviar e-mail de verificação:', error);
                    alert('⚠️ Não foi possível enviar o e-mail de verificação.');
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
    firebase.auth()
        .signInWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function (result) {
            var user = result.user;

            if (user.emailVerified) {
                alert('✅ Autenticado com sucesso: ' + user.email);
                window.location.href = "real-time-database.html";
            } else {
                alert('⚠️ E-mail ainda não verificado. Verifique sua caixa de entrada e confirme antes de continuar.');
                firebase.auth().signOut();
            }
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('❌ Falha ao autenticar. Verifique o erro no console.');
        });
});
