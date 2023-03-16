/* OBJETIVO - quando clicarmos no botao temos que mostrar a imagem de fundo correspondente (alt+shift+f organiza)

- passo 1 - dar um jeito de pegar o elemento html dos botoes
- passo 2 - dar um jeito de identificar o clique do usuario
- passo 3 - desmarcar o botao selecionado anterior
- passo 4 - marcar o botao clicado como se estivesse selecionado
- passo 5 - esconder a imagem anterior
- passo 6 - fazer aparecer a imagem de fundo correspondente ao botao clicado
*/

/*- passo 1 - dar um jeito de pegar o elemento html dos botoes*/
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

/*- passo 2 - dar um jeito de identificar o clique do usuario*/
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
      /*- passo 3 - desmarcar o botao selecionado anterior*/
      const botaoSelecionado = document.querySelector('.selecionado');
      botaoSelecionado.classList.remove('selecionado');
      
      /*- passo 4 - marcar o botao clicado como se estivesse selecionado*/
      botao.classList.add('selecionado');
      
      /*- passo 5 - esconder a imagem ativa anterior*/
      const imagemAtiva = document.querySelector('.ativa');
      imagemAtiva.classList.remove('ativa');
      
      /*- passo 6 - fazer aparecer a imagem de fundo correspondente ao botao clicado*/
      imagens[indice].classList.add('ativa');
  })
})