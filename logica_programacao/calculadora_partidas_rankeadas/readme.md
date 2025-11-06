# Calculadora de Partidas Rankeadas (Desafio DIO)

Projeto de desafio da plataforma [Digital Innovation One (DIO)](https://www.dio.me/) focado em praticar lógica de programação em JavaScript, utilizando conceitos fundamentais como funções, laços de repetição e estruturas de decisão.

O objetivo é criar um script que solicita ao usuário a quantidade de vitórias e derrotas de um jogador, calcula o saldo, e determina o nível (ranque) do jogador com base **apenas na sua quantidade de vitórias**. O script continua executando até que o usuário decida parar.

## Tecnologias Utilizadas

  * **JavaScript:** Linguagem principal do projeto.
  * **Node.js:** Ambiente de execução para o JavaScript fora do navegador.
  * **`prompt-sync`:** Biblioteca (módulo npm) utilizada para capturar a entrada do usuário de forma síncrona no terminal.

## ✨ Funcionalidades

  * Solicita ao usuário a quantidade de vitórias e derrotas.
  * Calcula o saldo de vitórias (Vitórias - Derrotas).
  * Determina o nível (ranque) do jogador com base na quantidade de vitórias.
  * Exibe uma mensagem formatada com o saldo e o nível do herói.
  * Permite ao usuário calcular novamente em um loop `while` contínuo.

## Regras de Negócio (Nível do Herói)

O nível do herói é determinado estritamente pela sua **quantidade de vitórias**, seguindo as seguintes regras:

  * Se vitórias for menor ou igual a 10 = **Ferro**
  * Se vitórias for entre 11 e 20 = **Bronze**
  * Se vitórias for entre 21 e 50 = **Prata**
  * Se vitórias for entre 51 e 80 = **Ouro**
  * Se vitórias for entre 81 e 90 = **Diamante**
  * Se vitórias for entre 91 e 100= **Lendário**
  * Se vitórias for maior ou igual a 101 = **Imortal**

## Como Executar

1.  **Pré-requisito:** Ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
2.  Clone este repositório ou salve o arquivo `.js` (ex: `index.js`) em um diretório de sua preferência.
3.  Abra seu terminal e navegue até o diretório do projeto.
4.  Instale a dependência `prompt-sync`:
    ```bash
    npm install prompt-sync
    ```
5.  Execute o script:
    ```bash
    node index.js
    ```

## 💻 Exemplo de Saída

```bash
Digite a quantidade de vitorias: 85
Digite a quantidade de derrotas: 30
O Herói tem de saldo de 55 está no nível de Diamante
Deseja calcular outras partidas ranqueadas? (sim/não): sim
Digite a quantidade de vitorias: 110
Digite a quantidade de derrotas: 5
O Herói tem de saldo de 105 está no nível de Imortal
Deseja calcular outras partidas ranqueadas? (sim/não): nao
```

## Estrutura do Código

O código é dividido em duas funções principais e um loop de execução:

  * `saldoDeRankeadas(vitorias, derrotas)`: Função pura que recebe vitórias e derrotas e retorna o saldo (vitórias - derrotas).
  * `processandoRanque(vitorias)`: Função que recebe **apenas** as vitórias e utiliza uma estrutura `switch (true)` para retornar o ranque correspondente.
  * **Loop `while`:** Controla o fluxo principal do programa, capturando os dados do usuário e chamando as funções, permitindo que o usuário faça múltiplos cálculos.

-----
