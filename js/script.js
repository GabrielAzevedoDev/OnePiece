function trocarPersonagem(id) {
    // Oculta todas as divs de personagens
    const personagens = document.querySelectorAll('.personagem');
    personagens.forEach(personagem => {
        personagem.style.display = 'none';
    });

    // Exibe a div do personagem correspondente ao ID clicado
    const personagemSelecionado = document.getElementById(id);
    if (personagemSelecionado) {
        personagemSelecionado.style.display = 'block';
    }
}

function aumentarEscala(botao) {
   
    

    botao.style.transform = 'scale(1.2)'; // Aumenta a escala para 110%
    botao.style.transform.boxShadowboxShadow = 'box-shadow: 0 0 10px #D9D9D9'; //Muda a sombra do botão
    
    
    
}

function restaurarEscala(botao) {
    botao.style.transform = 'scale(1)'; // Restaura a escala para o tamanho normal (100%)
    botao.style.boxShadow = 'none'; //Restaura a sombra do botão
}