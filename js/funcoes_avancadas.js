
//função como uma expressão
const area = function (base, altura) {
    return base * altura;
}

let x = area(10, 20);
console.log("A área é", x);


const v = () => {
    console.log("Ola mundo!!!")
}
v();
//Construindo ARROW FUNCTION com parametros
const raiz = (q) => {
    return q * q;
}
//executando ARROW FUNCTION
let r = raiz(4);
console.log(`A raiz quadrada do numero 4 é ${r}`);
let seno = Math.sin(30);
console.log(`O cosseno de 30 é ${seno}`);
let quad = Math.sqrt(4);
console.log(`A raiz quadrada do numero 4 é ${quad}`);
let aleatorio = Math.random() * 10;
console.log(`O numero aleatorio é ${aleatorio}`)


