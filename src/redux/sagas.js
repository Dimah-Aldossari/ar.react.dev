
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPosts() {
    try {
        const response = yield call(axios.get, 'https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies');
        yield put({ type: 'SET_POSTS', payload: response.data });
    } catch (error) {
        console.error(error);
    }
}

function* watchFetchPosts() {
    yield takeEvery('FETCH_POSTS', fetchPosts);
}

export default function* rootSaga() {
    yield watchFetchPosts();
}
