import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_TODOS } from './actions/actionTypes';
import { loadTodosError, loadTodosSuccess } from './actions/todo-actions'
import { LOAD_TODOS_URL } from './path';

export function* loadTodosHandler() {
    try {
        const response = yield call(fetch, LOAD_TODOS_URL, { x: 1 });
        if (response.status !== 200) {
            yield put(loadTodosError('An error occurred'))
        } else {
            let responseJSON = yield call((r) => r.json(), response);
            yield put(loadTodosSuccess(responseJSON));
        }
    } catch (e) {
        yield put(loadTodosError('An error occurred'))
    }
}

export default function* sagaHandler() {
    yield takeLatest(LOAD_TODOS, loadTodosHandler)
}