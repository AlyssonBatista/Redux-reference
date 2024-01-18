```git clone git@github.com:AlyssonBatista/Redux-reference.git```

# Redux-reference
````Store````
> A store da acesso ao estado global da aplicação e ela recebe como argumento o reducer que retorna o estado atual da store.
````javascript
function reducer() {
  return {
    nome: 'André',
    id: 199,
  };
}

const store = Redux.createStore(reducer);

````
