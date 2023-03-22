const prompt = require('prompt-sync')({ sigint: true });


let pergunta = -1;
let lista = [];

let pgt = prompt("Você quer comprar ingresso? ")
let sim = String(pgt).toLowerCase();
let nao = String(pgt).toLowerCase();

if(nao==="nao"){
    console.log("okay, o serviço cinemático agradece!")
}else if(sim ==="sim"){
    do {
        console.log("Escolha a opção tarefa:");
        console.log("0 - Sair");
        console.log("1 - Comprar um ingresso!");
        console.log("2 - Visualizar lista de compras");
        let opção = prompt("Qual é a opção? ")
        let op = Number(opção);
        switch (op){
            case 0:
                console.log("Você está saindo do sistema, até logo!!")                
                break;
            case 1:
                ComprarIngresso()              
                break;                
            case 2:
                visualizar()
               break;        
            default:
                console.log("opção invalida, verifique sua opção. Por favor")
                break;
        }
    } while(op!==0);

function ComprarIngresso(){
    console.log("O seu ingresso vai ser 1-meia ou 2-inteiro?")
        let valor = prompt()
        let val = Number(valor);

        switch (val){
            case 1:
                ingressoMeia();
                break;
            case 2:
                ingressoInteiro();
             break;    

            default:
                console.log("opção de ingresso invalido")
                break;
        }}

function ingressoMeia(){
    let  pergunta = prompt("Quantidade de ingresso meia? ");
    lista.push(pergunta);
}
function ingressoInteiro(){
    let  pergunta = prompt("Quantidade de ingresso interio? ");
    lista.push(pergunta);
}
function visualizar(){
    console.log("-----------Valor final da Compra--------------");
    pergunta.forEach((pergunta,indice)=>{console.log(`${indice+1} - ${pergunta}`)})
}
   
}
