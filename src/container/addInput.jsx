import React from 'react'
import { connect } from 'react-redux'
import { addTodoItem } from '../action/action'

const AddInput = ({ addTodo }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        addTodo(input.value)
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
          </button>
      </form>
    </div>
  )
}
// state/props
function mapStateToProps(state) {
  console.log(state)
  return {
    ...state
  }
}

// handler
function mapDispatchToProps(dispatch) {
  return {
    addTodo: (v) => dispatch(addTodoItem(v))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddInput);
