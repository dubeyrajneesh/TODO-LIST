import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodo } from '../../Redux/Action/Action';
import { toggleTodo } from '../../Redux/Action/Action';
import { updateTodo } from '../../Redux/Action/Action';
import { deleteTodo } from '../../Redux/Action/Action';
import './Display.css'

const Todo = ({todo}) => {

    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo.data);

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        setEditing(prevState => !prevState);

        dispatch(updateTodo(todo._id, text))
    }

    return (
        <div>

          
            <li className= "liCtrl" onClick= {()=>dispatch(toggleTodo(todo._id))} style={{ textDecoration: todo.done ? 'line-through' : '', color: todo.done ? '#bdc3c7' : ''   }}>
                <span  style={{ display: editing ? 'none' : '' }}   > {todo.data} </span>
                <form
                style={{ display: editing ? 'inline' : 'none' }}
                onSubmit={onFormSubmit}
            >
                <input
                    type="text"
                    value={text}
                    className="edit-input-ctrl"
                    onChange={(e) => setText(e.target.value)}
                
                />
            </form>
                <span onClick={() => dispatch(deleteTodo(todo._id))}><i className ="icon-ctrl fa-solid fa-trash"></i></span>
                <span   onClick={() => setEditing(prevState => !prevState)}><i className=" icon-ctrl fa-solid fa-pen-to-square"></i></span>
                
            </li>

        </div>
    )
}

export default Todo
