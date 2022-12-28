export const GET_TODOS_LOADING = "GET_TODOS_LOADING";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_ERROR = "GET_TODOS_ERROR";
export const GET_TODOS_DELETE = "GET_TODOS_DELETE";
export const GET_TODOS_EDIT = "GET_TODOS_EDIT";



export const getTodosLoading= () =>({
        type: GET_TODOS_LOADING,
})
export const getTodosSuccess = (payload) =>({
type: GET_TODOS_SUCCESS,
payload,
})
export const getTodosError = () =>({
type: GET_TODOS_ERROR,

})
export const getDeleteTodos=()=>({
        type: GET_TODOS_DELETE,
})
export const getEditTodos=()=>({
        type: GET_TODOS_EDIT,
})


export const getTodosData=()=>(dispatch)=>{
        dispatch(getTodosLoading())
        fetch(`http://localhost:8080/todos`)
        .then((res)=>res.json())
        .then((res)=>dispatch(getTodosSuccess(res)))
        .catch((res)=> dispatch(getTodosError(res)))
}
export const postTodosData=(payload)=>(dispatch)=>{
dispatch(getTodosLoading())
    fetch('http://localhost:8080/todos', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers:{"content-Type" : "application/json"}
    }).then((res)=>res.json())
    .then((res)=>dispatch(getTodosData())
    ).catch((er)=>dispatch(getTodosError())
    )    
}
export const deleteTodosData=(id)=>(dispatch)=>{
        dispatch(getTodosLoading())
            fetch(`http://localhost:8080/todos/${id}`, {
                method: 'DELETE',
                headers:{"content-Type" : "application/json"}
            }).then((res)=>res.json())
            .then((res)=>dispatch(getTodosData())
            ).catch((er)=>dispatch(getTodosError())
            ) 
        }
export const editTodosData=(props)=>(dispatch)=>{
        dispatch(getTodosLoading())
        let {it, text}= props
            fetch(`http://localhost:8080/todos/${it.id}`, {
                method: 'PATCH',
                body: JSON.stringify(text),
                headers:{"content-Type" : "application/json"}
            }).then((res)=>res.json())
            .then((res)=>dispatch(getTodosData())
            )
            .catch((er)=>console.log(er)
             )

        }

