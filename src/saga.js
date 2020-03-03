import { put, delay, all, takeEvery, call, take, fork, takeLatest } from 'redux-saga/effects'
function* hello() {
    console.log('hello saga')
}

function ajax() {
    return new Promise((resolve, reject) => setTimeout(() => resolve(99), 3000))
}
function* incrementAsync() {
    const data = yield call(ajax)
    console.log(data)
    yield put({ type: 'add' })
}

function* watchIncrementAsync() {
    // yield takeEvery('incrementAsync', incrementAsync)
    // yield takeLatest('incrementAsync', incrementAsync)
    while (1) {
        yield take('incrementAsync')
        // yield call(incrementAsync)
        yield fork(incrementAsync)
    }
}
export default function* () {
    yield all([
        hello(),
        watchIncrementAsync()
    ])
}