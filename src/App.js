
import { useEffect } from 'react';
import './App.css';
import { AddTodo } from './MyComponents/AddTodo';
import { Footer } from './MyComponents/Footer';
import Header  from './MyComponents/Header';
import { TodoItem } from './MyComponents/Todo';
import { Todos } from './MyComponents/Todos';
import React, {useState} from 'react';


function App() {
  // localStorage.clear();
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
    console.log(localStorage.getItem("todos"),'null_')
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  let pagecontainer = {
    position: 'relative',
    minheight: '100vh',
  }
  const onDelete = (todo) => {
    // console.log('I am on delete of', todo);
    console.log
    settodos(todos.filter((e)=>{return e!==todo}))
    // localStorage.setItem('todos',JSON.stringify(todos))
    // console.log(localStorage["todos"], 'hi_delete')
  }
  const addTodo =(title, desc) => {
  
    // settodos()
    let sno=1;
    if(todos.length===0)
    {
      sno=1;
    }
    else{
    sno = todos[todos.length-1].sno+1
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    settodos([...todos,myTodo])

    
    // console.log(localStorage["todos"], 'hi')
    // console.alert(title, desc,sno)
  }
  const [todos, settodos] = useState(initTodo); 
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))      
  }, [todos])
  return (
    <div style={pagecontainer}>
     <Header title='My Todos List' searchbar={false}/>
     {/* <TodoItem todos={todos}/> */}
     <AddTodo addTodo={addTodo}/>
     <Todos todos={todos} onDelete={onDelete}/>

     <Footer/>
    </div>
  );
}

export default App;
