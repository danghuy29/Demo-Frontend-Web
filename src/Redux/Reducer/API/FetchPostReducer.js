import { FETCH_POST_REQUEST,FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from "../../Action/API/FetchPosts/ActionTypes"
const initState = {
    loading:false,
    postList:[],
    err:''
}
const fetchPostReducer = (state=initState,action)=>{
    switch(action.type){
        case FETCH_POST_REQUEST:{
            return{
                ...state,
                postList:[],
                loading:true,
                err:''
            }
        }
        case FETCH_POST_SUCCESS:{
                localStorage.setItem("post", JSON.stringify(action.payload))
            return{
                ...state,
                loading:false,
                postList:action.payload,
                err:''
            }
        }
        case FETCH_POST_FAILURE:{
            return{
                ...state,
                loading:false,
                postList:[],
                err:action.payload
            }
        }
        default: return {...state}
    }
}
export default fetchPostReducer