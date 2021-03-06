# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(x){
  var real = x ? true : false;
  return real;
}  

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy('');
isTruthy("");
isTruthy(0);
isTruthy(-0);
isTruthy(false);
isTruthy(NaN);
isTruthy(null);
isTruthy(undefined);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(1);
isTruthy(true);
isTruthy('teste');
isTruthy(arr = []);
isTruthy(obj = {});
isTruthy(-1);
isTruthy(1.2);
isTruthy(4);
isTruthy(44);
isTruthy(55);

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    placa: 'AAA 2018',
    ano: 2018,
    cor:'Azul',
    quantasPortas: 2,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(cor){
    carro.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function(){
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function(){
    return 'Esse carro é um ' + carro.obterMarca() + carro.obterModelo + ' .';
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.entrar = function(num){
    var vaga = carro.assentos - carro.quantidadePessoa;
    var plural = vaga === 1 ? 'pessoa' : 'pessoas';
    
    if(vaga === 0){
        return 'O carro já está lotado!';
    }
    if(vaga !== 0 && num > vaga){
        return 'Só cabem mais ' + vagas + plural + '!';
    }
    
    carro.quantidadePessoa += num;
    
    return 'Já temos ' + carro.quantidadePessoa + ' pessoas no carro!';
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); //'Azul'

// Mude a cor do carro para vermelho.
carro.mudarCor('Vermelhor');

// E agora, qual a cor do carro?
carro.obterCor(); //'Vermelho'

// Mude a cor do carro para verde musgo.
carro.mudarCor('Verde Musgo');

// E agora, qual a cor do carro?
carro.obterCor(); //'Verde Musgo'

// Qual a marca e modelo do carro?
carro.obterMarca(); //'Uno'

// Adicione 2 pessoas no carro.
carro.entrar(2); //'Já temos 2 pessoas no carro!'

// Adicione mais 4 pessoas no carro.
carro.entrar(4); //'Só cabem mais 3 pessoas!';

// Faça o carro encher.
carro.entrar(3); //'Já temos 5 pessoas no carro!'

// Tire 4 pessoas do carro.
carro.entrar(-4);

// Adicione 10 pessoas no carro.
carro.entrar(10);//'Só cabem mais 4 pessoas!';

// Quantas pessoas temos no carro?
carro.quantidadePessoa; //1
```
