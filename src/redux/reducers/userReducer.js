const initialState = {
    users : [],
    filteredUser : [],
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

        case 'deleteuser':
            return {
                ...state,
                users : state.users.filter(val => val.id != action.payload),
                error : null
            }

        case 'deleteuserfailer':
            return {
                ...state,
                error : null
        }


        case 'updateuser':
        return{
            ...state,
            users : state.users.map(val => val.id == action.payload.id ? action.payload : val),
            error : null
        }

        case 'statuswisefilter':
            return{
                ...state,
                users : action.payload,
                error : null
            }

        case 'namewisefilter':
            console.log(action.payload);
            return {
                ...state,
                users : action.payload,
                error : null
            }

    
        default:
            return state;
    }
}

export default UserReducer;