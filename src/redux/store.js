import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
//reducers 
import postsReducer from "./posts/reducer";
//saga 
import postSaga from "../saga/posts/saga"



const sagaMiddleware = createSagaMiddleware();


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    posts: postsReducer
});
const store = createStore(
    reducers, composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);
sagaMiddleware.run(postSaga)


export default store
