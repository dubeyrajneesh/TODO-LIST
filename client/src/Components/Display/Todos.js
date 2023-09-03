import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodo } from '../../Redux/Action/Action';
import { deleteTodo } from '../../Redux/Action/Action';
import Todo from './Todo';
import Tabs from './Tabs';
const TOGGLE_TAB = 'TOGGLE_TAB';
const ALL_TODOS = 'All Todos';
const ACTIVE_TODOS = 'Active Todos';
const DONE_TODOS = 'Done Todos';
const TABS = [ALL_TODOS, ACTIVE_TODOS, DONE_TODOS];



const Todos = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodo());
    })

    const todos = useSelector(state => state.todos);
    const currentTab = useSelector(state => state.currentTab);

    const getTodos = () => {
        if (currentTab === ALL_TODOS) {
            return todos;
        } else if (currentTab === ACTIVE_TODOS) {
            return todos.filter(todo => !todo.done)
        } else if (currentTab === DONE_TODOS) {
            return todos.filter(todo => todo.done)
        }
    }

    const removeDoneTodos = () => {
        todos.forEach(({ done, _id }) => {
            if (done) {
                dispatch(deleteTodo(_id));
            }
        })
    }





    return (
        <div>
            <article>

                <div>
                    <Tabs currentTab={currentTab} />

                    {
                        todos.some(todo => todo.done) ? (

                            <button onClick={removeDoneTodos} type="button" className=" button clear btn btn-secondary">Remove Done Todos</button>
                        ) : null
                    }
                </div>

                <ul>
                    {
                        getTodos().map(todo => (
                            <Todo
                                key={todo._id}
                                todo={todo}
                            />
                        )
                        )
                    }



                </ul>
            </article>
        </div>
    )
}

export default Todos
