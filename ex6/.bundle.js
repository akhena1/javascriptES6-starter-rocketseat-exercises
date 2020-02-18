"use strict";

// Exercicio 06
//Converta o seguinte trecho de código utilizando Template Literals:
var usuario = 'Diego';
var idade = 23;
console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
/* >>>>> */

console.log("O usuario ".concat(usuario, " possui ").concat(idade, " anos"));
