let amigos = [];

function adicionarNomeAmigo() {
  let nomeAmigo = document.getElementById('amigo').value;
  if (nomeAmigo == '') {
    alert('Por favor, insira um nome.');
  } else {
    amigos.push(nomeAmigo);
    document.getElementById('amigo').value = '';
  }
}