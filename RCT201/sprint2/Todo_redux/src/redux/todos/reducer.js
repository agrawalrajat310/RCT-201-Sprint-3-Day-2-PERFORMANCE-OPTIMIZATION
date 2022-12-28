import { GET_TODOS_DELETE, GET_TODOS_EDIT, GET_TODOS_ERROR, GET_TODOS_LOADING, GET_TODOS_SUCCESS } from "./action";

const initState={
    loading: false,
    error: false,
    status:false,
    todos: []
}

export const Todosreducer=(state=initState, action)=>{

    switch (action.type){
        case GET_TODOS_LOADING: 
        return {
            loading: true,
            error: false
        };
        case GET_TODOS_SUCCESS : 
        return{
           loading: false,
           todos : action.payload
        };
        case GET_TODOS_ERROR : 
        return{
           loading: false,
           error: true,
           todos: ''
        };
        case GET_TODOS_DELETE: 
        return{
           loading: false,
           error: false,
           todos: ''
        };
        case GET_TODOS_EDIT: 
        return{
           loading: false,
           error: false,
           status:action.payload,
           todos: action.payload
        };
        default: 
        return state;
    }
}





