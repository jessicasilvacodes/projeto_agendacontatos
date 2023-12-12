
const form = document.getElementById('form-contato');

const nome = [];
const telefone = [];

let contatos = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNome = document.getElementById('form-nome');
    const inputTelefone = document.getElementById('form-telefone');

    if (nome.includes(inputNome.value)) {
        alert(`O contato "${inputNome.value}" já foi inserido na lista.`)
    } else {
        nome.push(inputNome.value);
        telefone.push(parseFloat(inputTelefone.value));
    
        let contato = '<tr>';
        contato += `<td>${inputNome.value}</td>`;
        contato += `<td>${inputTelefone.value}</td>`;
        contato += '</tr>';
    
        contatos += contato;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = contatos;

}
