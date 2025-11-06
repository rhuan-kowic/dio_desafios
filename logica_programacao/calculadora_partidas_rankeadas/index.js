const prompt = require("prompt-sync")();
let continua = "sim";

function saldoDeRankeadas(vitorias, derrotas) {
  return vitorias - derrotas;
}

function processandoRanque(vitorias) {
  let ranque;
  switch (true) {
    case vitorias <= 10:
      ranque = "Ferro";
      break;
    case vitorias >= 11 && vitorias <= 20:
      ranque = "Bronze";
      break;
    case vitorias >= 21 && vitorias <= 50:
      ranque = "Prata";
      break;
    case vitorias >= 51 && vitorias <= 80:
      ranque = "Ouro";
      break;
    case vitorias >= 81 && vitorias <= 90:
      ranque = "Diamante";
      break;
    case vitorias >= 91 && vitorias <= 100:
      ranque = "Lendário";
      break;
    case vitorias >= 101:
      ranque = "Imortal";
      break;
    default:
      ranque = "Ranque indefinido";
  }
  return ranque;
}

while (continua.toLowerCase() === "sim") {
  const vitorias = parseInt(prompt("Digite a quantidade de vitorias: "));
  const derrotas = parseInt(prompt("Digite a quantidade de derrotas: "));
  const saldoVitorias = saldoDeRankeadas(vitorias, derrotas);
  const ranque = processandoRanque(vitorias);
  console.log(
    `O Herói tem de saldo de ${saldoVitorias} está no nível de ${ranque}`
  );

  continua = prompt("Deseja calcular outras partidas ranqueadas? (sim/não): ");
}
