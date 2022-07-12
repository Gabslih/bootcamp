function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "maria",
    idade: 30
};

const pessoa2 = {
    nome: "João",
    idade: 21
};

const pessoa3 = {
    nome: "Lilian",
    idade: 27
};

const animal = {
    nome: "Lyon",
    idade: 1,
    raca: "piquinês"
};

console.log(calculaIdade.call(pessoa2, 30))