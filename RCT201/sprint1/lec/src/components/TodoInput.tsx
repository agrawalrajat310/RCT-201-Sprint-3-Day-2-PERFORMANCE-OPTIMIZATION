import React, { SyntheticEvent, useState } from 'react'

type TodoInputProps={
    handleAdd: (text: string)=>void
}


const TodoInput = (props: TodoInputProps) => {
    const [text, setText]= useState<string>("");

    const handleChange:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
        setText(e.target.value)
    }
    const handleClick:React.MouseEventHandler<HTMLButtonElement>=()=>{
        props.handleAdd(text)
        setText("")
    }

   
  return (
    <div>
        <input type='text' placeholder='write something'
        value={text}
        onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>



    </div>
  )
}

export default TodoInput