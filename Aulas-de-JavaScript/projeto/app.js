const books = require("./database")
console.log(books)

//Pegar input do usuário.

const readLine = require("readline-sync")

const entradaInicial = readLine.question("Deseja buscar uma obra? S/N ")

/*

Se a resposta for S, mostra as categorias disponíveis ao usuário e pergunta a ele qual escolhe.
Se a resposta for N, mostra todas as obras em ordem crescente de acordo com o número de páginas.

*/

if (entradaInicial.toLocaleUpperCase() === "S") {
    console.log("Estas são as categorias disponíveis: ")
    console.log("Teologia", "/Economia", "/Politica")

    const entradaCategoria = readLine.question("Qual categoria você escolhe? ")

    const retorno = books.filter(book => book.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const orderBooks = books.sort((a, b) => a.paginas - b.paginas)
    console.log("Estas são todas as obras disponíveis: ")
    console.table(orderBooks)
}