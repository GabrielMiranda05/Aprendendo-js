//Criando ARRAYS


const valores = [0, true, "teste", 324.43];

console.log("O valor do indice 3 é", valores[3]);

const cars = [];

cars[0] = `Fusca`;
cars[1] = `picape`;
cars[2] = `chevette`;

console.log(`Você quer comprar o ${cars[2]}?`)

//percorrendo arrays

const frutas = [`morango`, `Mamão`, `Pitawa`, `Acelora`, `Bergamota`];

for (let i = 0; i < frutas.length; i++) {
    console.log(`A fruta escolhida é ${frutas[i]}`);
}

const numeros = [2, 456, 87, 54, 645, 864, 4, 8,];
let retorno = numeros.toString();
console.log(typeof retorno);
