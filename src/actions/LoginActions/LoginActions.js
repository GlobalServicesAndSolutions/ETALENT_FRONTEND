import {
    ADMIN_SIGNUP_SUCCESS
} from 'constants/ActionTypes';


export const onAdminSignUp = () => {
    return {
        type: ADMIN_SIGNUP_SUCCESS,
        payload: true
    };
};