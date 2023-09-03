import {createStore , combineReducers , applyMiddleware} from 'redux' ;

import {todosReducers} from './Reducer/todosReducers'
import { tabReducer } from './Reducer/tabReducer';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = [thunk];

const reducers = combineReducers({
    todos : todosReducers ,
    currentTab: tabReducer
})

export  const store = createStore(
    reducers ,
    composeWithDevTools(applyMiddleware(...middleware))

)

