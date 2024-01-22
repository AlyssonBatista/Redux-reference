// ============================ CURRYING
function somar(a,b,c){
    return a + b + c;
}

let soma = somar(1,2,3);
console.log(soma)

function somar2(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}

let soma2 = somar2(4)(5)(5)
console.log(soma2)

// ============================= MIDDLEWARE

const INCREMENTAR = 'INCREMENTAR';
const REDUZIR = 'REDUZIR';

const incrementar = () => {
    return {type: INCREMENTAR}
}

const reduzir = () => {
    return {type: REDUZIR}
}


function reducer(state = 0, action){
    switch (action.type){
        case INCREMENTAR:
            return state + 1;
        case REDUZIR:
            return state - 1;
        default:
            return state;
    }
}

const logger = (store) =>  (next) =>  (action) => {
    console.group(action.type)
        console.log('ACTION',action)
        console.log('Prev_state')
        console.log('testando 3')
    console.groupEnd()
    return next(action)
}
    


const middleware = Redux.applyMiddleware(logger)

const store = Redux.createStore(reducer, middleware)

let state = store.getState()


store.dispatch(incrementar())
state = store.getState()
console.log(state)

store.dispatch(reduzir())
state = store.getState()
console.log(state)