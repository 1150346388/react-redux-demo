import * as React from 'react'
import AddInput from './addInput'
import ToDoList from './toDoList'

class ToDO extends React.Component {
    render() {
        return <div>
            <AddInput />
            <ToDoList />
        </div>
    }
}
export default ToDO