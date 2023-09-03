import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000' ;
const ADDNEW_TODO ='ADDNEW_TODO' ;
const GETALL_TODO = 'GETALL_TODO' ;
const TOGGLE_TODO = 'TOGGLE_TODO';
const UPDATE_TODO= 'UPDATE_TODO' ;
const DELETE_TODO='DELETE_TODO' ;
const TOGGLE_TAB = 'TOGGLE_TAB';
 
 export const addNewTodo =(data)=> async(dispatch)=>{
    try{

       const res=  await axios.post(`${API_BASE_URL}/todos` , {data})
       dispatch({
        type: ADDNEW_TODO,
        payload: res.data 
       })

    }
    catch(error){
        console.log("Some error while adding new todo")
    }
}

export const getAllTodo =()=>async(dispatch)=>{
    try{

      const res=  await axios.get(`${API_BASE_URL}/todos`)

      dispatch({
        type:GETALL_TODO ,
        payload: res.data
      })

    }
    catch(error){
        console.log("Some error while getting all todo")
    }
}

export const toggleTodo=(id)=>async(dispatch)=>{

  const res = await axios.get(`${API_BASE_URL}/todos/${id}`)

  dispatch({
    type: TOGGLE_TODO,
    payload: res.data
  })

}

export const updateTodo = (id , data)=>async(dispatch)=>{
  const res = await axios.put(`${API_BASE_URL}/todos/${id}` , {data})
  dispatch({
    type: UPDATE_TODO,
    payload: res.data
  })


}

export const deleteTodo = (id)=>async(dispatch)=>{
  const res = await axios.delete(`${API_BASE_URL}/todos/${id}`)
  dispatch({
    type: DELETE_TODO,
    payload: res.data
  })


}

export const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: TOGGLE_TAB, selected: tab })
}