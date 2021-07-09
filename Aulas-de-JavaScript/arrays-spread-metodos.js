//Acesso a informações em um array

const personagensDisney = ["Mickey", "Minnie", "Donald", "Pateta"]
console.log(personagensDisney[0]) //Mickey

//Operador spread (...)

const personagens = [...personagensDisney, "Snoopy"]
console.log(personagens)

//Métodos de iteração

/*

for (let i = 0; i < personagens.length; i++) {
    console.log(personagens[i])
}

*/

personagens.map(personagem => console.log(personagem)) //map

const numeros = [18, 27, 68, 72, 80]
const numerosImpares = numeros.filter(numero => numero%2 !=0)
console.log(numerosImpares) //filter

const numerosPares = numeros.filter(numero => numero%2 ==0)
console.log(numerosPares) //filter

const produtos = ["geladeira", "fogão", "mesa", "cama"]
const produtoCasa = produtos.find(produto => produto === "mesa")
console.log(produtoCasa) //find

const numerosOrdenados = [27, 85, 40, 18]
const numerosOrdemCrescente = numerosOrdenados.sort()
console.log(numerosOrdemCrescente)

const numerosOrdemDecrescente = numerosOrdenados.sort((a, b) => b-a)
console.log(numerosOrdemDecrescente) //sort

const numbers = [4, 2, 10, 12]
const soma = numbers.reduce((valorAnterior, valorAtual)=> {
    return valorAnterior + valorAtual
}, 4)
console.log(soma) //reduce (4 + 2 + 10 + 12 + 4)