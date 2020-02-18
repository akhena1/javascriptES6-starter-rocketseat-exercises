"use strict";

// Exercicio 04
// 4.1 Desestruturação simples
//A partir do seguinte objeto:
var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
}; // Utilize a desestruturação para transformar as propriedades nome, 
// cidade e estado em variáveis, no fim deve ser possível fazer o seguinte:
//  console.log(nome); // Rocketseat 
//  console.log(cidade); // Rio do Sul 
//  console.log(estado); // SC

var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome); // Rocketseat 

console.log(cidade); // Rio do Sul 

console.log(estado); // SC
//4.2 Desestruturação em parâmetros
// Na seguinte função:

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
}));
