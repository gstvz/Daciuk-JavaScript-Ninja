/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = ["g", "s", "t", "v", "z"];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornarArray(arr) {
    return arr;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retornarArray(array)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornarElementoDoIndice(arr, indice) {
    return arr[indice];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayComTiposDiferentes = [1, "a", 2, "b", 3];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
retornarElementoDoIndice(arrayComTiposDiferentes, 0);
retornarElementoDoIndice(arrayComTiposDiferentes, 1);
retornarElementoDoIndice(arrayComTiposDiferentes, 2);
retornarElementoDoIndice(arrayComTiposDiferentes, 3);
retornarElementoDoIndice(arrayComTiposDiferentes, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(titulo) {
    var livros = {
        "Mindset": { 
            quantidadePaginas: 150,
            autor: "Carol Dweck",
            editora: "Objetiva"
        },
        "O Mundo de Sofia": {
            quantidadePaginas: 600,
            autor: "Jostein Gaarder",
            editora: "Seguinte"
        },
        "Videogame e violência": {
            quantidadePaginas: 500,
            autor: "Salah Khaled Jr.",
            editora: "Civilização Brasileira"
        }
    };

    return livros[titulo] ? livros[titulo] : livros;
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro Mindset tem ${book("Mindset").quantidadePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`A autora do livro Mindset é ${book("Mindset").autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro Mindset foi publicado pela editora ${book("Mindset").editora}.`);