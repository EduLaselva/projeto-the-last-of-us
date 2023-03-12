/* shift alt a , alt shift f -> organiza o codigo*/
/* 
 Objetivo é clicar e mostrar a imagem 
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionado
    - passo 5 - esconder a imagem anterior
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

const botoesCarrossel = document.querySelectorAll('.butao');
const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((butao, indice) => {
    butao.addEventListener('click', () => {

        DesativarButao();

        AtivarButao(butao);

        EsconderImagemAtiva();

        MostrarProximaImagem(indice);
    })
})
function MostrarProximaImagem(indice) {
    imagens[indice].classList.add('ativa');
}

function AtivarButao(butao) {
    butao.classList.add('selecionado');
}

function EsconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function DesativarButao() {
    const butaoSelecionado = document.querySelector('.selecionado');
    butaoSelecionado.classList.remove('selecionado');
}

