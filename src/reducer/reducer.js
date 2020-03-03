export function info(state = {
    text: 'Hello zjy',
    name: 'zjy',
}, action) {
    switch (action.type) {
        case 'onChange':
            return {
                ...state,
                name: action.payload,
                text: `Hello ${action.payload}`
            }
        default:
            return state
    }
}
export const count = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                count: state.count + 1
            }
        case 'minus':
            return {
                ...state,
                count: state.count - 1
            }
        case 'toZero':
            return {
                ...state,
                count: 0
            }
        default:
            return state
    }
}