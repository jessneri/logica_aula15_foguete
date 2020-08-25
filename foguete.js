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
        imagem1.remove();
        imagem2.setAttribute("src", "foguete_gif.gif");
    }
}

const reiniciar = () => {
    contagem = 10;
    parar = false;
    mensagem.innerText = "Preparando para contagem regressiva...";
    textoContagem.innerText = "";
    imagem2.remove();
    imagem1.setAttribute("src", "foguete_img.png");
    button.innerText = "Iniciar contagem regressiva!";
}


button.addEventListener("click", event => {
    if (parar === false) {
        id = setInterval(contador, 1000);
        button.innerText = "Abortar a missão!";
        parar = true;
    } else {
        parar = false;
        clearInterval(id);
        reiniciar();

    }

});