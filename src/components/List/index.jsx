import React, {useContext} from 'react'
import ListItem from '../ListItem';
import { DataContext as listContext} from '../../context/DataProvider';

export default function List() {
  const {todos, setTodos} = useContext(listContext);
  const switchComplete = id =>{
    const newTodos = [...todos]
    newTodos.forEach((todo, index)=>{
      if(index===id){
        todo.complete = !todo.complete
      }
    })
    setTodos(newTodos);

  }
     const handleEditTodos = (editvalue, id)=>{
        const newTodos = [...todos]
        newTodos.forEach((todo, index)=>{
          if(index===id){
            todo.name = editvalue
          }
        })
        setTodos(newTodos)
     } 
  // console.log(localStorage.getItem("todoStore"),"todos");
  // const Data = JSON.parse(localStorage.getItem("todoStore"))
  return (
    <ul>
         {
          todos.map((todo, index)=>(
            <ListItem todo={todo} key={index} id={index}
             checkComplete={switchComplete} handleEditTodos={handleEditTodos}/>
          ))
         }
    </ul>
  )
}
