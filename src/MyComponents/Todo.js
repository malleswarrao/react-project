import React from 'react'
import { Todos } from './Todos'
import "./AddTodo.css";


export const TodoItem = ({todos, onDelete}) => {
  return (
    <div >
        {/* {todo.sno} */}
        {todos.map((todosp) => { 
            return (
            <div className='modalTodoContainer my-5' key={todosp.sno}>
            <div   className='my-2'>
                <h4>{todosp.title}</h4>
                <p className='my-1'>{todosp.desc}</p>
                <div>
                <button className='btn btn-sm btn-danger' onClick={()=>onDelete(todosp)}>Delete</button>
                </div>
                       <hr/>
            </div>
            </div>
               ) })}
    </div>
  )
}
