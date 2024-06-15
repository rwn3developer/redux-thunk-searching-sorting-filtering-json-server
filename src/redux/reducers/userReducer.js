const initialState = {
    users : [],
    error : null
}


const UserReducer = (state = initialState,action) => {
    switch(action.type){
        case 'adduser':
            let newrecord = [...state.users,action.payload]
            return {
                ...state,
                users : newrecord,
                err : null
            }

        case 'adduserfailure':
            return {
                ...state,
                error : action.payload
            }

        case 'fetchuser':
            return {
                ...state,
                users : action.payload,
                error : null
            }

        case 'fetchuserfailer':
            return{
                ...state,
                error : action.payload
            }

        

        default:
            return state;
    }
}

export default UserReducer;