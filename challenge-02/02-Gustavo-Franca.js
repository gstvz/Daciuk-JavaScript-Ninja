// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y) {
    return x + y;
};

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var valor = soma(5, 10) + 5;

// Qual o valor atualizado dessa variável?
valor;
// 20

// Declare uma nova variável, sem valor.
var variavelSemValor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adicionarValor() {
    variavelSemValor = 5;
    return "O valor da variável agora é " + variavelSemValor;
};

// Invoque a função criada acima.
adicionarValor();

// Qual o retorno da função? (Use comentários de bloco).
/* O valor da variável agora é 5 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function argumentos(x, y, z) {
    if(!x|| !y || !z) {
        return "Preencha todos os valores corretamente!";
    } else {
        return x * y * z + 2;
    }
};

// Invoque a função criada acima, passando só dois números como argumento.
argumentos(1, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
argumentos(1, 2, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function argumentosDois(x, y, z) {
    if(x && y && z) {
        return (x + y) / z;
    } else if (x && y) {
        return x + y;
    } else if (x) {
        return x;
    } else {
        return false;
    };
    return null;
};

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
argumentosDois(2, 2, 2); // 2
argumentosDois(2, 2); // 4
argumentosDois(2); // 2
argumentosDois(); // false