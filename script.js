

function enviarwhats(event){

const nome = document.getElementById('nome').value;
const mensagem = document.getElementById('mensagem');
const telefone = '5511998803853'

const texto = `Ola! Me chamo ${nome}, ${mensagem}`
const msgFormatada = encodeURIComponent(texto)

const url = `https://whatsa.me/${telefone}?text=${msgFormatada}`

window.open(url, '_blank')


}