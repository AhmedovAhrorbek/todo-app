import React, {useState, useContext,useEffect, useRef} from 'react'
import { DataContext  as fromContext} from '../../context/DataProvider';
import '../../index.css'
export default function FormInput(){
  const{todos, setTodos} = useContext(fromContext);
  const [todoName , setTodoName] = useState('');
  const todoInput = useRef('');


  const addTodo = (evt)=>{
    evt.preventDefault();
    setTodos([...todos, {name:todoName, complete: false}]);
    localStorage.setItem("todoStore", JSON.stringify([...todos, {
      name: todoName,
      complete: false
    }]))
    setTodoName('');
     todoInput.current.focus();

  }


   useEffect(() =>{
     todoInput.current.focus();
   },[])
  return (
    <form autoComplete='off' onSubmit={addTodo}>
            <input className='input-main'  type="text" name='todos' id='todos' required placeholder='What needs to be done?' ref={todoInput}
            value={todoName} onChange={(evt)=>setTodoName(evt.target.value.toLowerCase())}/>
            <button type='submit'>Create</button>
    </form>
  )
}


