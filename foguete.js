const button = document.querySelector("button");
const mensagem = document.querySelector("h1");
const textoContagem = document.querySelector("p");
const imagem1 = document.querySelector(".imagem1");
const imagem2 = document.querySelector(".imagem2");

let contagem = 10;
let parar = false;
let id;

const contador = () => {
    mensagem.innerText = "Lançamento em: ";
    textoContagem.innerHTML = contagem;
    contagem--;
    if (contagem === -1) {
        clearInterval(id)
        mensagem.innerText = "Lançamento iniciado!";
        imagem1.style.display = "none";
        imagem2.style.display = "block";
    }
}

const reiniciar = () => {
    contagem = 10;
    parar = false;
    mensagem.innerText = "Preparando para contagem regressiva...";
    textoContagem.innerText = "";
    imagem2.style.display = "none";
    imagem1.style.display = "block";
    button.innerText = "Iniciar contagem regressiva!";
}


button.addEventListener("click", event => {
    if (!parar) {
        id = setInterval(contador, 1000);
        button.innerText = "Abortar a missão!";
        parar = true;
    } else {
        parar = false;
        clearInterval(id);
        reiniciar();

    }

});