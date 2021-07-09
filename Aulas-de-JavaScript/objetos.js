const pessoa = {
    nome: "Minnie",
    idade: 92,
    cidade: "Walt Disney World"
}

//Notação de ponto

/*
console.log(pessoa.nome)
*/

//Notação de colchetes

/*
console.log(pessoa["idade"])
*/

//Desestruturação de objetos

const {nome, idade, cidade} = pessoa
console.log(nome)
console.log(idade)
console.log(cidade)

//Array de objetos

const filmes = [
    {
        id: 1,
        titulo: "Toy Story",
        descricao: "É um filme de animação americano lançado em 1995.",
        duracao: 81
    },
    {
        id: 2,
        titulo: "Toy Story 2",
        descricao: "É um filme de animação americano lançado em 1999.",
        duracao: 95
    },
    {
        id: 3,
        titulo: "Toy Story 3",
        descricao: "É um filme de animação americano lançado em 2010.",
        duracao: 108
    },
    {
        id: 4,
        titulo: "Toy Story 4",
        descricao: "É um filme de animação americano lançado em 2019.",
        duracao: 100
    },
]

const [{id, titulo, descricao, duracao}] = filmes
filmes.map(filme => console.log(filme.descricao))