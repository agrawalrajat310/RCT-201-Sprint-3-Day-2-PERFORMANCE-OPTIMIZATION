import {legacy_createStore as createStore, applyMiddleware,compose ,combineReducers} from 'redux'

import thunk from 'redux-thunk'
import { Todosreducer } from './todos/reducer';

const rootReducer = combineReducers({
  todos: Todosreducer
})


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

  
const enhancer = composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  );

export const store =createStore(rootReducer,enhancer)

//ceateStore(reducer, initState, store-enhancer)

