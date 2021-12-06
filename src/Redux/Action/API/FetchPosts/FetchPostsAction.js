import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from "./ActionTypes"
import { getPostList } from "../../Posts/PostsAction"
import axios from "axios"
export const fetchPostRequest = () => {
    return {
        type: FETCH_POST_REQUEST,
    }
}
export const fetchPostSucess = (post) => {
    return {
        type: FETCH_POST_SUCCESS,
        payload: post,
    }
}
export const fetchPostFailure = (error) => {
    return {
        type: FETCH_POST_FAILURE,
        payload: error,
    }
}
export const fetchPost = () => {
    return (dispatch) => {
        dispatch(fetchPostRequest())
        const url = 'https://jsonplaceholder.typicode.com/posts'
            async function getPost() {
            try {
                const response = await axios.get(url)
                dispatch(fetchPostSucess(response.data))
                dispatch(getPostList(response.data))
            }
            catch (err) {
                dispatch(fetchPostFailure(err))
            }
        }
            getPost()
    }
}