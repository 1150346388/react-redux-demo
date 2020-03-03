export function changeInput(payload) {
    return {
        type: 'onChange',
        payload
    }
}
export function add() {
    return {
        type: 'add'
    }
}
export function minus() {
    return {
        type: 'minus'
    }
}
export function toZero() {
    return {
        type: 'toZero'
    }
}
export function incrementAsync() {
    return {
        type: 'incrementAsync'
    }
}
export function addTodoItem(payload) {
    return {
        type: 'addTodo',
        payload
    }
}
export function select(payload) {
    return {
        type: 'select',
        payload
    }
}