import {
    SHOW_SECTION_ONE_DATA,
    SHOW_SECTION_TWO_DATA,
    DELETE_SECTION_ONE_DATA,
    DELETE_SECTION_TWO_DATA,
    SHOW_SECTION_THREE_DATA,
    DELETE_SECTION_THREE_DATA
} from 'constants/ActionTypes';

export const onSaveSectionOnedata = (data) => {
    return {
        type: SHOW_SECTION_ONE_DATA,
        payload: data
    };
};
export const onDeleteSectionOnedata = () => {
    return {
        type: DELETE_SECTION_ONE_DATA,
        payload: null
    };
};
export const onSaveSectionTwodata = (data) => {
    return {
        type: SHOW_SECTION_TWO_DATA,
        payload: data
    };
};
export const onDeleteSectionTwodata = () => {
    return {
        type: DELETE_SECTION_TWO_DATA,
        payload: null
    };
};
export const onSaveSectionThreedata = (data) => {
    return {
        type: SHOW_SECTION_THREE_DATA,
        payload: data
    };
};
export const onDeleteSectionThreedata = () => {
    return {
        type: DELETE_SECTION_THREE_DATA,
        payload: null
    };
};