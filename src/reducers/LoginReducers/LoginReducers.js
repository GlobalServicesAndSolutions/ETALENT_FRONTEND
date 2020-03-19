import {
    ADMIN_SIGNUP_SUCCESS,
} from "constants/ActionTypes";

const INIT_STATE = {
    isAdmin:false,
    initURL:''
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADMIN_SIGNUP_SUCCESS: {
            return {
                ...state,
                isAdmin:action.payload,
                initURL:'/employerHome'
            }
        }
        default:
            return state;
    }
}