
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

import store from "./store/configStore.js"

import { incrementar,reduzirTempo,modificaEmail } from "./store/reducers/students.js";
import { completaAula,completaCurso,resetaCurso } from "./store/reducers/classes.js";

const render = () => {
  const {students,classes} = store.getState();

  const aulaElemento = document.getElementById('aulas');
  const alunoElemento = document.getElementById('aluno');

  alunoElemento.innerText = `${students.nome} : ${students.email} : ${students.diasRestantes}`;
  aulaElemento.innerText = classes.filter((a) => a.completa === true).length;
}

render();
store.subscribe(render);

let state =store.getState()
console.log(`Estado inicial:`,state);


store.dispatch(incrementar())
state = store.getState()
console.log('Atual estado 1',state);

store.dispatch(reduzirTempo())
state = store.getState()
console.log('Atual estado 2',state);

store.dispatch(modificaEmail('alysssonbatista241@gmail.com'))
state = store.getState()
console.log('Atual estado 3',state);

store.dispatch(completaAula(0))
state = store.getState()
console.log('Atual estado 4',state);

store.dispatch(completaCurso())
state = store.getState()
console.log('Atual estado 5',state);

store.dispatch(resetaCurso())
state = store.getState()
console.log('Atual estado 6',state);
