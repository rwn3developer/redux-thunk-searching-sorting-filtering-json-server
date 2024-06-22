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

export const deleteUser = (userId) => {
    
    return async(dispatch) => {
        try{
            let all = await axios.delete(`http://localhost:8000/users/${userId}`);
            dispatch({
               type : 'deleteuser',
               payload:userId
            })
        }catch(err){
            dispatch({
                type : 'deleteuserfailer',
                payload : err
            })
        }
    }
}

export const updateUser = (user) => {
    return async(dispatch) => {
        try{
            let all = await axios.put(`http://localhost:8000/users/${user.id}`,user)
            dispatch({
               type : 'updateuser',
               payload:all.data
            })
        }catch(err){
            dispatch({
                type : 'updateuserfailer',
                payload : err
            })
        }
    }
}

export const FilterRecord = (status,name,sort) => {
    return async(dispatch) => {
        try{
            const all = await axios.get(`http://localhost:8000/users?status=${status}`);
            let filter = all.data.filter(val => val.name.toLowerCase().includes(name.toLowerCase()))
            if(sort === "asc"){
                filter.sort((a,b)=>a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
            }else{
                filter.sort((a,b)=>a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
            }
            dispatch({
               type : 'filterrecord',
               payload:filter
            })
        }catch(err){
            dispatch({
                type : 'filterrecorderr',
                payload : err
            })
        }
    }
}
