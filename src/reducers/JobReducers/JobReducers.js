import {
    JOB_FILTERS_SEARCH,JOB_FILTERS_CANCEL
} from "constants/ActionTypes";

const INIT_STATE = {
    filterArray:[],
};
function removeItem(array, action) {
    return [...array.slice(0, action.index), ...array.slice(action.index + 1)];
  }
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case JOB_FILTERS_SEARCH: {
            let selectedFilter=state.filterArray.length>0 ? state.filterArray:[];
            let alreadyFilterSelect=selectedFilter.find(x=>x.name===action.payload.name);
            if(!alreadyFilterSelect){
                selectedFilter.push(action.payload)
            }
            return {
                ...state,
                filterArray:selectedFilter
            }
        
    }
    case JOB_FILTERS_CANCEL: {
        let selectedFilter=state.filterArray;
        let selectedFilterIndex=selectedFilter.findIndex(x=>x.name===action.payload.name);
        selectedFilter.map((filter)=>{
            if(filter.name===action.payload.name)
            {
                 selectedFilter= removeItem(selectedFilter,{index:selectedFilterIndex});
            }
        })
        return {
            ...state,
            filterArray:selectedFilter
        }
    
}
        default:
            return state;
    }
}