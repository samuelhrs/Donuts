const button = document.querySelector('button');

const addloading = () =>{
    button.innerHTML = <img src="loading.png" class="loading"></img>
}

const removeloading = () =>{
    button.innerHTML = 'Enviar';
}

const enviarPedidos = (event) => {
    event.preventDefault();
    addloading();
    const nome = document.getElementById("nome").value;
    const contato = document.getElementById("contato").value;
    const saborMassa = document.getElementById("massa").value;
    const saborRecheio = document.getElementById("recheio").value;
    const quantidade = document.getElementById("quantidade").value;
    const data = document.getElementById("data").value;
    const observacoes = document.getElementById("observacoes").value;

    fetch('https://api.sheetmonkey.io/form/as4Nnb2Lv1vywWmLYCUjHL', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome, contato, saborMassa, saborRecheio, quantidade, data, observacoes
        })
    }).then(() => removeloading());
}

document.querySelector('form').addEventListener('submit', enviarPedidos);