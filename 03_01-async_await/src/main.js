// Exercicio 01 Modulo 3

//Transforme os seguintes trechos de código utilizando async/await:


const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
async function umPorSegundo() {
    await delay().then(console.log('1s'))
    await delay().then(console.log('2s'))
    await delay().then(console.log('3s'))
}
umPorSegundo();

import axios from 'axios'

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123')

class Github {
    static async getRepositories(repo) {
        await axios.get(`https://api.github.com/repos/${repo}`).then(response => { console.log(response.data); }).catch(err => {
            console.log('Repositório não existe');
        })
    }
}
Github.getRepositories('akhena1/Instituto_Frigga_Backend');
Github.getRepositories('rocketseat/dslkvmskv');


const buscaUsuario = async user => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response)
    } catch (error) {
        console.warn(error)
    }
} 

buscaUsuario('diego3g')