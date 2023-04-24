
import './App.css';
import { AddTodo } from './MyComponents/AddTodo';
import { Footer } from './MyComponents/Footer';
import Header  from './MyComponents/Header';
import { TodoItem } from './MyComponents/Todo';
import { Todos } from './MyComponents/Todos';
import React, {useState} from 'react';

function App() {
  let pagecontainer = {
    position: 'relative',
    minheight: '100vh',
  }
  const onDelete = (todo) => {
    console.log('I am on delete of', todo);
    settodos(todos.filter((e)=>{return e.sno!==todo.sno}))
  }
  const addTodo =(title, desc) => {
  
    // settodos()
    let sno=1;
    if(todos.length==0)
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
    console.log(title, desc,sno)
  }
  const [todos, settodos] = useState( [
    {sno: 1,
    title : "Go to the market",
  desc : "You need to go to the market1"
  },
  { sno: 2,
    title : "Go to the market",
    desc : "You need to go to the market2"
  },
  { sno: 3,
    title : "Go to the market",
    desc : "You need to go to the market3"},
  ]);
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
