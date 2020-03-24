import { fromJS } from 'immutable';

import {
    LOAD_TODOS,
    ADD_ITEM,
    DELETE_ITEM,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_ERROR
} from '../actions/actionTypes'

const initialState = fromJS({
    todoList: []
});

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_TODOS:
            return state.merge({
                loading: true,
                error: undefined
            });
        case LOAD_TODOS_SUCCESS:
            return state.merge({
                loading: false,
                todoList: action.todoList
            });
        case LOAD_TODOS_ERROR:
            return state.merge({
                loading: false,
                error: action.error
            });
        case ADD_ITEM:
            let todoList = state.get('todoList').slice();
            action.item.id = todoList.length + 1;

            todoList.push(action.item);
            return state.merge({
                todoList
            });
        case DELETE_ITEM:
            return state.merge({
                todoList: state.get('todoList').filter((item, index) => {
                    return index !== action.index
                })
            });
        default:
            return state;
    }
}

export default todoReducer;