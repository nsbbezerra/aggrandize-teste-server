<p align="center">
    <a href="https://www.nkinfo.com.br/">
        <img src="https://www.nkinfo.com.br/img/logo.svg" height="120">
    </a>
     <h1 align="center">Ecommerce API - Teste de Desenvolvimento</h1>
</p>

# Primeiros Passos

## 1 - Variável de Ambiente:

Adicione a variável de ambiente `PORT` com a URL da API. Ex: `3001`.

## 2 - Testando a Aplicação:

Execute o seguinte comando para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Agora acesse `http://localhost:PORT/products` para ver a listagem dos produtos.

Foram aplicados os seguintes filtros aos produtos listados:

- Selecionado apenas os que possuem estoque maior ou igual a 10 peças
- Selecionado apenas items de vestuário, calçados e acessórios de moda
- Sapatos masculinos ou femininos são mostrados os que possuem desconto inferior ou igual a 15%

## 3 - Respostas do Servidor

- Respostas com sucesso `Status 200`. Ex:

```json
[
  {
    "id": 1,
    "title": "Product Title",
    "description": "Description of product",
    "price": 10.5,
    "discountPercentage": 6.5,
    "rating": 4.95,
    "stock": 100,
    "brand": "Brand of product",
    "category": "Category name",
    "thumbnail": "https://thumbnail.com/thumbnail.png",
    "images": [
      "https://thumbnail.com/thumbnail.png",
      "https://thumbnail.com/thumbnail.png",
      "https://thumbnail.com/thumbnail.png"
    ]
  }
]
```

- Respostas com erro `Status 400`. Ex:

```json
{
  "defaultMessage": "An error occurred while processing your request",
  "errorMessage": "Message of error"
}
```

## 4 - Build:

- Execute o comando para gerar a versão de producão:

```bash
npm run build
# ou
yarn build
```

- Agora execute o comando a seguir para iniciar o servidor de produção:

```bash
npm run start
# ou
yarn start
```

> Após este comando será criada uma pasta `/dist` no diretório raiz da aplicação.

## Bibliotecas e Frameworks utilizados:

- [Node JS + Typescript](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Cors](https://github.com/expressjs/cors)

> Algumas funcionalidades ou métodos não são compatíveis com versões anteriores à 18 do `NODE JS`.

## Autor

[<img src="https://avatars.githubusercontent.com/u/44842023?s=400&u=2a8f0844c691b0d32eb0d243edc8eebf226f5b5f&v=4" width=115><br><sub>Natanael Bezerra</sub>](https://github.com/nsbbezerra)
