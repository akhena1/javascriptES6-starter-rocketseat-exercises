# Instalando plugin Babel para utilizar async/await

```yarn add @babel/plugin-transform-async-to-generator -D```

```yarn add @babel/polyfill -D```

### Adicione o plugin ao `.babelrc`

```
{
    "presets": ["@babel/preset-env"],
    "plugins": [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-async-to-generator"
    ]
}
```
### Altere o arquivo de configuração do webpack

```
module.exports = {
    entry: ['@babel/polyfill' , './src/main.js'],
}
```

