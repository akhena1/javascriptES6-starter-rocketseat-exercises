## Instalando o Webpack

com o yarn:

```yarn add webpack webpack-cli -D```


### Configurando o webpack

Crie um arquivo `webpack.config.js` com os seguintes parâmetros

```
module.exports = {
    entry: '<nome do arquivo js principal>',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    }
};
```

Para instalar o babel loader:

```yarn add babel-loader -D```

O script em `package.json` para executar nosso projeto:

```
"scripts": {
    "dev": "webpack --mode=development -w"
  }
```



