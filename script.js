function VerificarEntrada() {
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosKaique = ['kaoe', 'deiverson', 'caio'];
    if (ConvidadosKaique.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode Entrar'
    } else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode Entrar'
    }
}

