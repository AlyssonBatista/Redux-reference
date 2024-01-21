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

  
const COMPLETAR_AULA = 'COMPLETAR_AULA';
const COMPLETAR_CURSO = 'COMPLETAR_CURSO';
const RESETAR_CURSO =  'RESETAR_CURSO'


export function completaAula(payload){
    return {type: COMPLETAR_AULA,payload}
}

export function completaCurso(){
    return {type: COMPLETAR_CURSO}
}

export function resetaCurso(){
    return {type: RESETAR_CURSO}
}


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

export default classes;