import React, { Fragment } from 'react';
import { useState, useContext} from 'react';
import { DataContext as footerContext } from '../../context/DataProvider'
export default function Footer() {
  const [checkAll, setCheckAll] = useState(false);
  const {todos, setTodos} = useContext(footerContext);

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.complete = !checkAll
    })
    setTodos(newTodos);
    setCheckAll(!checkAll);
  }

  const  deleteTodo =()=>{
    const newTodos = todos.filter(todo=>{
      return todo.complete === false
    })
    setTodos(newTodos)
    setCheckAll(false)
  }


 
  return (
  <Fragment>
         {
            todos.length === 0 ? <h2>Congratulations! Nothings To Do</h2> 
            :<div className='row'>
                <label htmlFor="all"  >
                 
                <input type="checkbox" name='all' id='all' onChange={handleCheckAll} checked={checkAll}/>
                All
                </label>
                <p>You have {todos.filter(todo=> todo.complete=== false).length} to do </p>
                <button id='delete' onClick={deleteTodo}>Delete</button>
              </div>
          }
         
  </Fragment>
  )
}
