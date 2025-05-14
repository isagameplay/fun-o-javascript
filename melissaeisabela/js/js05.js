// Função nomeada para mostrar o nome do produto

function Alunos(nome) {
    console.log("Produto Adicionado: " + nome); 
}

// Função nomeada para concatenar strings (NoRePar)
function NoRePar(parm01, parm02) {
    let resultado = parm01 + " " + parm02;
    return resultado;
}

function adicionarNome() {
    const selectedOption = listaDisponiveis.options[listaDisponiveis.selectedIndex];

    if (selectedOption) {
        
        Alunos(selectedOption.text);
        const novaOption = document.createElement('option');
        novaOption.value = selectedOption.value;
        novaOption.text = selectedOption.text;
        listaSelecionados.appendChild(novaOption);
        listaDisponiveis.removeChild(selectedOption);
    } else {
        alert("Escolha um produto da lista para adicionar!");
    }
}

function inicializarEventos() {
    const btnInserir = document.getElementById("btnInserir");
    btnInserir.addEventListener("click", function() {
        adicionarNome();
    });
}


window.onload = inicializarEventos;
