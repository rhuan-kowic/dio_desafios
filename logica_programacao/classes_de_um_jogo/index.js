class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  ataque() {
    let ataqueHeroi;
    switch (true) {
      case this.tipo === "mago":
        ataqueHeroi = "magia";
        break;
      case this.tipo === "guerreiro":
        ataqueHeroi = "espada";
        break;
      case this.tipo === "monge":
        ataqueHeroi = "artes marciais";
        break;
      case this.tipo === "ninja":
        ataqueHeroi = "shuriken";
        break;
    }
    console.log(`O ${this.tipo} atacou usando ${ataqueHeroi}.`);
  }
}

const prompt = require("prompt-sync")();

let continuar = "sim";

function criandoHeroi() {
  console.log("Criando herói...");

  const name = prompt("Digite o nome do herói: ");
  const idade = parseInt(prompt("Digite a idade do herói: "));
  const tipo = prompt(
    "Digite o tipo do herói(mago, guerreiro, monge ou ninja): "
  );

  const heroi = new Heroi(name, idade, tipo);
  console.log(`Herói ${heroi.nome} criado com sucesso.`);

  return heroi;
}

while (continuar.toLocaleLowerCase() === "sim") {
  const heroi = criandoHeroi();
  heroi.ataque();

  continuar = prompt("Deseja criar outro herói? (sim/não): ");
}

console.log("Programa encerrado.");
