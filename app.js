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

function sotearAmigo() {
  if (amigos.length == 0) {
    alert('Adicione seus amigos antes de sortear!');
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  document.getElementById('resultado').innerHTML = amigoSorteado;
}