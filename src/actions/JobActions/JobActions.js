import {
    JOB_FILTERS_SEARCH,
    JOB_FILTERS_CANCEL
} from 'constants/ActionTypes';

export const onClickFilterOptions = (filter) => {
    return {
        type: JOB_FILTERS_SEARCH,
        payload: filter
    };
};
export const onCancelFilter = (filter) => {
    return {
        type: JOB_FILTERS_CANCEL,
        payload: filter
    };
};