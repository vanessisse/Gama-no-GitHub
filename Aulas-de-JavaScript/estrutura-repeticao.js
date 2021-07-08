// Exemplo 1:

var colors = ["orange", "white", "blue", "black", "pink"];

/*

"i" é o índice, que está iniciando a contagem das strings em 0. Neste caso, são 4 índices, mas 5 informações.
"i++": percorre as strings da lista de 1 em 1.
"colors.lenght" é o tamanho da array colors.

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}                           


for (var i = 0; i < 5; i++) {
    console.log(colors[i]);
}                             // Imprime as 5 cores no console enquanto i for menor que 5.

*/

for (var i = 0; i <= 5; i++) {
    console.log(colors[i]);
}                             // Imprime as 5 cores no console enquanto i for menor que ou igual a 5.

// Exemplo 2:

for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// Exemplo 3:

var i = 0;

while (i < 10) {
    console.log(i);
    i++;
}                  // Enquanto i for <= 10, o console imprime o seu valor, incrementando mais 1.

// Exemplo 4:

var i = 1;

do {
    console.log(i);
    i++;
} while (i < 10); // "do" é executado primeiro