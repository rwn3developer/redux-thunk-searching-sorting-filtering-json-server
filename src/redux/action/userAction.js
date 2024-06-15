import axios from "axios";

export const addUser = (data) => {
    return async(dispatch)=>{
        try{
            let all = await axios.post(`http://localhost:8000/users`,data);
            dispatch({
                type : 'adduser',
                payload : all.data
            })
        }catch(err){
            console.log(err);
            dispatch({
                type : 'adduserfailure',
                payload:err
            })
        }
    }
}

export const viewUser = () => {
    return async(dispatch) => {
        try{
            let all = await axios.get(`http://localhost:8000/users`);
            dispatch({
                type : 'fetchuser',
                payload : all.data
            })
        }catch(err){
            dispatch({
                type : 'fetchuserfailer',
                payload : err
            })
        }
    }
}