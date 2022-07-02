import React from 'react';
import { useState, useEffect } from 'react'
import { getFirestore } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { app } from './Firebase'
import { collection, getDocs, addDoc , doc, deleteDoc} from "firebase/firestore";






import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  const [value, loading, error] = useCollection(collection(getFirestore(app), 'todos'),);

  const addTodo = function (e) {
    e.preventDefault()
    addDoc(collection(getFirestore(app), "todos"), {todo:input}).then((d)=>{
      console.log("Document written with ID: ", d.id);
    }).catch((e)=>{
      console.error("Error adding document: ", e);
    })
    setInput("")

  }


  const deleteTodo = (id)=>{
    deleteDoc(doc(getFirestore(app), "todos", id)).then((d)=>{
      console.log("deleted")
    }).catch((e)=>console.log(e))
  
  }
  

  return (

    <div>
      <p>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value && (
          <>
            <div >
              <h1>MCI TODO APP</h1>
              <form>
                <br />

                <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit"
                  onClick={addTodo}
                >Add Todo</button>


              </form>



            </div>

            <span>
           
              {value.docs.map((doc) => (
                <React.Fragment key={doc.id}>
    
                <span>{doc.data()['todo']} <button>X</button></span> 
                <br/>
                </React.Fragment>
               
              ))}
            </span>

          </>
        )}
      </p>
    </div>




  )
}

export default App
