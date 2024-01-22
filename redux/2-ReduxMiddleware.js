// ============================= MIDDLEWARE

const FETCH_STARTED = 'FETCH_STARTED';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

const started = () => {
    return {type: FETCH_STARTED}
}

const sucess = (payload) => {
    return {type: FETCH_SUCCESS,payload}
}

const error = (payload) => {
    return {type: FETCH_ERROR,payload}
}

const initialState = {
    loading: false,
    data: null,
    error: null,
};

function reducer(state = initialState, action){
    switch (action.type){
        case FETCH_STARTED:
            return {...state,loading: true};
        case FETCH_SUCCESS:
            return {data: action.payload, loading: false,error: null };
        case FETCH_ERROR:
            return {data: null, loading: false, error: action.payload};
        default:
            return state;
    }
}


 
const thunk = (store) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(store.dispatch, store.getState);
    } 
    return next(action);
};
  

  const { compose, applyMiddleware } = Redux;

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(thunk));
  
  const store = Redux.createStore(reducer, enhancer);
  




// Action Creator, retorna uma função ao invés de um objeto
function fetchUrl(url) {
    return async (dispatch) => {
      try {
        dispatch({ type: 'FETCH_STARTED' });
        const data = await fetch(url).then((r) => r.json());
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    };
  }
  
  store.dispatch(fetchUrl('https://pokeapi.co/api/v2/pokemon/'));