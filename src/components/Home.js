import React, { useState, useEffect } from 'react'
import './Home.css'
import { useStateValue } from "./StateProvider.js"
import { Button, TextField, Avatar } from "material-ui"
import Todo from './Todo.js'
import { db, auth } from "../firebase.js"
import firebase from "firebase"

function Home() {
  const [{ user, todos }, dispatch] = useStateValue()
  
  const [todo, setTodo] = useState("")
    
  const addTodo = () => {
    db.collection("todos").add({
      user: user.email,
      todo: todo,
      checked: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  }
  
  const logout = () => {
    auth.signOut()
  }
  
  return (
    <div className="home">
      <header>
        {user && (user.photoURL ? 
          (<Avatar src={user.photoURL} />) : (<Avatar>{user.displayName[0]}</Avatar>)
        )}
        <Button onClick={logout} variant="outlined" color="secondary">Logout</Button>
      </header>
      
      <div className="body-input">
      
        <TextField 
          value={todo}
          label="Todo"
          onChange={e => setTodo(e.target.value)}
        />
      
        <Button disabled={!todo} color="primary" variant="contained" onClick={addTodo}>Add</Button>
      
      </div>
    
      <div className="todos">
        {todos.map(todo => (
          <Todo 
            todo={todo.todo}
            timestamp={todo.timestamp}
            key={todo.id}
            checked={todo.checked}
            todoId={todo.id}
          />
         ))
        }
      </div>
    </div>
  )
}

export default Home