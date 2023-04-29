import React from 'react'
import { TodoItem } from './Todo'
import "./AddTodo.css";


export const Todos = (props) => {
  console.log(props.todos)
  return (
    <div className='container'>
        <h3 className='text-center my-3'>Todos List</h3>
        {/* <h4>{props.todos}</h4> */}
        {props.todos.length===0? <h3>no todo's to display</h3> :
        <TodoItem todos={props.todos}  onDelete={props.onDelete}/>
        }
        {/* <h4>{props.todos[0]}</h4> */}
    </div>
  )
}
