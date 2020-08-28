import { put, fork, select, all, take, call, takeEvery } from 'redux-saga/effects'
import * as Actions from 'actions'

const API_ROOT = 'https://meme-api.herokuapp.com/gimme/'

const callApi = (endpoint) => {
      const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint
    console.log(fullUrl)
    return fetch(fullUrl)
    .then(res => {
        if(!res.ok){
            Promise.reject("something went wrong")
            .then(err => ({error:"something went wrong"}))
        }
        return res.json();

    })
}

const fetchPosts = count => callApi(`memes/${count}`);
function* fetchData(){
    try{
        const data = yield call(fetchPosts, 10)
        yield put({type: Actions.ADD_POSTS, payload: data})
    } catch (e){
        yield put({type:Actions.ADD_POSTS_FAILED, action: e})
    }
}

function* watchPosts(){
    yield takeEvery(Actions.GET_POSTS, fetchData)
}

export default function* rootSaga() {
    yield all([
        watchPosts()
    ]);
}
