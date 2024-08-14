document.addEventListener('DOMContentLoaded', function () {
    const formLogin = document.getElementById('login-form');
    const formRegistro = document.getElementById('registro-form');
    const formRecuperarSenha = document.getElementById('recuperar-form');

    // Inicializar o Firebase Firestore
    const firestore = firebase.firestore();

    if (formLogin) {
        formLogin.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;

            firebase.auth().signInWithEmailAndPassword(email, senha)
                .then(userCredential => {
                    const user = userCredential.user;

                    // Recuperar o tipo de conta do Firestore
                    return firestore.collection('users').doc(user.uid).get();
                })
                .then(doc => {
                    if (doc.exists) {
                        const tipoConta = doc.data().tipoConta;

                        // Redirecionar com base no tipo de conta
                        if (tipoConta === 'admin') {
                            window.location.href = '/admin/painel.html';
                        } else if (tipoConta === 'empresa') {
                            window.location.href = '/empresa/painel.html';
                        } else if (tipoConta === 'tutor') {
                            window.location.href = '/tutor/painel.html';
                        } else if (tipoConta === 'petsitter') {
                            window.location.href = '/petsitter/painel.html';
                        } else {
                            alert('Tipo de conta desconhecido.');
                        }
                    } else {
                        alert('Nenhum dado de usuário encontrado!');
                    }
                })
                .catch(error => {
                    console.error(error);
                    alert('Erro ao realizar login: ' + error.message);
                });
        });
    }

    if (formRegistro) {
        formRegistro.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;
            const tipoConta = document.getElementById('tipo-conta').value; // Tipo de conta selecionado

            firebase.auth().createUserWithEmailAndPassword(email, senha)
                .then(userCredential => {
                    const user = userCredential.user;

                    // Salvar o tipo de conta no Firestore
                    return firestore.collection('users').doc(user.uid).set({
                        email: email,
                        tipoConta: tipoConta
                    });
                })
                .then(() => {
                    alert('Registro realizado com sucesso!');
                    window.location.href = 'login.html'; // Redireciona para o login após o registro
                })
                .catch(error => {
                    console.error(error);
                    alert('Erro ao realizar registro: ' + error.message);
                });
        });
    }

    if (formRecuperarSenha) {
        formRecuperarSenha.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('email').value;

            firebase.auth().sendPasswordResetEmail(email)
                .then(() => {
                    alert('E-mail de recuperação enviado com sucesso!');
                })
                .catch(error => {
                    console.error(error);
                    alert('Erro ao enviar e-mail de recuperação: ' + error.message);
                });
        });
    }
});
