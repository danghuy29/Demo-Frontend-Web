import { combineReducers } from "redux";
import postReducer from "./Post/PostReducer";
import userReducer from "./Users/UserReducer";
import fetchPostReducer from "./API/FetchPostReducer";
import fetchUserReducer from "./API/FetchUserReducer";
const rootReducer = combineReducers({
    post:postReducer,
    user:userReducer,
    fetchPost:fetchPostReducer,
    fetchUser:fetchUserReducer
})
export default rootReducer