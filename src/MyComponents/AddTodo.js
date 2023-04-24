import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export const AddTodo = (props) => {
    let AddStyleSheet = {
        width: '80%'
    }
    const [title, setTitle] = useState('ddd')
    const [desc, setDesc] = useState('')
  const submit = (e) => {
    console.log(e)
    e.preventDefault();
    if(!title || !desc)
    {
        alert('title or desc cannot be blank')
    }
    props.addTodo(title,desc)

  }
  return (
    <div className='container my-3' style={AddStyleSheet}>
        <h3>Add Todo</h3>
            <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="Title">
        <h4>
        <Form.Text >Todo Title</Form.Text></h4>
        <Form.Control value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="title" />
      </Form.Group>
      {/* {title} */}

      <Form.Group className="mb-3" controlId="desc">
        <Form.Text>Desc</Form.Text>
        <Form.Control value={desc} onChange={(e)=>setDesc(e.target.value)}type="text" placeholder="description" />
      </Form.Group>
      <Button variant="primary" type="submit" className='btn btn-sm btn-success'>
        Submit
      </Button>
    </Form>


    </div>
  )
}
