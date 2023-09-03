import React, { useState } from 'react'
import './Form.css'
import { useDispatch } from 'react-redux'
import { addNewTodo } from '../../Redux/Action/Action'
const Form = () => {

  const dispatch = useDispatch();

  const [text, setText] = useState(" ");
  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewTodo(text));
    setText('');


  }

  const onInputChange = (e) => {
    setText(e.target.value);

  }
  return (
   

    <div className="input-group mb-2">
      <form  className="form-ctrl" onSubmit={onFormSubmit}>
     
      <input type="text" className="input-ctrl" placeholder="Enter new Todo..." value={text} onChange= {onInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />

      </form>
    </div>
  )
}

export default Form
