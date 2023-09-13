
const calculadora = {
    num1: 63,
    num2: 50,
    soma: (n1, n2) => {
        this.num1 = n1;
        this.num2 = n2;
        return this.num1 + this.num2;
    },
    sub: (n1, n2) => {
        this.num1 = n1;
        this.num2 = n2;
        return this.num1 - this.num2;
    },
    mult: (n1, n2) => {
        this.num1 = n1;
        this.num2 = n2;
        return this.num1 * this.num2;
    },
    div: (n1, n2) => {
        this.num1 = n1;
        this.num2 = n2;
        if (this.num2 === 0) {
            return false
        } else {
            return this.num1 / this.num2;
        }
    }
}
n1 = 64214
n2 = 0
console.log("Digite o numero de qual operação você deseja?");
console.log("1 - Soma");
console.log("2 - Subtração");
console.log("3 - Multiplicação");
console.log("4 - Divisão");
dig = 4
if (dig == 1) {
    operacao = "Soma";
    resp = calculadora.soma(n1, n2);
} else if (dig == 2) {
    operacao = "Subtração";
    resp = calculadora.sub(n1, n2);
} else if (dig == 3) {
    operacao = "Multiplicação";
    resp = calculadora.mult(n1, n2);
} else if (dig == 4) {
    operacao = "Divisão";
    resp = calculadora.div(n1, n2);
}

console.log(`Os numeros digitados foram: ${calculadora.num1} e ${calculadora.num2}`)
console.log("A operação escolhida foi", operacao);
console.log(`A resposta da operação é ${resp}`);





