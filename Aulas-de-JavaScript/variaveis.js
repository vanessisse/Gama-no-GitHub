// console.log("Olá, mundo!")

// var myName = "Minnie";

 
// A variável var é de escopo global (pode ser chamada a qualquel momento) ou escopo de função, pode ser atualizada ou reatribuída dentro deles e ser declarada sem inicializar.


// console.log(myName)

let languague = "JavaScript";

// A variável let é de escopo bloqueado (não pode ser acessada fora dele), pode apenas ser atualizada e também pode ser declarada sem inicializar.


const pattern = "ECMAScript";

// A variável const também é de escopo bloqueado, mas não pode ser atualizada nem reatribuída e deve ser inicializada no momento da declaração. 

// Escopo é um bloco de código iniciado com "{".

{
    var age = 92
}

console.log(age) 

/* 

var: o console imprime a variável (que está fora do escopo) na tela.
let: o console não imprime porque está fora do escopo.

*/

const myLastName = "Mouse"

/*

myLastName = "Mi"
Dá erro porque não pode ser atualizada.

*/

console.log(myLastName)