import React, { useState } from 'react'
import { auth, provider } from '../firebase.js'
import { useStateValue } from './StateProvider.js'
import { useHistory } from 'react-router-dom'
import './Login.css'
import Loading from './Loading.js'
import { Button } from 'material-ui'

function Login() {
  const [{ user }, dispatch] = useStateValue()
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  
  const login = () => {
    setLoading(true)
    auth
      .signInWithRedirect(provider)
      .then((result) => {
        var userFromG = result.user
        dispatch({
          type: "SET_USER",
          user: userFromG
        })
        history.push('/')
        setLoading(false)
      }).catch((error) => {
        console.log(error)
        setLoading(false)
      });
  }
  
  if (loading) return <Loading />
  
  return (
    <div className="login">
      <Button color="secondary" onClick={login} variant="contained">Login</Button>
    </div>
  )
}

export default Login