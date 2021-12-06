import { GET_POST_LIST, EDIT_POST, DELETE_POST, ADD_NEW_POST } from "./ActionTypes";
export const getPostList = (postList)=>{
    return({
        type:GET_POST_LIST,
        payload:postList
    })
}
export const editPost = (post)=>{
    return({
        type:EDIT_POST,
        payload:post,
    })
}
export const deletePost = (post)=>{
    return({
        type:DELETE_POST,
        payload:post
    })
}
export const addPost = (post)=>{
    return({
        type:ADD_NEW_POST,
        payload:post
    })
}