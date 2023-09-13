const car = {
    marca: "ford",
    cor: "Amarelo",
    modelo: "Fiesta",
    ano: 2000,
    km: 1500,
    velocidade: 500,
    combustivel: "Gasolina",
    escolheCor: function (cor) {
        return cor;
    },
    aceleracao: function (aceeracao){
        car.velocidade++;
        return car.velocidade;
    }
};
//Acessando atributos dos objetos

car.ano = 2002;
car.marca = "Wolksvagem";
car.cor = "rosa";
car.modelo = "Fusca";
car.km = 1300;
car.combustivel = "etanol";
console.log(`A marca do carro é ${car.marca}
A cor do carro é ${car.cor}
O ano do carro é ${car.ano}
O modelo do carro é ${car.modelo}
A quilometragem do carro é ${car.km}
O carro usa combustivel tipo ${car.combustivel}`)
let escolheCor = car.escolheCor("Rosa")
console.log("a cor escolhida é", escolheCor)


    console.log(`A velocidade atual do carro é ${car.aceleracao()}`)