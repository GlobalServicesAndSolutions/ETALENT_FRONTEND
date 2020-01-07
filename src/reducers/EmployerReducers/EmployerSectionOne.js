import {
    SHOW_SECTION_ONE_DATA
} from "constants/ActionTypes";

const INIT_STATE = {
    sectionOneData:{}
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SHOW_SECTION_ONE_DATA: {
            
            return {
                ...state,
                sectionOneData:action.payload
            }
        }
        default:
            return state;
    }
}