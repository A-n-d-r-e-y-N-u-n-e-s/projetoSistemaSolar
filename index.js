const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {

    const idSelecionado = personagem.attributes.id.value;

    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");

    personagem.classList.add("selecionado");

    const imagemPlaneta = document.getElementById('personagem-planeta');
    imagemPlaneta.src = `/imagem/${idSelecionado}.png`;

    const nomePlaneta = document.getElementById('nome-planeta');
    const nomeSelecionado = personagem.getAttribute('data-name');

    nomePlaneta.innerHTML = nomeSelecionado;
  });
});