var myName = "Minnie" //string

var age = 92 //number

var height = 0.64 //number

null //objeto vazio, sem dados

undefined //dado que não foi definido

var isStudent = false //boolean

var person = {
    "name": "Minnie", 
    "age": 92
}                      //objeto (guardado entre "{}"); a chave é uma string e o valor (após os :) pode ser de qualquer tipo

var students = ["Mickey", "Minnie", "Donald", "Pateta"] //array (listas e conjuntos)

function sum(a, b) {
    return a + b
}                      //function (é um objeto que tem a capacidade de ser executado)

var age = 92
console.log(typeof age) //o typeof (identificador de tipo de dado) é number

console.log(typeof 92) //o typeof é number

var isStudent = true
console.log(typeof isStudent) //o typeof é boolean

var object = null
console.log(typeof object) //o typeof é object

function sum(){
    return 4 + 2
}
console.log(typeof sum) //o typeof é function