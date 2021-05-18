import React, { useEffect, useState } from 'react'
import './App.css'
import { db, auth, provider } from "./firebase.js"
import { HashRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import { useStateValue } from './components/StateProvider.js'
import Login from './components/Login.js'
import Loading from './components/Loading.js'
import Home from "./components/Home.js"


function App() {
  const [{ user, todos }, dispatch] = useStateValue()
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: "SET_USER",
          user: user
        })
        
          db
          .collection("todos")
          .orderBy("timestamp", "desc")
          .onSnapshot(snapshot => {
            var todosArr = snapshot.docs.map(doc => ({
              id: doc.id,
              todo: doc.data().todo,
              user: doc.data().user,
              checked: !!doc.data().checked,
              timestamp: doc.data().timestamp
            }))
            var filteredArr = todosArr.filter(todo => todo.user == user.email)
            console.log(filteredArr)
            dispatch({
              type: "SET_TODOS",
              todos: filteredArr
            })
            }
          )
        history.push('/')
        setLoading(false)
      } else {
        console.log("not logged in");
        history.push('/login')
        setLoading(false)
      }
    })
  }, [])
  
  if(loading) return <Loading />

  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path='/login' component={Login} />
        </Switch>
    </div>
  )
}

export default App