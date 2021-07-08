// Exemplo 1:

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read() {
        return `Estou lendo ${this.title}`
    }
}

let book = new Book("Bíblia Sagrada", "Deus", 1600);
let otherBook = new Book("Cristianismo Puro e Simples", "C. S. Lewis", 288);

console.log(book, otherBook)

// Exemplo 2 — herança:

/*

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read() {
        return `Estou lendo ${this.title}`
    }
}

class fictBook extends Book {
    constructor(title, author, pages, fiction) {
        super(title, author, pages);
        this.fiction = fiction;
    }
}

let fictbook = new fictBook("O Senhor dos Anéis", "J. R. R. Tolkien", 1211, "Fantasia")

console.log(fictbook);

*/

// Exemplo 3 — encapsulamento: 

class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

let person = new Person("Minnie Mouse");
person.name = "Minnie"
console.log(person.name)