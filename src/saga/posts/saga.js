import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { getPostSuccess, getPostUnsuccess } from "../../redux/posts/actions"
import { fetchAllPosts,fetchAllComments } from "../../API/posts"
import { GET_POSTS } from "../../redux/posts/ActionType"

function* getPost() {
    try {
        const response = yield call(fetchAllPosts);
        yield put(getPostSuccess(response))
    } catch (error) {
        console.log("ERROR:", error);
        yield put(getPostUnsuccess(error))
    }
}

function* watchGetPost() {
    yield takeEvery(GET_POSTS, getPost);
}

function* getAllComments(){
    try {
        const response = yield call(fetchAllComments);
        yield put()
    } catch (error) {
        
    }
} 


export default function* rootSaga() {
    yield all([fork(watchGetPost)])
}