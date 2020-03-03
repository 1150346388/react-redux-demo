import { combineReducers } from 'redux'
import { info, count } from './reducer'
import { todo } from './todo'

const reducer = combineReducers({ info, count, todo })
export default reducer