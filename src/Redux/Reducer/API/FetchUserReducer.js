import { FETCH_USER_REQUEST,FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "../../Action/API/FechtUser/ActionTypes"
const initState = {
    loading:false,
    userList:[],
    err:''
}
const fetchUserReducer = (state=initState,action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST:{
            return{
                ...state,
                loading:true
            }
        }
        case FETCH_USER_SUCCESS:{
            localStorage.setItem("user", JSON.stringify(action.payload))
            return{
                ...state,
                loading:false,
                userList:action.payload,
                err:"",
            }
        }
        case FETCH_USER_FAILURE:{
            return{
                ...state,
                loading:false,
                userList:[],
                err:action.payload
            }
        }
        default: return{...state}
    }
}
export default fetchUserReducer