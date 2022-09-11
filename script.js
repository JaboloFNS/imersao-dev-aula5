var catalogoFilmes = []

function adicionarFilme() {
    var infInput = document.getElementById("filme").value;
    if (infInput.endsWith(".jpg") || infInput.endsWith(".png")) {
        escreverTela(infInput);
    } else {
        alert("Ensira uma imagem .png ou .jpg");
    }
    document.getElementById("filme").value = " ";
}

// transmitindo uma variável de uma função para a outra através dos parentêses
function escreverTela(infInput) {
    console.log (infInput);
    var elementoInfInput = "<img src=" + infInput + ">";
    var listaFilmes = document.getElementById("listaFilmes");
    listaFilmes.innerHTML += elementoInfInput;
}

//teste