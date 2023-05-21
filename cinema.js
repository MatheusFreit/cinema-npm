const prompt = require('prompt-sync')({ sigint: true });

let lista = [];
let valorMeia = 6.50;
let valorInteiro = 13.00;

let pgt = prompt("Você quer comprar ingresso? ");
let sim = pgt.toLowerCase();
let nao = pgt.toLowerCase();

if (nao === "nao") {
  console.log("Okay, o serviço cinemático agradece!");
} else if (sim === "sim") {
  let op = -1;
  do {
    console.log("Escolha a opção:");
    console.log("0 - Sair");
    console.log("1 - Comprar um ingresso");
    console.log("2 - Visualizar lista de compras");
    console.log("");
    let opcao = prompt("Qual é a opção? ");
    op = Number(opcao);
    switch (op) {
      case 0:
        console.log("Você está saindo do sistema. Até logo!");
        break;
      case 1:
        comprarIngresso();
        break;
      case 2:
        visualizar();
        break;
      default:
        console.log("Opção inválida. Por favor, verifique sua opção.");
        break;
    }
  } while (op !== 0);

  function comprarIngresso() {
    console.log("O seu ingresso será 1 - meia ou 2 - inteiro?");
    console.log("");
    console.log("O ingresso meia está por R$ " + valorMeia.toFixed(2));
    console.log("O ingresso inteiro está por R$ " + valorInteiro.toFixed(2));
    let valor = prompt("Qual será o ingresso? ");
    let quantidade = prompt("Quantidade de ingressos? ");
    if (valor === "1") {
      lista.push(`${quantidade} ingresso(s) meia`);
    } else if (valor === "2") {
      lista.push(`${quantidade} ingresso(s) inteiro`);
    } else {
      console.log("Opção de ingresso inválida");
    }
    console.log("");
  }

  function visualizar() {
    console.log("-----------Valor final da Compra--------------");
    console.log("");
    lista.forEach((ingresso, indice) => {
      console.log(`${indice + 1} - ${ingresso}`);
    });
    calcularValorTotal();
  }

  function calcularValorTotal() {
    let valorTotal = 0;
    for (let i = 0; i < lista.length; i++) {
      let quantidade = Number(lista[i].match(/\d+/)[0]);
      let tipoIngresso = lista[i].includes("meia") ? valorMeia : valorInteiro;
      valorTotal += quantidade * tipoIngresso;
    }
    console.log("Valor total da compra: R$", valorTotal.toFixed(2));
  }

  console.log("");
}
