// const INCREMENTAR = 'INCREMENTAR';
// const DECREMENTAR = 'DECREMENTAR';
// const MULTI = 'MULTI';


// function incremnetar(){
//     return {type: INCREMENTAR}
// }

// function decrementar(){
//     return {type: DECREMENTAR}
// }

// function multi(payload){
//     return {type: MULTI, payload}
// }


// const initialStateMulti = 2
// const initialStateAdicao = 10
  

// const multiplicacao = immer.produce((state, action) => {
//     switch (action.type){
//         case MULTI:
//             state * action.payload;
//             break 
//     }
// },initialStateMulti) 


// const adicao = immer.produce((state, action) => {
//     switch (action.type){
//         case INCREMENTAR:
//             state + 1;
//             break;
//         case DECREMENTAR:
//             state - 1;
//             break;
//     }
// },initialStateAdicao) 

//  const reducer = Redux.combineReducers({adicao,multiplicacao})
//  const store = Redux.createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//  let state = store.getState();
//  console.log(state.adicao)


// store.dispatch(incremnetar())
// state = store.getState()
// console.log(state)

 
// store.dispatch(decrementar())
// state = store.getState()
// console.log(state)


// store.dispatch(multi(3))
// state = store.getState()
// console.log(state.multiplicacao)


// ================================================================================================================

const aluno = {
    nome: 'André Rafael',
    email: 'andre@origamid.com',
    diasRestantes: 120,
  };
  
const aulas = [
    {
      id: 1,
      nome: 'Design',
      completa: true,
    },
    {
      id: 2,
      nome: 'HTML',
      completa: false,
    },
    {
      id: 3,
      nome: 'CSS',
      completa: false,
    },
    {
      id: 4,
      nome: 'JavaScript',
      completa: false,
    },
  ];



const students = immer.produce((state,action) => {

},aluno)

const classes = immer.produce((state,action) => {

},aulas)

const reducer = Redux.combineReducers({students,classes})
const store =  Redux.createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

