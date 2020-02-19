## Instalando o Webpack

com o yarn:

```yarn add webpack webpack-cli -D```

```yarn add webpack-dev-server -D```


### Configurando o webpack

Crie um arquivo `webpack.config.js` com os seguintes parâmetros

```
module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
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
    "dev": "webpack-dev-server --mode=development"
  }
```



