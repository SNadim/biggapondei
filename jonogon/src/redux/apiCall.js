import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async(dispatch, user)=>{
    dispatch(loginStart());

    try {
        const config = {     
            headers: { 'content-type': 'application/json' }
        }
        
        const response = await axios.post("http://localhost:5000/login",user, config);
        console.log(response.data);
        dispatch(loginSuccess(response.data));
    } catch (error) {
        dispatch(loginFailure())
    }
}