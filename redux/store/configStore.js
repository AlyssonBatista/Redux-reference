import students from './reducers/students.js';
import classes from './reducers/classes.js';

const reducer = Redux.combineReducers({students,classes})
const store =  Redux.createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;