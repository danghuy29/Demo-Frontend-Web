import { GET_USER_LIST} from "./userTypes";
export const getUserList = (userList)=>{
    return({
        type:GET_USER_LIST,
        payload:userList,
    })
}
