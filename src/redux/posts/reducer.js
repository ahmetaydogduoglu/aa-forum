import {
    GET_POSTS_SUCCESS,
    GET_POSTS_UNSUCCESS,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_UNSUCCESS
} from "./ActionType"


const initialState = {
    posts: [],
    comments: [],
    errorMessage: null
}


function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.posts
            }
        case GET_POSTS_UNSUCCESS:
            return {
                ...state,
                errorMessage: action.message
            }
        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.comments
            }
        case GET_COMMENTS_UNSUCCESS:
            return {
                ...state,
                errorMessage: action.message
            }
        default:
            return state
    }
}

export default posts