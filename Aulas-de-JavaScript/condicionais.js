// If/Else if/Else

var num = 1;
num = 5;

if (num === 1) {
    console.log("num é igual a 1")
} else if (num === 2) {
    console.log("num é igual a 2")
} else {
    console.log("num é 5")
}

// Switch/Case

var mes = "janeiro"

switch (mes) {
    case "abril":
        console.log("Mês 4");
        break;
    
    case "julho":
        console.log("Mês 7");
        break;

    case "maio":
        console.log("Mês 5");
        break;

    /*
    case "janeiro":
        console.log("Mês 1");
        break;
    */

    default:
        console.log("Nenhum dos casos acima foi atendido")
}