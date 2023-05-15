/*
O que precisamos fazer? - Quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

- Objetivo 1 - Quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos no modo escuro sejam aplicados e mudar a imagem pra lua
    - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
    - passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
    - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
    - passo 4 - adicionar a classe modo-escuro no body
    - passo 5 - trocar a imagem do botão de alterar tema pra lua

- Objetivo 2 - Quando clicar no botão de troca de tema, caso o body já tenha classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
    - passo 6 - Verificar se o body já tem a classe modo-escuro
    - passo 7 - remover a classe do modo-escuro do body
    - passo 8 - trocar a imagem do botão de alterar tema pra sol
*/

const botaoAlterartema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterartema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if(modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }  
});