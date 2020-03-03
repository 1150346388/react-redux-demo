let nextTodoId = 0
export const todo = (state = {
  todoList: []
}, action) => {
  switch (action.type) {
    case 'addTodo':
      console.log(action, state.todoList)
      return {
        ...state,
        todoList: [...(state.todoList), { name: action.payload, checked: false, id: nextTodoId++ }]
      }
    case 'select':
      return {
        ...state,
        todoList: state.todoList.map(t => Object.assign({ ...t }, { checked: t.id === action.payload ? !t.checked : t.checked }))
      }
    default:
      return state
  }
}