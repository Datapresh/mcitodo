import { useState } from 'react'
import './App.css'

function App() {
const  [todos, setTodos] = useState([
  'create a git repository',
  'created  a react vite project'
])
const [input , setInput] = useState("")

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
