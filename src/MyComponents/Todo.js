import React from 'react'
import { Todos } from './Todos'

export const TodoItem = ({todos, onDelete}) => {
  return (
    <div >
        {/* {todo.sno} */}
        {todos.map((todosp) => { 
            return (
            <div key={todosp.sno}  className='my-2'>
                <h4>{todosp.title}</h4>
                <p className='my-1'>{todosp.desc}</p>
                <div>
                <button className='btn btn-sm btn-danger' onClick={()=>onDelete(todosp)}>Delete</button>
                </div>
                       <hr/>
            </div>
               ) })}
    </div>
  )
}
