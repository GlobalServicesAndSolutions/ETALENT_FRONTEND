import {
    SHOW_SECTION_ONE_DATA,
    DELETE_SECTION_ONE_DATA,
    SHOW_SECTION_TWO_DATA,
    DELETE_SECTION_TWO_DATA,
    SHOW_SECTION_THREE_DATA,
    DELETE_SECTION_THREE_DATA,
    SHOW_SECTION_FOUR_DATA,
    DELETE_SECTION_FOUR_DATA,
    SHOW_SECTION_FIVE_DATA,
    DELETE_SECTION_FIVE_DATA,
    SHOW_SECTION_SIX_DATA,
    DELETE_SECTION_SIX_DATA
} from "constants/ActionTypes";

const INIT_STATE = {
    sectionOneData:null,
    sectionTwoData:null,
    sectionThreeData:null,
    sectionFourData:null,
    sectionFiveData:null,
    sectionSixData:null
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SHOW_SECTION_ONE_DATA: {
            
            return {
                ...state,
                sectionOneData:action.payload
            }
        }
        case DELETE_SECTION_ONE_DATA: {
            return {
                ...state,
                sectionOneData:action.payload
            }
        }
        case SHOW_SECTION_TWO_DATA: {
            return {
                ...state,
                sectionTwoData:action.payload
            }
        }
        case DELETE_SECTION_TWO_DATA: {
            
            return {
                ...state,
                sectionTwoData:action.payload
            }
        }
        case SHOW_SECTION_THREE_DATA: {
            return {
                ...state,
                sectionThreeData:action.payload
            }
        }
        case DELETE_SECTION_THREE_DATA: {
            
            return {
                ...state,
                sectionThreeData:action.payload
            }
        }
        case SHOW_SECTION_FOUR_DATA: {
            return {
                ...state,
                sectionFourData:action.payload
            }
        }
        case DELETE_SECTION_FOUR_DATA: {
            
            return {
                ...state,
                sectionFourData:action.payload
            }
        }
        case SHOW_SECTION_FIVE_DATA: {
            return {
                ...state,
                sectionFiveData:action.payload
            }
        }
        case DELETE_SECTION_FIVE_DATA: {
            
            return {
                ...state,
                sectionFiveData:action.payload
            }
        }
        case SHOW_SECTION_SIX_DATA: {
            return {
                ...state,
                sectionSixData:action.payload
            }
        }
        case DELETE_SECTION_SIX_DATA: {
            
            return {
                ...state,
                sectionSixData:action.payload
            }
        }
        default:
            return state;
    }
}