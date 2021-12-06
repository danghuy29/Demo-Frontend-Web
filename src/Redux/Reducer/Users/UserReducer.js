import { GET_USER_LIST} from "../../Action/User/userTypes";
let initialState =[]
if(localStorage.getItem("user")!==null){
    initialState = JSON.parse(localStorage.getItem("user"))
}

const userReducer =(state= initialState,action)=>{
    switch(action.type){
        case GET_USER_LIST:{
            return[
                ...action.payload
            ]
        }
        default:
             return state
    }

}
export default userReducer;