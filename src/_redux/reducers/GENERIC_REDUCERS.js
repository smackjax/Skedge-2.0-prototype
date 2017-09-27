// Functions for change listeners to other state slices; 
//      like if a member is removed from a group update member sublist
export const updateSublist = {
    addIds: (state, idsToUpdate, sublistKey, newSublistIds)=>{
        const newState = {};
        for(let q = 0; q < idsToUpdate.length; q++){
            const mId = idsToUpdate[q];
            // Prevent duplicate ids by removing ids from incoming list that are already on main
            const noDupes = newSublistIds.filter((sId)=>!state[mId][sublistKey].includes(sId));
            newState[mId]={
                ...state[mId],
                [sublistKey]: state[mId][sublistKey].concat(noDupes)
            };
        }
        return Object.assign({},state, newState);
    },

    //  mainIds are the keys for this slice of state that is being updated
    //  sublistIds are keys of what was updated on list
    deleteIds: (state, idsToUpdate, sublistKey, newSublistIds)=>{ 
        // mainIds
        // taskIds
        const newState = {};
        for(let q = 0; q < idsToUpdate.length; q++){
            const mId = idsToUpdate[q];
            newState[mId]={
                ...state[mId],
                [sublistKey]: state[mId][sublistKey].filter((sId)=>{
                    return !newSublistIds.includes(sId);
                })
            };
        }
        return Object.assign({},state, newState);
    }
}

// Basic CRUD actions
export const mainItems = {
    addNew: (state, newItem)=>{
        return {
            ...state, 
            [newItem.id] :{
                ...newItem
            }
        }
    },
    editName: (state, itemId, newName)=>{
        return {
            ...state, 
            [itemId]: {
                ...state[itemId], 
                name: newName
            }
        }
    },
    delete: (state, idsToDelete)=>{
        let newList = {...state};
        for(let q = 0; q < idsToDelete.length; q++){
            delete newList[idsToDelete[q]];
        }
        return newList;
    }

}