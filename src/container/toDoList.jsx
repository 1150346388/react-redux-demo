import React from 'react'
import { connect } from 'react-redux'
import { select } from '../action/action'

function mapStateToProps(state) {
    console.log(state)
    return {
        todoList: state.todo.todoList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectOne: (id) => dispatch(select(id))
    }
}

const ToDoList = ({ todoList, selectOne }) => {
    return <div>
        {todoList.map((t, i) => <div key={i}>
            <input type="checkbox" name="" id="" checked={t.checked}
                onChange={() => selectOne(t.id)} />
            {t.name}
        </div>)}
    </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)