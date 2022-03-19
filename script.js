function objCampeão(nome) {
  return (jogador = {
    nome: nome,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });
}

var jogadores = [];

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 5 + jogador.empates * 2 - jogador.derrotas;
  return pontos;
}

function adicionarCampeão() {
  const nome = document.getElementById("novoCampeão");
  if (document.getElementById("novoCampeão").value !== "") {
    jogadores.push(objCampeão(nome.value));
  } else {
    alert("Insira o nome do Campeão!");
  }
  nome.value = "";
  exibeJogadoresNaTela(jogadores);
}

//patrick.pontos = calculaPontos(patrick);
//flavia.pontos = calculaPontos(flavia);
//nicole.pontos = calculaPontos(nicole);

//var jogadores = [patrick, flavia, nicole];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr>";
    elemento += "<td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento +=
      "<td><button onClick='removerCampeão(" + i + ")'>Excluir</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function zerarPontuação(i) {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = 0;
  }
  exibeJogadoresNaTela(jogadores);
}

function removerCampeão(i) {
  var jogador = jogadores[i];
  jogadores.splice(i, 1);
  exibeJogadoresNaTela(jogadores);
}

// function adicionarImagem() {
//   var imagemInserida = document.getElementById("imagemCampeão").value;
//   if (imagemInserida.endsWith(".jpg")) {
//     exibeJogadoresNaTela(jogadores.imagem);
//   } else {
//     alert("Endereço de imagem inválido");
//   }
//   document.getElementById("filme").value = "";
// }