import reduxStore from '../_redux/redux-store';
// Important notes
// Once a schedule is generated, it doesn't rely on any other info(like getting a name from an id)
    // This ensures the ability to view past schedules and avoids conflicts with deletion

import GenSched from './gen-new-sched';

export function getOneSched(schedId){
    const schedList = {...reduxStore.getState().schedsById};
    return schedList[schedId] 
}
export function genNewSched(startDateStr, endDateStr){
    /* Returns {
        newSched, 
        newMembVals,
        newTaskVals
        }
    */
    return GenSched(startDateStr, endDateStr, reduxStore.getState());
}


// TODO feature, edit sched