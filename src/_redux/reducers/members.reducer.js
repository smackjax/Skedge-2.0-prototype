import {MEMBER_ACT_TYPES as TYPES, 
    GROUP_ACT_TYPES as GROUP_TYPES,
    SCHED_ACT_TYPES as SCHED_TYPES,
    DATA_ACT_TYPES} from '../actions/_ACTION_TYPES';

// Generic reducer functions 
import {updateSublist, mainItems } from './GENERIC_REDUCERS';

export default function(state={
    membId1: {
        id: 'membId1',
        name: 'Smackjax',
        // Date strings by dehydrated date format
        unavailableDates: [['2017-09-15','2017-09-16','2017-09-17','2017-09-18']],
        // Times assigned gets added to 
        totalTimesAssigned: 0,
        groups: ['groupId1', 'groupId2']    
    },
    membId2: {
        id: 'membId2',
        name: 'The Kid',
         // Date strings by dehydrated date format
         unavailableDates: [],
        totalTimesAssigned: 0,
        groups: ['groupId1', 'groupId3']  
    },
    membId3: {
        id: 'membId3',
        name: 'TJ',
         // Date strings by dehydrated date format
        unavailableDates: [],
        totalTimesAssigned: 6,
        groups: ['groupId1']  
    },
}, action){
    switch(action.type){
        case DATA_ACT_TYPES.LOAD: {
            // Check for & return local data OR
                // if none, an empty object 
            return {
                ...action.data.membersById
            }
        }

        // action.newMemb
        case TYPES.ADD_MEMBER:
            return mainItems.addNew(state, action.newMemb);
        
        // action.membId
        // action.newName
        case TYPES.EDIT_MEMBER_NAME:
            return mainItems.editName(state, action.membId, action.newName);

        // action.membIdList
        case TYPES.DELETE_MEMBERS: 
            return mainItems.delete(state, action.membIdList);

       
       
        // -- UNAVAILABLE DATES 
        case TYPES.ADD_UNAVAIL_DATES: {
            const newState = {...state};
            newState[action.membId].unavailableDates.push(action.datesArray);
            return newState;
        }
        case TYPES.DELETE_UNAVAIL_DATES: {     
            const newState = {...state};
            console.log(newState[action.membId].unavailableDates);
            newState[action.membId].unavailableDates.splice(action.datesIndex, 1);
            return newState;
        }


        // - - GROUP SUBLIST FUNCTIONS
        // action.membIds
        // action.groupIds
        case TYPES.UPDATE_GROUP_SUBLIST: {
            const newState = {...state};
            for(let mId of action.membIds){
                newState[mId].groups = [...action.groupIds]; 
            }
            return {...newState};
        }

        // Listens for groups updating their members list
        case GROUP_TYPES.UPDATE_MEMBERS_IN_GROUPS: {
            // action.groupIds
            // action.membIds
            const newState = {...state};
            const membIdKeys = Object.keys(state);
            for(let mIdKey of membIdKeys){
                if(action.membIds.includes(mIdKey)){
                    const noDupeIds = action.groupIds.filter(
                        gId=>!newState[mIdKey].groups.includes(gId)
                    );
                    const newGroupsList = [...newState[mIdKey].groups, ...noDupeIds];
                    newState[mIdKey].groups = newGroupsList;
                } else { //<-- if membId is not on action.membIds
                    newState[mIdKey].groups = newState[mIdKey].groups.filter(
                       gId=>!action.groupIds.includes(gId)
                    );
                }
            } 
            return newState;
            
        }

        case GROUP_TYPES.ADD_MEMBERS_TO_GROUPS:
            return updateSublist.addIds(
                state,
                action.membIds,
                'groups',
                action.groupIds
            );
        case GROUP_TYPES.DELETE_MEMBERS_FROM_GROUPS:
            return updateSublist.deleteIds(
                state,
                action.membIds,
                'groups',
                action.groupIds
            );

        // Removes group id from all members if deleted
        case GROUP_TYPES.DELETE_GROUPS: {
            // action.groupIdList
            const allIds = Object.keys(state);
            return updateSublist.deleteIds(
                state, 
                allIds,
                'groups',
                action.groupIdList
            );
        }

        

        // Takes updated member values after new sched generation
        case SCHED_TYPES.SCHED_GEN_SUCCESS: {
            return {
                ...action.newMembVals
            }
        }

        default: return state
    }//end switch
}
