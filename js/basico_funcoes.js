
function calculadoraSoma(num5, num6){
    return (num5 + num6);
    
}
function calculadoraSub(num5, num6){
    return (num5 - num6);
    
}
function calculadoraMult(num5, num6){
    return (num5 * num6);
    
}
function calculadoraDiv(num5, num6){
    return (num5 / num6);
    
}


console.log("Qual operação você deseja? Digite 1-Soma, 2-Subtração, 3-Multiplicação, 4-Divisão");
dig = 1
console.log("Digite os numeros para executar a operação: ");
num5 = 100
num6 = 20
if(dig == 1){
    operacao = "Soma";
    resp = calculadoraSoma(num5, num6);
} else if(dig == 2){
    operacao = "Subtração";
    resp = calculadoraSub(num5, num6);
} else if(dig == 3){
    operacao = "Multiplicação";
    resp = calculadoraMult(num5, num6);
} else if(dig == 4){
    operacao = "Divisão";
    resp = calculadoraDiv(num5, num6);
}

console.log(`Os numeros digitados foram: ${num5}, ${num6}`)
console.log("A operação escolhida foi", operacao);
console.log(`A resposta da operação é ${resp}`);

