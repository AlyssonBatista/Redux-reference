const aluno = {
    nome: 'André Rafael',
    email: 'andre@origamid.com',
    diasRestantes: 120,
  };


export function incrementar(){
return {type: INCREMENTAR_TEMPO }
}

export function reduzirTempo(){
return {type: REDUZIR_TEMPO}
}

export function modificaEmail(payload){
return {type: MODIFICAR_EMAIL,payload}
}


const INCREMENTAR_TEMPO = 'INCREMENTAR_TEMPO';
const REDUZIR_TEMPO = 'REDUZIR_TEMPO';
const MODIFICAR_EMAIL = 'MODIFICAR_EMAIL';


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

  export default students;