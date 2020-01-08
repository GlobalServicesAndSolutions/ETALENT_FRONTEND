import {
    SHOW_SECTION_ONE_DATA,
    SHOW_SECTION_TWO_DATA,
    DELETE_SECTION_ONE_DATA,
    DELETE_SECTION_TWO_DATA,
    SHOW_SECTION_THREE_DATA,
    DELETE_SECTION_THREE_DATA,
    SHOW_SECTION_FOUR_DATA,
    DELETE_SECTION_FOUR_DATA,
    SHOW_SECTION_FIVE_DATA,
    DELETE_SECTION_FIVE_DATA,
    SHOW_SECTION_SIX_DATA,
    DELETE_SECTION_SIX_DATA
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
export const onSaveSectionFourdata = (data) => {
    return {
        type: SHOW_SECTION_FOUR_DATA,
        payload: data
    };
};
export const onDeleteSectionFourdata = () => {
    return {
        type: DELETE_SECTION_FOUR_DATA,
        payload: null
    };
};
export const onSaveSectionFivedata = (data) => {
    return {
        type: SHOW_SECTION_FIVE_DATA,
        payload: data
    };
};
export const onDeleteSectionFivedata = () => {
    return {
        type: DELETE_SECTION_FIVE_DATA,
        payload: null
    };
};
export const onSaveSectionSixdata = (data) => {
    return {
        type: SHOW_SECTION_SIX_DATA,
        payload: data
    };
};
export const onDeleteSectionSixdata = () => {
    return {
        type: DELETE_SECTION_SIX_DATA,
        payload: null
    };
};