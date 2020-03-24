import { combineReducers } from 'redux'
import todoReducer from './todo-reducer'

const createReducer = combineReducers({todoReducer});

export default createReducer;