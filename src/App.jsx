import { useState, useEffect } from 'react'
import {db} from './Firebase'

import './App.css'

function App() {
const  [todos, setTodos] = useState([])
const [input , setInput] = useState("")


useEffect(()=>{
  db.collection('todos').onSnapshot(
    snapshot=>{
      setTodos(snapshot.docs.map(doc=>doc.data))
    }
  )
},[input])


const addTodo = function(e) {
  e.preventDefault()
  setTodos([...todos, input])
  setInput("")
  
}

  return (
    <div >
      <h1>MCI TODO APP</h1>
      <form>
        <br/>
  
      <input  type='text' value={input} onChange={(e)=>setInput(e.target.value)} />
      <button  type="submit"
      onClick={addTodo}
      >Add Todo</button>


      </form>

      <ul>
       
       {todos.map(function(todo) {
          return(
            <li>{todo}</li>
          )
       })}


      </ul>
    </div>
  )
}

export default App
