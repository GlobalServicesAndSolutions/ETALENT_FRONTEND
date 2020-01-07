import {
    SHOW_SECTION_ONE_DATA
} from 'constants/ActionTypes';

export const onSaveSectionOnedata = (data) => {
    return {
        type: SHOW_SECTION_ONE_DATA,
        payload: data
    };
};