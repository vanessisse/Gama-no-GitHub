// Exercício 1:

/*

FizzBuzz

Divisível por 3: "Fizz"
Divisível por 5: "Buzz"
Divisível por 3 e 5: "FizzBuzz"
Se não for um número: "Não é um número"
Se não for divisível por 3 e por 5: entrada

Neste caso, a entrada corresponde ao número 7.

*/

let resultado = fizzBuzz(7);
console.log(resultado)

function fizzBuzz(entrada) {
    if (typeof entrada !== "number")
        return "Não é um número";
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return "FizzBuzz";
    if (entrada % 3 === 0)
        return "Fizz";
    if (entrada % 5 === 0)
        return "Buzz";

    return entrada;
}

// Exercício 2:

let newStr = "";

function tfString(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
        console.log(newStr);
}

let result = tfString("Olá, Gama Academy!") //Essa string aparece invertida.