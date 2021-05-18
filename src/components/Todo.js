import React from 'react'
import './Todo.css'
import moment from 'moment'
import { db } from '../firebase.js'
import { Checkbox } from 'material-ui'

function Todo({ todo, timestamp, todoId, checked }) {
 
  const deleteTodo = () => {
    db.collection("todos").doc(todoId).delete()
    .catch(err => alert(err.message))
  }
  
  const handleChange = () => {
    db.collection("todos").doc(todoId).set({
      checked: !checked
    }, { merge: true })
    .catch(err => alert(err.message))
  }
  
  return (
    <div className="todo">
      <Checkbox onChange={handleChange} checked={checked}/>
      <div>
        <span className={checked ? 'todo-text checked' : 'todo-text'}>{todo}</span>
        <span className="timestamp">{timestamp ? moment(timestamp.seconds*1000).fromNow() : 'just now'}</span>
      </div>
      
      <button onClick={deleteTodo} className="delete">X</button>
    </div>
  )
}

export default Todo