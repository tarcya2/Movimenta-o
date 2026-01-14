function mover(direcao) {
    let personagem = document.getElementById("personagem");
    let posicaoAtualX = personagem.offsetLeft;
    let posicaoAtualY = personagem.offsetTop;

    if (direcao === 'esquerda') {
        personagem.style.left = posicaoAtualX - 10 + 'px'; // Isso move o personagem para esquerda
    }
     else if (direcao === 'direita') {
        personagem.style.left = posicaoAtualX + 10 + 'px'; // Isso move o personagem para direita
    }
    else if (direcao === 'cima') {
        personagem.style.top = posicaoAtualY - 10 + 'px'; // Isso move o personagem para cima
    }
    else if (direcao === 'baixo') {
        personagem.style.top = posicaoAtualY + 10 + 'px'; // Isso move o personagem para baixo
    }
}