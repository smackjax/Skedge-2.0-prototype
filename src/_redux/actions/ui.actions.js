import { UI_ACT_TYPES as UI_ACTS,

} from './_ACTION_TYPES';

export default {
    closeSlideout(){
        return{
            type: UI_ACTS.CLOSE_SLIDE
        }
    },
    openSlideout(selectedIds, sublistKey, confirmFunc, isToSublist){
        return{
            type: UI_ACTS.OPEN_SLIDE,
            selectedIds,
            slideOptsType: sublistKey,
            isToSublist,
            confirmFunc
        }
    },
    // TODO I believe this defunct now
    addMainItemsToIds(selectedIds, sublistKey, confirmFunc){
        return{
            type: UI_ACTS.OPEN_SLIDE,
            selectedIds,
            slideOptsType: sublistKey,
            confirmFunc
        }
    },
    updateSelected(newList){
        return {
            type: UI_ACTS.UPDATE_SELECTED,
            newList
        }
    },
    changeSchedView(schedViewType){
        return {
            type: UI_ACTS.CHANGE_SCHED_VIEW,
            schedViewType
        }
    },

        // TODO fix compToRender and don't store it
    openOverlay(compToRender){
        return {
            type: UI_ACTS.OPEN_OVERLAY,
            compToRender
        }
    },
    closeOverlay(compToRender){
        return {
            type: UI_ACTS.CLOSE_OVERLAY,
        }
    }
}