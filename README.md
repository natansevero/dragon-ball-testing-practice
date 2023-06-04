# Dragon ball testing practice

Esta é uma aplicação para você poder invocar Shenlong.

Há o [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) e [Cypress](https://www.cypress.io/) instalados.

Casos de testes escritos:

* Se houver todas as esferas, conseguir invocar o Shenlong (e2e)
* Se não houver todas as esfera, tem que mostrar mensagem que não pode invocar o Shenlong (e2e)
* Se encontrar uma esfera, tem que mostrar que ela foi encontrada (e2e)
* Seleção das opções de filtros (integration test)

Instalar as dependências e rodar:

```
  yarn 
  yarn start
```

Para rodar os testes com testing library
```
  yarn test
```

Para rodar os testes com Cypress
```
  yarn cy:run
```

[Repositório original do teste](https://github.com/lalizita/dragon-ball-manager-challenge)