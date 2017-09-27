import {
    UI_ACT_TYPES as TYPES,
    SCHED_ACT_TYPES,
    DATA_ACT_TYPES
} from '../actions/_ACTION_TYPES';

export default function(state={
    overlayOpen: false,
    compToRender: '',

    slideOverlayOpen: false,
    selectedIds: [],
    slideOptsType: '',
    schedViewType: 'default',
    // Schedule returned to users looking at sched  
    activeSchedId: 'schedId1',
    // Changed when generating new schedule
    generating: false, 
    errorMsg: '',
}, action){

    switch(action.type){
        case DATA_ACT_TYPES.LOAD: {
            return {
                ...state,
                activeSchedId: action.data.activeSchedId
            }
        }
        case TYPES.OPEN_OVERLAY: {
            return {
                ...state,
                overlayOpen: true,
                compToRender: action.compToRender
            }
        }
        case TYPES.CLOSE_OVERLAY: {
            return { 
                ...state,
                overlayOpen: false,
                compToRender: '' 
            }
        }
        case TYPES.OPEN_SLIDE: {
            return {
                ...state,
                slideOverlayOpen: true,
                inputIds: action.selectedIds,
                slideOptsType: action.slideOptsType,
                confirmFunc: action.confirmFunc,
                isToSublist: action.isToSublist
            }
        }
        case TYPES.CLOSE_SLIDE: {
            return {
                ...state,
                slideOverlayOpen: false,
                inputIds: [],
                selectedIds: []
            }
        }
        case TYPES.UPDATE_SELECTED:{
            return {
                ...state,
                selectedIds: action.newList
            }
        }
        case TYPES.CHANGE_SCHED_VIEW:{
            return {
                ...state,
                schedViewType: action.schedViewType
            }
        }

        // Sched ui handlers
        case SCHED_ACT_TYPES.START_GEN_NEW:{
            return {...state,
                    generating: true
                }
        }
        case SCHED_ACT_TYPES.SCHED_GEN_FAIL:{
            return {...state, 
                generating: false,
                errorMsg: action.errorMsg
                }
        }
        case SCHED_ACT_TYPES.SCHED_GEN_SUCCESS:{
            return {
                ...state,
                generating: false,
                errorMsg: '',
            }
        }
        case SCHED_ACT_TYPES.CHANGE_ACTIVE_SCHED:{
            return {
                ...state, 
                activeSchedId: action.newSchedId
            }
        }
        default: return state
    }
}