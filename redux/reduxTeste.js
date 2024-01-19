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

// Usando o Redux (pode usar Immer ou Não).
// Crie uma store contendo os estados iniciais abaixo
// Crie as seguintes ações:
// aluno/INCREMENTAR_TEMPO, adiciona 1 dia de acesso
// aluno/REDUZIR_TEMPO, reduz 1 dia de acesso
// aluno/MODIFICAR_EMAIL(email), modifica o email do usuário
// aulas/COMPLETAR_AULA(id), completa a aula com base no ID passado
// aulas/COMPLETAR_CURSO, completa todas as aulas
// aulas/RESETAR_CURSO, reseta todas as aulas completas
// Crie constantes e action creators para as ações.
// Crie um reducer para aluno e um para aulas.
// Renderize na tela o nome, email, tempo restante e o total de aulas completas
// Configure a DevTools

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

// constantes ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const INCREMENTAR_TEMPO = 'INCREMENTAR_TEMPO';
const REDUZIR_TEMPO = 'REDUZIR_TEMPO';
const MODIFICAR_EMAIL = 'MODIFICAR_EMAIL';
const COMPLETAR_AULA = 'COMPLETAR_AULA';
const COMPLETAR_CURSO = 'COMPLETAR_CURSO';
const RESETAR_CURSO =  'RESETAR_CURSO'


function incrementar(){
  return {type: INCREMENTAR_TEMPO }
}

function reduzirTempo(){
  return {type: REDUZIR_TEMPO}
}

function modificaEmail(payload){
  return {type: MODIFICAR_EMAIL,payload}
}

function completaAula(payload){
  return {type: COMPLETAR_AULA,payload}
}

function completaCurso(){
  return {type: COMPLETAR_CURSO}
}

function resetaCurso(){
  return {type: RESETAR_CURSO}
}


const students = immer.produce((state,action) => {
  switch (action.type){
    case INCREMENTAR_TEMPO:
      state.diasRestantes = state.diasRestantes + 1;
      break;
    case REDUZIR_TEMPO:
      state.diasRestantes = state.diasRestantes - 1;
      break;
    case MODIFICAR_EMAIL:
      state.email = action.payload;
      break;
  }
},aluno)

const classes = immer.produce((state,action) => {
  switch (action.type){
    case COMPLETAR_AULA:
      state[action.payload].completa = true;
      break;
    case COMPLETAR_CURSO:
      state.forEach(element => {
        element.completa = true
      });
      break;
    case RESETAR_CURSO:
      state.forEach(element => {
        element.completa = false
      });
      break;
  }
},aulas)

const reducer = Redux.combineReducers({students,classes})
const store =  Redux.createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let state = store.getState()
console.log(state.classes)


store.dispatch(resetaCurso())
state = store.getState()
console.log('estado atual',state)

 