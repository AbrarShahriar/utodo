export const initState = {
  user: null,
  todos: []
}

export const reducer = (state = initState, action) => {
  console.log(action)
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
    case "SET_TODOS": 
      return {
        ...state,
        todos: action.todos
      }
    
    default:
      return state
  }
}