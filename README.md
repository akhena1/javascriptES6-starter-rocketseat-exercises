# javascriptES6-starter-rocketseat-exercises
Exercicios referentes ao curso de Javacript ES6 da Rocketseat, Classes, métodos de arrays, arrow functions, desestruturação, rest &amp; spread, template literals e object short syntax


**A resolução dos exercícios esta no arquivo_main.js_ dentro de cada diretório**

### Preparando o ambiente do ES6 com o Yarn
execute o comando ```yarn init``` , aperte enter para todas as opções

Instalando o Babel

```yarn add @babel/cli, @babel/preset-env, @babel/core```

Crie um arquivo `.babelrc` e defina o preset

```{ "presets": ["@babel/preset-env"] }```

Crie um arquivo .gitignore e ignore a pasta node_modules

```node_modules/```

No arquivo `package.json` crie o script para executar o babel e monitorar as alterações

```{
  "name": "webpack",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "@babel/cli": "^7.8.4",
    "@babel/core": "^7.8.4",
    "@babel/preset-env": "^7.8.4"
  },
  "scripts": {
    "dev": "babel {nome do arquivo js} -o ./bundle.js -w"
  }
}
```


