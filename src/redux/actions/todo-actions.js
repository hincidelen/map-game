import {
    LOAD_TODOS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_ERROR,
    ADD_ITEM,
    DELETE_ITEM
} from './actionTypes'

export function loadTodos() {
    return {
        type: LOAD_TODOS
    }
}

export function loadTodosSuccess(todoList) {
    return {
        type: LOAD_TODOS_SUCCESS,
        todoList
    }
}

export function loadTodosError(error) {
    return {
        type: LOAD_TODOS_ERROR,
        error
    }
}

export function addItem(item) {
    return {
        type: ADD_ITEM,
        item
    }
}

export function deleteItem(index) {
    return {
        type: DELETE_ITEM,
        index
    }
}
