/* Exercicio 01
    
    Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", 
    essa classe deve extender uma segunda classe chamada "Usuario".
    A classe usuário deve receber dois parâmetros no método construtor, 
    e-mail e senha, e anotá-los em propriedades da classe. A classe "Admin" 
    por sua vez não recebe parâmetros mas deve repassar os parâmetros de e-mail e 
    senha à classe pai e marcar uma propriedade "admin" como true na classe. Agora com 
    suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que 
    retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.
    
*/

class Usuario {
    constructor(email, senha) {
        this.email = email,
        this.senha = senha
    }
    isAdmin() {
        if(this.admin === true){
            return true
        }else {
            return false
        }
    }
    
}
class Admin extends Usuario {
    constructor(){
        super()
        this.admin = true
    }
}

const user = new Usuario('teste@gmail.com', '1234')
const adm = new Admin('teste@gmail.com', '123')

console.log(user.isAdmin()) // retorna false
console.log(adm.isAdmin())  // retorna true
