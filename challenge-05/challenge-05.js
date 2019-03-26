/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = [1, 2, '3', true, NaN];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(arr){
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retornaArray(myarray)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaIndice(arr, indice){
  return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array2 = ['1', 2, true, null, {nome: 'Bryan'}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
retornaIndice(array2, 0); //'1'
retornaIndice(array2, 1); //2
retornaIndice(array2, 2); //true
retornaIndice(array2, 3); //null
retornaIndice(array2, 4); //{nome: 'Bryan'}

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
function book(nome){
  var livros = {
    'Segredo do Ninja JavaScript': {
      quantidadePaginas: 448,
      autor: 'John Resig & Bear Bibeault',
      editora: 'Novatec'
    },
    'Introdução ao HTML': {
      quantidadePaginas: 222,
      autor: 'Bruce Lawson & Remy Sharp',
      editora: 'Alta Books'
    },
    'Smashing CSS': {
      quantidadePaginas: 283,
      autor: 'Erick A. Meyer',
      editora: 'Bookman'
    }
  };

  if(!nome){
    return livros;
  }

  return livros[nome];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
'O livro Introdução ao HTML tem ' + book('Introdução ao HTML').quantidadePaginas + ' páginas!'

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
'O autor do livro Introdução ao HTML é ' +  book('Introdução ao HTML').autor + ' .'

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
'O livro Introdução ao HTML foi publicado pela editora ' + book('Introdução ao HTML').editora +' .'
