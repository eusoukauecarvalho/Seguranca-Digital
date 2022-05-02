function VerificarEntrada() {
    NomeConvidado = document.getElementById('nome').value;
    // Lista de convidados do Kaique
    ConvidadosKaique = ['kaue', 'deiverson', 'caio'];
    if (ConvidadosKaique.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode Entrar'
    } else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode Entrar'
    }
    // Lista de convidados da Marcela
    ConvidadosMarcela = ['dani', 'vivi', 'liza'];
    if (Convidadosmarcela.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode Entrar'
    } else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode Entrar'
    }
    
}

