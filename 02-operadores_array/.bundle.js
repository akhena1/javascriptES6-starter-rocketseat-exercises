"use strict";

// Exercicio 02
// A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):
var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; // 2.1 Utilizando o map Crie uma variável que contenha todas 
// idades dos usuários: [23, 15, 30]

var map = usuarios.map(function (user) {
  var idades = user.idade;
  return idades;
});
console.log(map); // 2.2 Utilizando o filter Crie uma variáveis que tenha apenas os 
// usuários que trabalham na Rocketseat e com mais de 18 anos: 
// [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

var filter = usuarios.filter(function (item) {
  if (item.empresa === 'Rocketseat' && item.idade >= 18) {
    return item;
  }
});
console.log(filter); // 2.3 Utilizando o find Crie uma variável que procura por 
// um usuário que trabalhe na empresa Google: undefined

var find = usuarios.find(function (item) {
  if (item.empresa === "Google") {
    return item;
  }
});
console.log(find); // 2.4 Unindo operações
// Multiplique a idade de todos usuários por dois e depois 
// realize um filtro nos usuários que possuem no máximo 50 anos

function mixMap() {
  usuarios.map(function (item) {
    return item.idade = item.idade * 2;
  });
}

mixMap();
var mixFilter = usuarios.filter(function (item) {
  return item.idade < 50;
});
console.log(mixFilter);
