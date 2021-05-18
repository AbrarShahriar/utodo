import React, { useReducer, createContext, useContext } from 'react'

const StateContext = createContext()

function StateProvider({ reducer, initState, children }) {
  return (
    <StateContext.Provider value={useReducer(reducer, initState)}>
      {children}
    </StateContext.Provider>
  )
}

export default StateProvider
export const useStateValue = () => useContext(StateContext)