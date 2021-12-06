import { FETCH_USER_REQUEST,FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./ActionTypes"
import axios from "axios"
import { getUserList } from "../../User/userAction"
export const fetchUserRequest = ()=>{
    return{
        type:FETCH_USER_REQUEST,
    }
}
export const fetchUserSucess = (user)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:user,
    }
}
export const fetchUserFailure = (error)=>{
    return{
        type:FETCH_USER_FAILURE,
        payload:error,
    }
}
export const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        const url = 'https://jsonplaceholder.typicode.com/users'
            async function getUser() {
            try {
                const response = await axios.get(url)
                dispatch(fetchUserSucess(response.data))
                dispatch(getUserList(response.data))
            }
            catch (err) {
                dispatch(fetchUserFailure(err))
            }
        }
            getUser()
    }
}