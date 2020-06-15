import {
    GET_POSTS_SUCCESS,
    GET_POSTS_UNSUCCESS,
    GET_POSTS,
    GET_COMMENTS,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_UNSUCCESS
} from "./ActionType"

export const getPost = () => {
    return ({
        type: GET_POSTS,
    })
}


export const getAllComments = () => {
    return ({
        type: GET_COMMENTS,
    })
}


export const getPostSuccess = (posts) => {
    return ({
        type: GET_POSTS_SUCCESS,
        posts
    })
}

export const getCommentsUnsuccess = (message) => ({
    type: GET_POSTS_UNSUCCESS,
    message
})

export const getCommentsSuccess = (posts) => {
    return ({
        type: GET_COMMENTS_SUCCESS,
        posts
    })
}

export const getPostUnsuccess = (message) => ({
    type: GET_COMMENTS_UNSUCCESS,
    message
})