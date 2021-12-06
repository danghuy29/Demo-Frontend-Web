import { GET_POST_LIST, EDIT_POST, DELETE_POST, ADD_NEW_POST} from "../../Action/Posts/ActionTypes";
let initialState = [] 
if(localStorage.getItem("post")===null){
    initialState = [] 
}
else{
    initialState =JSON.parse(localStorage.getItem("post"))

}

const postReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_POST_LIST:{    
            return(
                [
                    ...action.payload
                ]
            )
            
        }
        case EDIT_POST:{
            let tempArray = [...state]
            state.forEach((item,index)=>{
                if(item.id===action.payload.id){
                   tempArray[index].title=action.payload.title
                   tempArray[index].body=action.payload.body
                }
            })
            localStorage.setItem("post", JSON.stringify(tempArray))
            return tempArray
        }              
        case DELETE_POST:{
            let deleteIndex = -1
            state.forEach((item,index)=>{
                if(item.id===action.payload){
                    deleteIndex=index
                }
            })
            if(deleteIndex!==-1){
                state.splice(deleteIndex,1)
            }
           localStorage.setItem("post", JSON.stringify([...state]))
            return [...state]
        }
        case ADD_NEW_POST:{
            localStorage.setItem("post", JSON.stringify([...state,action.payload]))
            return(
                [
                    ...state,
                    action.payload
                ]
            )
        }
        default:
            return [...state]
    }

}
export default postReducer;