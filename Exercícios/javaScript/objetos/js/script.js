// object literals 

const objetopessoa = {
    nome: "João",
    idade: 30,

}

console.log(objetopessoa.nome)
console.log(objetopessoa)
console.log(typeof objetopessoa) 

// removendo uma propriedade fo objeto
const pessoa = {
    nome: "Morgano",
    idade: 40,
};

console.log(pessoa)
//removendo

delete pessoa.idade;
console.log(pessoa);

// adicionando propriedade ao objeto
const funcionario = {
    nome: "Luis",
    matricula: 34567,
};

console.log(funcionario)

funcionario.sobrenome =  "Santana";

console.log(funcionario)

// Método assign
const objeto1 = {
    nome :"Juliano",
    idade: 30,
}
const objeto2 = {
    altura :1.80,
    genero: "Masculino",
}

const objtoDestino = {}
Object.assign(objtoDestino, objeto1, objeto2)
console.log(objtoDestino)

// Método keys 
const objeto = {
    nome: "Fernanda",
    idade: 29,
};

const chaves = Object.keys(objeto);
console.log(chaves);

// exibindo os valores no array 
const valores = Object.values(objeto)
console.log(valores);

// mutação de atribuição 
const hospede = {
    nome: "Alberto",

};

hospede.nome = "Junior";
console.log(hospede.nome)

// mutação de inserção

hospede.sobrenome = "Lima";
console.log(hospede);

// mutação operador de adição 
const hospedeNovo = {
    nome: "Meiriane",
    idade: 29,
};

hospedeNovo.idade += 2;
console.log(hospedeNovo.idade)

//mutação deletar

delete hospedeNovo.nome;
console.log(hospedeNovo)

