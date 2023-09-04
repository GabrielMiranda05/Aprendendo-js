console.log("Testando o js kkkkkkkka meudeus me tira daq pfv");

console.log(2+2);
console.log(2/9);
console.log(2*52);
console.log(2-562);
console.log(2-562);


//Concatenando valores do tipo string

console.log("senac"+" Largo")


//Tpos de dados 

console.log(typeof 3);
console.log(typeof 3+8);
console.log(typeof true);
console.log(typeof "Senac");

console.log('Alguma coisa em apostofro');
console.log("Alguma coisa em aspas duplas");
let variavel = 20;
console.log(`Alguma coisa em ${variavel}`);

function somaValor(){
    let valor;
    valor = 50;
    console.log(valor);
}
somaValor();


//Declarando variavel om let e const

//Declarando as variaveis
let email, telefone, cpf;


//inicializar as variaveis
email = 'sac@sp.senac.br'
telefone = 1137373900
cpf = "123.345.567-78"  //como colocou com aspas duplas, não é numero, é uma string


console.log("Seu e-mail é: " , email);
console.log(`Seu telefone é: ${telefone}`);
console.log(`Seu cpf é ${cpf}`);


//Const a variavel não muda

const pi = 3.1415926535897;
console.log(`Valor do pi ${pi}`);

console.log("Valor do pi ",pi);

const meuNome = "Senac largo treze";
console.log("Meu nome é: ", meuNome);

const primeiroNome = "Senac";
const segundoNome = "Largo treze";
console.log(`Primeiro nome é : ${primeiroNome} sobrenome é ${segundoNome}`)

let num1, num2, resp = 0;
num1 = 10;
num2 = 20;

resp = num1 + num2;
console.log("A soma: ", resp);
resp = num1 - num2;
console.log("A subtração: ", resp);
resp = num1 * num2;
console.log("A multiplicação: ", resp);
resp = num1 % num2;
console.log("O resto da divisão: ", resp);


//Expressões em javascript

let a = 3;
let x = (100 + 50)*a;

console.log(`O valor da expressão é ${x}`)
let z = 5;

//Incrementando o z
z++
let y = z;
console.log("Valor de y: ", y)


let w = 5;

w--;

let u = w;
console.log("O valor de w é: ", u);


//EXPONENCIAÇÃO 

let exp = 5;
let op = exp ** 2;
let mat = Math.pow(exp,2)
console.log(`Exponenciação ${op}`);
console.log(`Exponenciação usando Math ${mat}`)
//Vpce é gente fina demais mão falte mais 


//Operadores de atribuição Javascript

let r = 10;
let s = 10+r;
console.log(`Valor de s: ${s}`);

let m = 10-r;
console.log(`Valor de m: ${m}`);



//operadore logico
//Operador and

let b = false;
let q = true;

let v = b && q;

console.log(`Valor de v ${v}`)

//Operador ou
let i = b || q;
console.log(`Valor de i ${i}`)



const pessoa = {
    name: "Senac",
    lastname: "Largo Treze"
}

console.log(`O nome da pessoa ${pessoa.name}`)


const car = [
    "WV",
    "Ford",
    "Chevrolet",
];

console.log(`O carro escolhido ${car[2]}`);
